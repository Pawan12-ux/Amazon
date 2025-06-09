// Get all product cards
const products = document.querySelectorAll(".subject");

products.forEach(product => {
  const productName = product.querySelector(".Product").textContent;

  const buyBtn = product.querySelector(".buy");
  const addBtn = product.querySelector(".add");

  buyBtn.addEventListener("click", () => {
    alert(`✅ Thank you for buying ${productName}!`);
  });

  addBtn.addEventListener("click", () => {
    alert(`🛒 ${productName} added to cart!`);
  });
});
