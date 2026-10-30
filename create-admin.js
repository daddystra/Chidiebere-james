require("dotenv").config();

const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const usersFile = path.join(__dirname, "data", "users.json");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function main() {
  if (!fs.existsSync(usersFile)) {
    console.log("User database not found.");
    console.log("Start the server and register your customer account first.");
    rl.close();
    return;
  }

  const fileData = JSON.parse(
    fs.readFileSync(usersFile, "utf8")
  );
  const users = Array.isArray(fileData)
    ? fileData
    : Array.isArray(fileData.users)
      ? fileData.users
      : [];

  if (users.some(user => user.role === "admin")) {
    console.log("An admin account already exists.");
    rl.close();
    return;
  }

  rl.question("Admin name: ", name => {
    rl.question("Admin email: ", email => {
      rl.question("Admin password (12+ characters): ", async password => {
        try {
          name = name.trim();
          email = email.trim().toLowerCase();

          if (!name || !email.includes("@")) {
            console.log("Enter a valid name and email.");
            rl.close();
            return;
          }

          if (password.length < 12 || password.length > 72) {
            console.log("Password must be 12–72 characters.");
            rl.close();
            return;
          }

          if (users.some(user => user.email === email)) {
            console.log("This email is already registered.");
            console.log("Use a different email for the admin.");
            rl.close();
            return;
          }

          const passwordHash = await bcrypt.hash(password, 12);

          users.push({
            id: Date.now().toString(),
            name,
            email,
            passwordHash,
            role: "admin",
            createdAt: new Date().toISOString()
          });

          fs.writeFileSync(
            usersFile,
            JSON.stringify({ users }, null, 2),
            { mode: 0o600 }
          );

          console.log("Admin account created successfully.");
        } catch (error) {
          console.log("Could not create admin:", error.message);
        }

        rl.close();
      });
    });
  });
}

main();