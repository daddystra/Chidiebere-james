require("dotenv").config();

const express = require("express");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;
const sessionSecret = process.env.SESSION_SECRET || "forma-architects-development-secret-2026";

// Ensure the local data folder exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const DB_FILE = path.join(dataDir, "users.json");

if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
}

function readUsers() {
  return JSON.parse(fs.readFileSync(DB_FILE, "utf8"));
}

function saveUsers(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    name: "forma.sid",
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 2
    }
  })
);

// Serve the website files
app.use(express.static(path.join(__dirname,"public")));

// Registration is always for customers.
// Never accept a role from public registration.
app.post("/api/auth/register", async (req, res) => {
  try {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (name.length < 2 || name.length > 80) {
      return res.status(400).json({ message: "Enter a valid name." });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
      return res.status(400).json({ message: "Enter a valid email." });
    }

    if (password.length < 12 || password.length > 72) {
      return res.status(400).json({
        message: "Password must contain 12–72 characters."
      });
    }

    const data = readUsers();

    if (data.users.some(user => user.email === email)) {
      return res.status(409).json({
        message: "An account with this email already exists."
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    const user = {
      id: require("crypto").randomUUID(),
      name,
      email,
      passwordHash,
      role: "customer",
      createdAt: new Date().toISOString()
    };

    data.users.push(user);
    saveUsers(data);

    return res.status(201).json({
      message: "Account created. You can now sign in."
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({ message: "Could not create account." });
  }
});

// Sign in
app.post("/api/auth/login", async (req, res) => {
  try {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    const data = readUsers();
    const user = data.users.find(item => item.email === email);

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({
        message: "Incorrect email or password."
      });
    }

    // Regenerate session after authentication
    req.session.regenerate(error => {
      if (error) {
        return res.status(500).json({ message: "Could not sign in." });
      }

      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };

      req.session.save(saveError => {
        if (saveError) {
          return res.status(500).json({ message: "Could not save session." });
        }

        return res.json({
          message: "Signed in successfully.",
          user: req.session.user
        });
      });
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Could not sign in." });
  }
});

// Return the currently signed-in user
app.get("/api/auth/me", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ message: "Please sign in." });
  }

  res.json({ user: req.session.user });
});

// Sign out
app.post("/api/auth/logout", (req, res) => {
  req.session.destroy(error => {
    if (error) {
      return res.status(500).json({ message: "Could not sign out." });
    }

    res.clearCookie("forma.sid", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production"
    });

    res.json({ message: "Signed out." });
  });
});

// Require any signed-in user
function requireLogin(req, res, next) {
  if (!req.session.user) {
    return res.status(401).json({ message: "Please sign in first." });
  }

  next();
}

// Require an admin account
function requireAdmin(req, res, next) {
  if (!req.session.user || req.session.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access required." });
  }

  next();
}

app.get("/api/customer/dashboard", requireLogin, (req, res) => {
  if (req.session.user.role !== "customer") {
    return res.status(403).json({ message: "Customer access required." });
  }

  res.json({
    message: "Welcome to your customer dashboard.",
    user: req.session.user
  });
});

app.get("/api/admin/dashboard", requireAdmin, (req, res) => {
  res.json({
    message: "Welcome to the FORMA admin dashboard.",
    user: req.session.user
  });
});

if (!process.env.SESSION_SECRET || process.env.SESSION_SECRET.length < 32) {
  console.warn("SESSION_SECRET missing or too short; using a local development fallback.");
}

app.listen(PORT, () => {
  console.log(`FORMA ARCHITECTS running at http://localhost:${PORT}`);
});