// Theme Changer
const mainContainer = document.querySelector(".main-container");
const themeButton = document.querySelector(".theme-button");
const themeLogo = document.querySelector(".theme-logo");

themeButton.addEventListener("click", () => {
  if (
    mainContainer.classList.contains("bg-white") &&
    mainContainer.classList.contains("text-black")
  ) {
    mainContainer.classList.remove("bg-white", "text-black");
    mainContainer.classList.add("bg-black", "text-white");
    themeButton.classList.remove("fa-moon");
    themeButton.classList.add("fa-sun");
    themeLogo.src = "img/logo/ihd-dark-theme-logo.png";
  } else {
    mainContainer.classList.remove("bg-black", "text-white");
    mainContainer.classList.add("bg-white", "text-black");
    themeButton.classList.remove("fa-sun");
    themeButton.classList.add("fa-moon");
    themeLogo.src = "img/logo/ihd-light-theme-logo.png";
  }
});

// Hamburger Menu
const menu = document.querySelector(".menu");
const HamburgerBtn = document.querySelector(".hamburger-btn");

HamburgerBtn.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("block");
    // HamburgerBtn.classList.remove("fa-bars");
    // HamburgerBtn.classList.add("fa-xmark");
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("block");
    // HamburgerBtn.classList.add("fa-bars");
    // HamburgerBtn.classList.remove("fa-xmark");
  }
});

const menuClose = document.querySelector(".menu-close");
menuClose.addEventListener("click", function () {
  if (menu.classList.contains("block")) {
    menu.classList.add("hidden");
    menu.classList.remove("block");
  }
});

// function to expand product list

// Sample data for new products
const products = [
  {
    image: "img/product/Product2.jpg",
    name: "Wireless Bluetooth Earbuds",
    link: "https://amzn.in/d/0QvOPL2",
  },
  {
    image: "img/product/Product3.jpg",
    name: "Smart Watch with Heart Rate Monitor",
    link: "https://amzn.in/d/0QvOPL2",
  },
  {
    image: "img/product/Product4.jpg",
    name: "Portable SSD 1TB",
    link: "https://amzn.in/d/0QvOPL2",
  },
];

// Function to create a product element
function createProductElement(product) {
  const productDiv = document.createElement("div");
  productDiv.className =
    "product z-10 bg-purple-600 flex flex-col items-center justify-center w-60 h-72 rounded-xl px-3 gap-y-2 text-center";

  const img = document.createElement("img");
  img.src = product.image;
  img.className = "h-32 w-40 rounded-sm";
  img.alt = "";

  const h1 = document.createElement("h1");
  h1.className = "text-white";
  h1.textContent = product.name;

  const button = document.createElement("button");
  button.className =
    "before:ease relative h-10 w-24 rounded-md overflow-hidden border border-green-500 bg-green-500 text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-50 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40";

  const link = document.createElement("a");
  link.href = product.link;
  link.target = "_blank";
  link.textContent = "Buy Now";

  button.appendChild(link);
  productDiv.appendChild(img);
  productDiv.appendChild(h1);
  productDiv.appendChild(button);

  return productDiv;
}

// Function to add products to the product list
function addProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productElement = createProductElement(product);
    productList.appendChild(productElement);
  });
}

// Call the function to add products
addProducts();
