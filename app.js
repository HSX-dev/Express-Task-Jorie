const express = require('express'); // Import the Express module
const app = express(); // Create an Express application instance
const port = 8080; // Define the port number the server will listen on

// Middleware to parse JSON request bodies into req.body
app.use(express.json());

// In-memory list of products (resets whenever the server restarts)
const products = [
  { id: 1, name: 'Laptop', price: 1299.99 },
  { id: 2, name: 'Headphones', price: 199.99 },
  { id: 3, name: 'Keyboard', price: 89.99 }
];

// GET /products - return the full list of products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /products - add a new product from the JSON request body
app.post('/products', (req, res) => {
  const { name, price } = req.body || {};

  // Basic validation: a product needs a name and a numeric price
  if (typeof name !== 'string' || name.trim() === '' || typeof price !== 'number') {
    return res.status(400).json({
      error: 'Request body must include "name" (string) and "price" (number)'
    });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name: name.trim(),
    price
  };

  products.push(newProduct);
  res.status(201).json({
    message: 'Product added',
    product: newProduct
  });
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
