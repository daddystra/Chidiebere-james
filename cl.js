// ======================================
// SOLE DISTRICT - JAVASCRIPT
// ======================================

const productCatalog = [
    {
        id: "red-street-runner",
        name: "Red Street Runner",
        category: "Urban Sneakers",
        price: 85000,
        tag: "BEST SELLER",
        image: "img/Jordan-Nike.jpg",
        description: "Built for the city and refined for the weekend. A clean profile, premium cushioning, and standout colourway designed to move with you.",
        colors: [
            { name: "Sunset Red", hex: "#e64d46" },
            { name: "Midnight Black", hex: "#111111" },
            { name: "Bone White", hex: "#efe1cf" }
        ],
        sizes: ["38", "39", "40", "41", "42", "43"]
    },
    {
        id: "classic-low",
        name: "Classic Low",
        category: "Everyday Sneakers",
        price: 95000,
        tag: "NEW DROP",
        image: "img/Mens shoes ideas.jpg",
        description: "Minimal, versatile, and ready for daily rotation. This everyday essential balances texture, fit, and comfort in one bold silhouette.",
        colors: [
            { name: "Ash Grey", hex: "#a7abb2" },
            { name: "Sand Beige", hex: "#d8c5a5" },
            { name: "Jet Black", hex: "#1b1b1b" }
        ],
        sizes: ["37", "38", "39", "40", "41", "42", "43"]
    },
    {
        id: "urban-force",
        name: "Urban Force",
        category: "Street Collection",
        price: 110000,
        tag: "LIMITED",
        image: "img/Nike Men's Air Force 1 '07 Sneaker.jpg",
        description: "An elevated sneaker built for movement and attention. Crisp lines, premium materials, and a confident finish bring standout energy to any look.",
        colors: [
            { name: "Slate Blue", hex: "#364a6e" },
            { name: "Volt Green", hex: "#b7dd54" },
            { name: "Monochrome", hex: "#e9e9e9" }
        ],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: "daily-motion",
        name: "Daily Motion",
        category: "Sport Lifestyle",
        price: 90000,
        tag: "TRENDING",
        image: "img/Blue Nubuck Torino.jpg",
        description: "Lightweight comfort meets a sharp, modern finish. Built for daily movement without sacrificing the premium feel you expect from SOLE DISTRICT.",
        colors: [
            { name: "Blue Nubuck", hex: "#4b7ec0" },
            { name: "Crimson", hex: "#c73c39" },
            { name: "Pearl White", hex: "#f0efe9" }
        ],
        sizes: ["36", "37", "38", "39", "40", "41", "42"]
    },
    {
        id: "oversized-tee",
        name: "Oversized Tee",
        category: "Essential Collection",
        price: 25000,
        tag: "NEW",
        image: "img/10 Streetwear Color Combinations That Never Go Out of Style_ Timeless Looks for Your Wardrobe.jpg",
        description: "Relaxed, oversized and effortless. A key streetwear staple designed to sit clean, feel soft, and complete your everyday rotation.",
        colors: [
            { name: "Cloud White", hex: "#f3f1eb" },
            { name: "Charcoal", hex: "#3a3d42" },
            { name: "Army Olive", hex: "#7a7b55" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "district-hoodie",
        name: "District Hoodie",
        category: "Premium Streetwear",
        price: 45000,
        tag: "POPULAR",
        image: "img/1096696946793563262.jpg",
        description: "Premium heavyweight fleece with a dropped silhouette, plush interior, and the kind of fit that defines your everyday look.",
        colors: [
            { name: "Blackout", hex: "#121212" },
            { name: "Stone Grey", hex: "#95989d" },
            { name: "Rust Red", hex: "#8f3b35" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "urban-fit",
        name: "Urban Fit",
        category: "Street Collection",
        price: 38000,
        tag: "TRENDING",
        image: "img/55555.jpg",
        description: "A versatile street fit with elevated basics and easy movement. It layers cleanly and keeps the focus on your unique energy.",
        colors: [
            { name: "Mist Grey", hex: "#b9bdc4" },
            { name: "Cocoa", hex: "#8a6551" },
            { name: "Deep Navy", hex: "#273a5d" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "district-jacket",
        name: "District Jacket",
        category: "Outerwear",
        price: 65000,
        tag: "NEW DROP",
        image: "img/992480836621455259.jpg",
        description: "A statement layer with utility detailing, warm insulation, and the sharp finish needed to stand out in any crowd.",
        colors: [
            { name: "Storm Black", hex: "#171718" },
            { name: "Army Green", hex: "#47583d" },
            { name: "Iced Grey", hex: "#d9dbe1" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "summit-runner",
        name: "Summit Runner",
        category: "Trail Performance",
        price: 98000,
        tag: "NEW",
        image: "img/New Samba release in white leather with green….jpg",
        description: "Built for all-day movement with extra grip, a responsive ride, and a sleek profile that transitions from street to trail seamlessly.",
        colors: [
            { name: "Forest Green", hex: "#34705b" },
            { name: "Silver Mist", hex: "#d3d6db" },
            { name: "Night Slate", hex: "#2d2d32" }
        ],
        sizes: ["39", "40", "41", "42", "43", "44"]
    },
    {
        id: "city-boost",
        name: "City Boost",
        category: "Lifestyle Runner",
        price: 92000,
        tag: "TRENDING",
        image: "img/Zapatillas Puma Park Lifestyle Easy Unisex Moda Negro.jpg",
        description: "A light, easy-going everyday sneaker with plush comfort and a sporty finish designed for fast city movement.",
        colors: [
            { name: "Electric Blue", hex: "#2b74d9" },
            { name: "Cream White", hex: "#f4efe8" },
            { name: "Ink Black", hex: "#111111" }
        ],
        sizes: ["37", "38", "39", "40", "41", "42"]
    },
    {
        id: "midnight-ace",
        name: "Midnight Ace",
        category: "Premium Street",
        price: 101000,
        tag: "LIMITED",
        image: "img/Timberland comemora 40 anos com 1973 pares de botas numeradas e exclusivas.jpg",
        description: "A refined hybrid built with premium textures, cushioning, and elevated design language for statement everyday wear.",
        colors: [
            { name: "Shadow Black", hex: "#171717" },
            { name: "Copper Red", hex: "#a84c39" },
            { name: "Pearl Silver", hex: "#d9dfe5" }
        ],
        sizes: ["38", "39", "40", "41", "42", "43", "44"]
    },
    {
        id: "canvas-tee",
        name: "Canvas Tee",
        category: "Essential Basics",
        price: 22000,
        tag: "NEW",
        image: "img/219.jpg",
        description: "A fresh everyday essential with premium cotton feel, relaxed fit, and refined streetwear simplicity.",
        colors: [
            { name: "Clean White", hex: "#f5f1ea" },
            { name: "Cinder", hex: "#373b42" },
            { name: "Sandstone", hex: "#d7b98d" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "night-shift-hoodie",
        name: "Night Shift Hoodie",
        category: "Heavyweight Layering",
        price: 48000,
        tag: "POPULAR",
        image: "img/03550901400-A2M_jpg (1440×2161).jpg",
        description: "A heavyweight layer with plush lining, oversized shape, and subtle detailing for all-day comfort and edge.",
        colors: [
            { name: "Obsidian", hex: "#121212" },
            { name: "Fog Grey", hex: "#9ba0a7" },
            { name: "Brick Red", hex: "#8b3d33" }
        ],
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: "utility-bomber",
        name: "Utility Bomber",
        category: "Outerwear",
        price: 71000,
        tag: "LIMITED",
        image: "img/Jaqueta casual masculina de streetwear com estampa em cores contrastantes.jpg",
        description: "Clean utility details and a structured silhouette make this bomber an ideal layer for cold nights and city movement.",
        colors: [
            { name: "Olive Steel", hex: "#4a563d" },
            { name: "Stone Light", hex: "#dfe2dd" },
            { name: "Blackout", hex: "#1b1b1c" }
        ],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "street-knit",
        name: "Street Knit",
        category: "Premium Essentials",
        price: 36000,
        tag: "TRENDING",
        image: "img/Outfit streetwear avec jersey oversize – Style urbain minimaliste.jpg",
        description: "A softer knit silhouette with a relaxed shape, premium hand feel, and standout streetwear character.",
        colors: [
            { name: "Heather Grey", hex: "#b7bcc2" },
            { name: "Forest Clay", hex: "#7d7855" },
            { name: "Navy", hex: "#213a5e" }
        ],
        sizes: ["S", "M", "L", "XL"]
    }
];

const productLookup = new Map(productCatalog.map(product => [product.id, product]));
const productIdAliases = new Map([
    ["puma-park-lifestyle", "city-boost"]
]);

function normalizeProductId(productId) {
    const value = String(productId || "").trim().toLowerCase();
    if (!value) {
        return "";
    }

    return productIdAliases.get(value) || value;
}

function formatCurrency(value) {
    return `₦${Number(value || 0).toLocaleString("en-NG")}`;
}

function resolveImagePath(imagePath) {
    if (!imagePath) {
        return "img/Jordan-Nike.jpg";
    }

    if (/^(https?:|data:)/i.test(imagePath)) {
        return imagePath;
    }

    return encodeURI(imagePath);
}

function safeReadCart() {
    try {
        const savedCart = localStorage.getItem("soleDistrictCart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : [];

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.filter(item => item && item.name && Number.isFinite(item.price) && Number.isFinite(item.quantity));
    } catch (error) {
        console.warn("Cart could not be loaded from localStorage.", error);
        return [];
    }
}

function getProductById(productId) {
    const normalizedId = normalizeProductId(productId);
    return productLookup.get(normalizedId) || productCatalog[0];
}

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
    const updateMenuState = () => {
        const isOpen = mobileMenu.classList.contains("active");
        menuToggle.textContent = isOpen ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    };

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        updateMenuState();
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            updateMenuState();
        });
    });

    document.addEventListener("click", (event) => {
        const clickedInsideMenu = mobileMenu.contains(event.target);
        const clickedToggle = menuToggle.contains(event.target);

        if (!clickedInsideMenu && !clickedToggle && mobileMenu.classList.contains("active")) {
            mobileMenu.classList.remove("active");
            updateMenuState();
        }
    });

    updateMenuState();
}

// 2. SHOPPING CART

let cart = safeReadCart();
const cartCount = document.getElementById("cart-count");

function updateCart() {
    const totalItems = cart.reduce(
        (total, item) => total + (Number(item.quantity) || 0),
        0
    );

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    try {
        localStorage.setItem(
            "soleDistrictCart",
            JSON.stringify(cart)
        );
    } catch (error) {
        console.warn("Cart could not be saved to localStorage.", error);
    }
}

// 3. ADD PRODUCTS TO CART

function addToCart(name, price, options = {}) {
    const productName = name && String(name).trim();
    const productPrice = Number(price);
    const productId = options.productId ? String(options.productId) : "";

    if (!productName || !Number.isFinite(productPrice)) {
        return;
    }

    const quantity = Number(options.quantity) > 0 ? Number(options.quantity) : 1;
    const size = options.size ? String(options.size) : "";
    const color = options.color ? String(options.color) : "";

    const existingProduct = cart.find(item =>
        item.name === productName &&
        (!productId || item.productId === productId) &&
        (!size || item.size === size) &&
        (!color || item.color === color)
    );

    if (existingProduct) {
        existingProduct.quantity = Number(existingProduct.quantity) || 0;
        existingProduct.quantity += quantity;
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: quantity,
            size: size,
            color: color,
            productId: productId || undefined
        });
    }

    updateCart();
}

// Connect all add-to-cart buttons

document.querySelectorAll(".add-cart").forEach(button => {
    button.addEventListener("click", (event) => {
        const productId = button.dataset.product;

        if (productId) {
            event.preventDefault();
            window.location.href = `product-details.html?product=${encodeURIComponent(productId)}`;
            return;
        }

        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        addToCart(name, price);
        alert(name + " added to your shopping bag!");
    });
});

// 4. VIEW SHOPPING BAG

const bagLink = document.querySelector(".bag");

if (bagLink) {
    bagLink.addEventListener("click", (event) => {
        const isBagPage = document.body.dataset.page === "shopping-bag";
        if (isBagPage) {
            return;
        }

        event.preventDefault();
        window.location.href = "shopping-bag.html";
    });
}

function getCartItemVariant(item) {
    return [item.size ? `Size ${item.size}` : "", item.color ? `Colour ${item.color}` : ""]
        .filter(Boolean)
        .join(" • ");
}

function getProductImage(item) {
    const catalogProduct = item && item.productId
        ? productLookup.get(item.productId)
        : null;
    const catalogImage = catalogProduct?.image || productCatalog.find(product => product.name === item?.name)?.image;
    return resolveImagePath(catalogImage || productCatalog[0]?.image || "img/Jordan-Nike.jpg");
}

function renderBagPage() {
    const bagItemsContainer = document.getElementById("bag-items");
    const itemCount = document.getElementById("bag-item-count");
    const subtotalElement = document.getElementById("summary-subtotal");
    const shippingElement = document.getElementById("summary-shipping");
    const totalElement = document.getElementById("summary-total");

    if (!bagItemsContainer) {
        return;
    }

    if (!cart.length) {
        bagItemsContainer.innerHTML = `
            <div class="empty-bag-state">
                <div class="empty-bag-icon">👜</div>
                <h3>Your bag is empty</h3>
                <p>Add a few pieces from the collection to complete your look.</p>
                <a href="cl.html#shop" class="continue-shopping">SHOP NOW</a>
            </div>
        `;

        if (itemCount) {
            itemCount.textContent = "0";
        }

        if (subtotalElement) subtotalElement.textContent = formatCurrency(0);
        if (shippingElement) shippingElement.textContent = formatCurrency(0);
        if (totalElement) totalElement.textContent = formatCurrency(0);
        return;
    }

    let subtotal = 0;

    bagItemsContainer.innerHTML = cart.map((item, index) => {
        const quantity = Number(item.quantity) || 1;
        const price = Number(item.price) || 0;
        const itemTotal = price * quantity;
        subtotal += itemTotal;

        return `
            <article class="bag-item">
                <div class="bag-item-image">
                    <img src="${getProductImage(item)}" alt="${item.name}">
                </div>
                <div class="bag-item-content">
                    <div class="bag-item-header">
                        <div>
                            <h3>${item.name}</h3>
                            <p>${getCartItemVariant(item) || "Standard fit"}</p>
                        </div>
                        <button type="button" class="remove-item" data-index="${index}">REMOVE</button>
                    </div>

                    <div class="bag-item-meta">
                        <div class="bag-price">${formatCurrency(price)}</div>
                        <div class="bag-quantity-control">
                            <button type="button" data-index="${index}" data-action="decrease">−</button>
                            <input type="number" min="1" value="${quantity}" data-index="${index}" data-field="quantity">
                            <button type="button" data-index="${index}" data-action="increase">+</button>
                        </div>
                    </div>

                    <div class="bag-item-total">${formatCurrency(itemTotal)}</div>
                </div>
            </article>
        `;
    }).join("");

    const shipping = subtotal > 0 ? (subtotal >= 50000 ? 0 : 3500) : 0;
    const total = subtotal + shipping;

    if (itemCount) {
        itemCount.textContent = String(cart.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0));
    }

    if (subtotalElement) subtotalElement.textContent = formatCurrency(subtotal);
    if (shippingElement) shippingElement.textContent = formatCurrency(shipping);
    if (totalElement) totalElement.textContent = formatCurrency(total);

    bagItemsContainer.querySelectorAll(".remove-item").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            cart.splice(index, 1);
            updateCart();
            renderBagPage();
        });
    });

    bagItemsContainer.querySelectorAll("[data-action]").forEach(button => {
        button.addEventListener("click", () => {
            const index = Number(button.dataset.index);
            const action = button.dataset.action;
            const item = cart[index];

            if (!item) {
                return;
            }

            const quantityInput = bagItemsContainer.querySelector(`input[data-index="${index}"][data-field="quantity"]`);
            let currentValue = Number(item.quantity) || 1;

            if (action === "increase") {
                currentValue += 1;
            }

            if (action === "decrease") {
                currentValue = Math.max(1, currentValue - 1);
            }

            item.quantity = currentValue;
            if (quantityInput) {
                quantityInput.value = currentValue;
            }
            updateCart();
            renderBagPage();
        });
    });

    bagItemsContainer.querySelectorAll("input[data-field='quantity']").forEach(input => {
        input.addEventListener("change", () => {
            const index = Number(input.dataset.index);
            const item = cart[index];
            const value = Number(input.value);

            if (!item || !Number.isFinite(value) || value < 1) {
                input.value = Number(item.quantity) || 1;
                return;
            }

            item.quantity = value;
            updateCart();
            renderBagPage();
        });
    });
}

if (document.body.dataset.page === "shopping-bag") {
    renderBagPage();

    const checkoutButton = document.querySelector(".checkout-btn");
    const checkoutModal = document.getElementById("checkout-choice-modal");
    const checkoutEmailInput = document.getElementById("checkout-email-input");
    const checkoutEmailLoginButton = document.getElementById("checkout-email-login");
    const checkoutGuestButton = document.getElementById("checkout-guest");
    const closeCheckoutChoice = document.getElementById("checkout-choice-close");

    function openCheckoutChoice() {
        if (!checkoutModal) {
            window.location.href = "guest-checkout.html";
            return;
        }

        checkoutModal.classList.add("active");
        checkoutModal.setAttribute("aria-hidden", "false");

        if (checkoutEmailInput) {
            checkoutEmailInput.focus();
        }
    }

    function closeCheckoutChoiceModal() {
        if (!checkoutModal) return;
        checkoutModal.classList.remove("active");
        checkoutModal.setAttribute("aria-hidden", "true");
    }

    if (checkoutButton) {
        checkoutButton.addEventListener("click", () => {
            if (!cart.length) {
                alert("Your shopping bag is empty.");
                return;
            }

            openCheckoutChoice();
        });
    }

    if (closeCheckoutChoice) {
        closeCheckoutChoice.addEventListener("click", closeCheckoutChoiceModal);
    }

    if (checkoutModal) {
        checkoutModal.addEventListener("click", (event) => {
            if (event.target === checkoutModal) {
                closeCheckoutChoiceModal();
            }
        });
    }

    if (checkoutEmailLoginButton) {
        checkoutEmailLoginButton.addEventListener("click", () => {
            const email = (checkoutEmailInput ? checkoutEmailInput.value : "").trim();

            if (!email || !email.includes("@")) {
                alert("Please enter a valid email address to continue with your account.");
                if (checkoutEmailInput) checkoutEmailInput.focus();
                return;
            }

            closeCheckoutChoiceModal();
            window.location.href = `signup.html?email=${encodeURIComponent(email)}`;
        });
    }

    if (checkoutGuestButton) {
        checkoutGuestButton.addEventListener("click", () => {
            closeCheckoutChoiceModal();
            window.location.href = "guest-checkout.html";
        });
    }
}

// 5. PRODUCT DETAILS PAGE

if (document.body.dataset.page === "product-details") {
    const detailProductId = new URLSearchParams(window.location.search).get("product");
    const selectedProduct = getProductById(detailProductId);
    const detailMainImage = document.getElementById("detail-main-image");
    const detailTag = document.getElementById("detail-tag");
    const detailName = document.getElementById("detail-name");
    const detailPrice = document.getElementById("detail-price");
    const detailDescription = document.getElementById("detail-description");
    const colorOptions = document.getElementById("color-options");
    const sizeOptions = document.getElementById("size-options");
    const selectedColourLabel = document.getElementById("selected-colour-label");
    const selectedSizeLabel = document.getElementById("selected-size-label");
    const quantityInput = document.getElementById("detail-quantity");
    const addSelectedProductButton = document.getElementById("add-selected-product");

    if (detailMainImage && selectedProduct) {
        detailMainImage.src = resolveImagePath(selectedProduct.image);
        detailMainImage.alt = selectedProduct.name;
        detailTag.textContent = selectedProduct.tag;
        detailName.textContent = selectedProduct.name;
        detailPrice.textContent = formatCurrency(selectedProduct.price);
        detailDescription.textContent = selectedProduct.description;

        let selectedColor = selectedProduct.colors[0]?.name || "";
        let selectedSize = selectedProduct.sizes[0] || "";

        function renderColorOptions() {
            if (!colorOptions) return;

            colorOptions.innerHTML = "";

            selectedProduct.colors.forEach(color => {
                const swatchButton = document.createElement("button");
                swatchButton.type = "button";
                swatchButton.className = "color-swatch" + (selectedColor === color.name ? " selected" : "");
                swatchButton.title = color.name;
                swatchButton.style.background = color.hex;
                swatchButton.setAttribute("aria-label", `Choose ${color.name}`);
                swatchButton.addEventListener("click", () => {
                    selectedColor = color.name;
                    selectedColourLabel.textContent = color.name;
                    renderColorOptions();
                });
                colorOptions.appendChild(swatchButton);
            });

            selectedColourLabel.textContent = selectedColor;
        }

        function renderSizeOptions() {
            if (!sizeOptions) return;

            sizeOptions.innerHTML = "";

            selectedProduct.sizes.forEach(size => {
                const sizeButton = document.createElement("button");
                sizeButton.type = "button";
                sizeButton.className = "size-option" + (selectedSize === size ? " selected" : "");
                sizeButton.textContent = size;
                sizeButton.addEventListener("click", () => {
                    selectedSize = size;
                    selectedSizeLabel.textContent = size;
                    renderSizeOptions();
                });
                sizeOptions.appendChild(sizeButton);
            });

            selectedSizeLabel.textContent = selectedSize || "Select a size";
        }

        renderColorOptions();
        renderSizeOptions();

        if (quantityInput) {
            quantityInput.addEventListener("input", () => {
                const value = Number(quantityInput.value);
                quantityInput.value = Number.isFinite(value) && value > 0 ? value : 1;
            });
        }

        document.querySelectorAll("[data-action]").forEach(actionButton => {
            actionButton.addEventListener("click", () => {
                const operation = actionButton.dataset.action;
                const currentValue = Number(quantityInput.value) || 1;

                if (operation === "increase") {
                    quantityInput.value = currentValue + 1;
                }

                if (operation === "decrease") {
                    quantityInput.value = Math.max(1, currentValue - 1);
                }
            });
        });

        if (addSelectedProductButton) {
            addSelectedProductButton.addEventListener("click", () => {
                if (!selectedColor) {
                    alert("Please choose a colour before adding this product to your bag.");
                    return;
                }

                if (!selectedSize) {
                    alert("Please choose a size before adding this product to your bag.");
                    return;
                }

                const quantity = Number(quantityInput.value) || 1;

                addToCart(selectedProduct.name, selectedProduct.price, {
                    productId: selectedProduct.id,
                    quantity: quantity,
                    size: selectedSize,
                    color: selectedColor
                });

                alert(`${selectedProduct.name} (${selectedColor}, ${selectedSize}) added to your bag!`);
            });
        }
    }
}

// 6. NEWSLETTER

const newsletterForm = document.getElementById("newsletter-form");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const emailInput = newsletterForm.querySelector("input");
        const email = emailInput ? emailInput.value.trim() : "";

        if (!email || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        window.location.href = `signup.html?email=${encodeURIComponent(email)}`;
    });
}

if (document.body.dataset.page === "guest-checkout") {
    const guestCheckoutForm = document.getElementById("guest-checkout-form");
    const guestCartItems = document.getElementById("guest-cart-items");
    const guestSubtotal = document.getElementById("guest-subtotal");
    const guestShipping = document.getElementById("guest-shipping");
    const guestTotal = document.getElementById("guest-total");
    const cardNumberInput = document.getElementById("card-number");
    const cardExpiryInput = document.getElementById("card-expiry");
    const cardCvvInput = document.getElementById("card-cvv");
    const cardHolderInput = document.getElementById("card-holder");
    const bankCardNumberPreview = document.getElementById("bank-card-number-preview");
    const bankCardHolderPreview = document.getElementById("bank-card-holder-preview");
    const bankCardExpiryPreview = document.getElementById("bank-card-expiry-preview");
    const bankNetworkLabel = document.getElementById("bank-network-label");

    function formatCardNumber(value) {
        const digits = String(value || "").replace(/\D/g, "").slice(0, 16);
        return digits.replace(/(.{4})/g, "$1 ").trim();
    }

    function formatExpiry(value) {
        const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }

    if (cardNumberInput) {
        cardNumberInput.addEventListener("input", () => {
            cardNumberInput.value = formatCardNumber(cardNumberInput.value);
            if (bankCardNumberPreview) {
                bankCardNumberPreview.textContent = cardNumberInput.value || "•••• •••• •••• 2048";
            }
        });
    }

    if (cardHolderInput) {
        cardHolderInput.addEventListener("input", () => {
            const name = cardHolderInput.value.trim() || "YOUR NAME";
            if (bankCardHolderPreview) {
                bankCardHolderPreview.textContent = name.toUpperCase();
            }
        });
    }

    if (cardExpiryInput) {
        cardExpiryInput.addEventListener("input", () => {
            cardExpiryInput.value = formatExpiry(cardExpiryInput.value);
            if (bankCardExpiryPreview) {
                bankCardExpiryPreview.textContent = cardExpiryInput.value || "MM/YY";
            }
        });
    }

    if (cardCvvInput) {
        cardCvvInput.addEventListener("input", () => {
            cardCvvInput.value = String(cardCvvInput.value || "").replace(/\D/g, "").slice(0, 4);
        });
    }

    document.querySelectorAll(".payment-method").forEach(button => {
        button.addEventListener("click", () => {
            document.querySelectorAll(".payment-method").forEach(item => item.classList.toggle("active", item === button));

            const paymentType = button.dataset.paymentMethod || "visa";
            const labels = {
                visa: "VISA",
                mastercard: "MASTERCARD",
                debit: "DEBIT",
                transfer: "BANK TRANSFER"
            };

            if (bankNetworkLabel) {
                bankNetworkLabel.textContent = labels[paymentType] || "VISA";
            }

            const transferMessage = paymentType === "transfer" ? "BANK ACCOUNT" : "CARD HOLDER";
            const holderLabel = document.querySelector(".bank-label");

            if (holderLabel && transferMessage) {
                holderLabel.textContent = paymentType === "transfer" ? "ACCOUNT NAME" : "CARD HOLDER";
            }
        });
    });

    function renderGuestCheckout() {
        if (!guestCartItems) return;

        if (!cart.length) {
            guestCartItems.innerHTML = `
                <div class="empty-bag-state">
                    <div class="empty-bag-icon">👜</div>
                    <h3>Your bag is empty</h3>
                    <p>Add a few pieces before checking out.</p>
                    <a href="cl.html#shop" class="continue-shopping">SHOP NOW</a>
                </div>
            `;
            if (guestSubtotal) guestSubtotal.textContent = formatCurrency(0);
            if (guestShipping) guestShipping.textContent = formatCurrency(0);
            if (guestTotal) guestTotal.textContent = formatCurrency(0);
            return;
        }

        let subtotal = 0;
        guestCartItems.innerHTML = cart.map(item => {
            const qty = Number(item.quantity) || 1;
            const price = Number(item.price) || 0;
            const lineTotal = qty * price;
            subtotal += lineTotal;

            return `
                <article class="guest-order-item">
                    <div class="guest-order-image">
                        <img src="${getProductImage(item)}" alt="${item.name}">
                    </div>
                    <div class="guest-order-copy">
                        <h3>${item.name}</h3>
                        <p>${getCartItemVariant(item) || "Standard fit"}</p>
                        <span>${qty} x ${formatCurrency(price)}</span>
                    </div>
                    <strong>${formatCurrency(lineTotal)}</strong>
                </article>
            `;
        }).join("");

        const shipping = subtotal > 0 ? (subtotal >= 50000 ? 0 : 3500) : 0;
        const total = subtotal + shipping;

        if (guestSubtotal) guestSubtotal.textContent = formatCurrency(subtotal);
        if (guestShipping) guestShipping.textContent = formatCurrency(shipping);
        if (guestTotal) guestTotal.textContent = formatCurrency(total);
    }

    renderGuestCheckout();

    if (guestCheckoutForm) {
        guestCheckoutForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(guestCheckoutForm);
            const firstName = String(formData.get("firstName") || "").trim();
            const lastName = String(formData.get("lastName") || "").trim();
            const email = String(formData.get("email") || "").trim();
            const phone = String(formData.get("phone") || "").trim();
            const address = String(formData.get("address") || "").trim();
            const city = String(formData.get("city") || "").trim();
            const state = String(formData.get("state") || "").trim();
            const cardHolder = String(formData.get("cardHolder") || "").trim();
            const cardNumber = String(formData.get("cardNumber") || "").replace(/\s+/g, "");
            const cardExpiry = String(formData.get("cardExpiry") || "").trim();
            const cardCvv = String(formData.get("cardCvv") || "").trim();

            if (!firstName || !lastName || !email || !email.includes("@") || !phone || !address || !city || !state) {
                alert("Please complete all required checkout details.");
                return;
            }

            if (!cardHolder || !cardNumber || cardNumber.length < 16 || !cardExpiry || !cardCvv || cardCvv.length < 3) {
                alert("Please complete your bank card payment details to continue.");
                return;
            }

            if (!cart.length) {
                alert("Your bag is empty. Add an item before checkout.");
                return;
            }

            alert(`Thanks, ${firstName}! Your order is placed successfully and payment is confirmed.`);
            cart = [];
            updateCart();
            window.location.href = "cl.html#shop";
        });
    }
}

if (document.body.dataset.page === "sign-up") {
    const signupForm = document.getElementById("signup-form");
    const emailInput = document.getElementById("signup-email");
    const continueGuestButton = document.getElementById("continue-as-guest");
    const urlEmail = new URLSearchParams(window.location.search).get("email");

    if (emailInput && urlEmail) {
        emailInput.value = urlEmail;
    }

    if (continueGuestButton) {
        continueGuestButton.addEventListener("click", () => {
            window.location.href = "guest-checkout.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(signupForm);
            const firstName = String(formData.get("firstName") || "").trim();
            const lastName = String(formData.get("lastName") || "").trim();
            const email = String(formData.get("email") || "").trim();
            const password = String(formData.get("password") || "");
            const confirmPassword = String(formData.get("confirmPassword") || "");
            const agreed = Boolean(formData.get("terms"));

            if (!firstName || !lastName || !email || !email.includes("@") || !password || !confirmPassword) {
                alert("Please complete all required fields.");
                return;
            }

            if (password.length < 6) {
                alert("Your password must be at least 6 characters long.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match. Please try again.");
                return;
            }

            if (!agreed) {
                alert("Please accept the terms before creating your account.");
                return;
            }

            alert(`Welcome to SOLE DISTRICT, ${firstName}! Your account is ready.`);
            signupForm.reset();

            if (cart.length) {
                window.location.href = "guest-checkout.html";
                return;
            }

            window.location.href = "shopping-bag.html";
        });
    }
}

document.querySelectorAll(".see-more-btn").forEach(button => {
    button.addEventListener("click", () => {
        const isExpanded = button.dataset.expanded === "true";
        const section = button.closest(".store-products") || button.closest(".products-section") || button.closest(".clothing-section");
        const productCards = section ? section.querySelectorAll(".product-card.is-hidden") : [];

        productCards.forEach(card => {
            card.classList.toggle("is-hidden", isExpanded);
        });

        button.dataset.expanded = String(!isExpanded);
        button.textContent = isExpanded ? "SEE MORE" : "SHOW LESS";
    });
});

// 7. SEARCH

const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById("site-search");
const searchStatus = document.getElementById("search-status");
const searchButton = document.querySelector(".search-btn");
const searchCloseButton = document.getElementById("search-close");
const searchSubmitButton = document.querySelector(".search-submit");

function closeSearchOverlay() {
    if (!searchOverlay) return;

    searchOverlay.classList.remove("active");
    searchOverlay.setAttribute("aria-hidden", "true");

    if (searchButton) {
        searchButton.setAttribute("aria-expanded", "false");
    }
}

function openSearchOverlay() {
    if (!searchOverlay) return;

    searchOverlay.classList.add("active");
    searchOverlay.setAttribute("aria-hidden", "false");

    if (searchButton) {
        searchButton.setAttribute("aria-expanded", "true");
    }

    setTimeout(() => {
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }, 50);
}

function runProductSearch() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const products = document.querySelectorAll(".product-card");

    if (!products.length) {
        if (searchStatus) {
            searchStatus.textContent = "No products are available on this page.";
        }
        return;
    }

    let matchCount = 0;
    let firstMatch = null;

    products.forEach(product => {
        const productName = product.querySelector("h3")?.textContent.toLowerCase() || "";
        const productType = product.querySelector("p")?.textContent.toLowerCase() || "";
        const isMatch = !query || productName.includes(query) || productType.includes(query);

        product.classList.toggle("search-hidden", !isMatch);

        if (isMatch) {
            matchCount += 1;
            if (!firstMatch) firstMatch = product;
        }
    });

    if (!query) {
        if (searchStatus) {
            searchStatus.textContent = "Type to find your next piece.";
        }
        return;
    }

    if (matchCount > 0) {
        if (searchStatus) {
            searchStatus.textContent = `${matchCount} product${matchCount === 1 ? "" : "s"} found.`;
        }

        if (firstMatch) {
            firstMatch.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            firstMatch.classList.add("search-highlight");
            setTimeout(() => {
                firstMatch.classList.remove("search-highlight");
            }, 2000);
        }
    } else if (searchStatus) {
        searchStatus.textContent = `No products found for "${searchInput.value.trim()}".`;
    }
}

if (searchButton) {
    searchButton.addEventListener("click", openSearchOverlay);
}

if (searchCloseButton) {
    searchCloseButton.addEventListener("click", closeSearchOverlay);
}

if (searchSubmitButton) {
    searchSubmitButton.addEventListener("click", () => {
        runProductSearch();
    });
}

if (searchInput) {
    searchInput.addEventListener("input", runProductSearch);
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            runProductSearch();
        }

        if (event.key === "Escape") {
            closeSearchOverlay();
        }
    });
}

if (searchOverlay) {
    searchOverlay.addEventListener("click", (event) => {
        if (event.target === searchOverlay) {
            closeSearchOverlay();
        }
    });
}

// 8. INITIALIZE CART

updateCart();

console.log("SOLE DISTRICT is ready!");