const products = [
    { name: "Milk", price: 50, image: "milk.jpeg" },
    { name: "Bread", price: 40, image: "bread.jpeg" },
    { name: "Eggs", price: 60, image: "eggs.jpeg" },
    { name: "Chips", price: 30, image: "chips.jpeg" },
    { name: "Apples", price: 120, image: "apples.jpeg" }
];


const productList = document.getElementById("productList");

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <button onclick="addToCart('${product.name}')">Add</button>
    `;

    productList.appendChild(card);
});

function addToCart(productName) {
    alert(productName + " added to cart 🛒");
}
