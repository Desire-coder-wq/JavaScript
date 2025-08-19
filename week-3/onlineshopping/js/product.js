// product.js

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));

// Find product in products array
const product = products.find(p => p.id === productId);

// Display product details
const detailsContainer = document.getElementById("product-details");

if (product) {
    detailsContainer.innerHTML = `
        <div class="col-md-6">
            <img src="${product.image}" class="img-fluid border rounded" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h2>${product.name}</h2>
            <p class="text-success fw-bold h4">$${product.price.toFixed(2)}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. This is a sample description for the product.</p>

            ${product.colors.length > 0 ? `
                <div class="mb-3">
                    <strong>Colors:</strong>
                    ${product.colors.map(c => `<span class="badge bg-secondary me-1">${c}</span>`).join("")}
                </div>
            ` : ""}

            ${product.sizes.length > 0 ? `
                <div class="mb-3">
                    <strong>Sizes:</strong>
                    ${product.sizes.map(s => `<span class="badge bg-light text-dark border me-1">${s}</span>`).join("")}
                </div>
            ` : ""}

            <button class="btn btn-primary btn-lg" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
} else {
    detailsContainer.innerHTML = `<p class="text-danger">Product not found.</p>`;
}

// Simulated add to cart function
function addToCart(id) {
    alert(`Product ${id} added to cart!`);
}
