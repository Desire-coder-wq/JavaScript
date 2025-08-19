// Sample products for collection
const products = [
    { id: 1, name: "Red Dress", price: 59.99, image: "images/red-dress1.jpg" },
    { id: 2, name: "Men's Leather Watch", price: 120.00, image: "images/watch1.jpg" },
    { id: 3, name: "Ladies Handbag", price: 75.50, image: "images/handbag1.jpg" },
    { id: 4, name: "Men's Casual Shoes", price: 89.99, image: "images/mens-shoes1.jpg" },
    { id: 5, name: "Blue Evening Gown", price: 130.00, image: "images/blue-gown.jpg" },
    { id: 6, name: "Gold Necklace", price: 220.00, image: "images/gold-necklace.jpg" },
    { id: 7, name: "White Sneakers", price: 65.00, image: "images/white-sneakers.jpg" },
    { id: 8, name: "Men's Belt", price: 35.00, image: "images/mens-belt.jpg" },
    { id: 9, name: "Ladies Shoes", price: 80.00, image: "images/ladies-shoes.jpg" },
    { id: 10, name: "Men's Formal Shirt", price: 55.00, image: "images/formal-shirt.jpg" },
    { id: 11, name: "Women's Handbag", price: 95.00, image: "images/women-handbag.jpg" },
    { id: 12, name: "Silver Bracelet", price: 50.00, image: "images/silver-bracelet.jpg" }
];

// Populate grid
const grid = document.getElementById("collection-grid");

products.forEach(product => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-6 mb-4";
    col.innerHTML = `
        <div class="card h-100 border-0 shadow-sm">
            <img src="${product.image}" class="card-img-top" alt="${product.name}" style="cursor:pointer;" onclick="viewProduct(${product.id})">
            <div class="card-body text-center">
                <h6 class="card-title">${product.name}</h6>
                <p class="text-success fw-bold">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    grid.appendChild(col);
});

// Click function to open product details
function viewProduct(id) {
    window.location.href = `product-details.html?id=${id}`;
}
