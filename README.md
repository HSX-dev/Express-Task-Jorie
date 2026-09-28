# Express Products API

A small Express.js API with two routes:

| Method | Route       | Description                                   |
| ------ | ----------- | --------------------------------------------- |
| GET    | `/products` | Returns the list of products                  |
| POST   | `/products` | Accepts JSON and adds a new product to the list |

Products are stored in memory, so the list resets when the server restarts.

## Setup

```bash
npm install
npm start
```

The server runs at http://localhost:8080.

## Testing with Postman

Import `postman_collection.json` into Postman, or create the requests by hand:

1. **View the list:** send a `GET` request to `http://localhost:8080/products`.
2. **Add a product:** send a `POST` request to `http://localhost:8080/products`.
   In the **Body** tab, choose **raw** and **JSON**, then enter:

   ```json
   {
     "name": "Mouse",
     "price": 49.99
   }
   ```

   The response has status `201 Created`:

   ```json
   {
     "message": "Product added",
     "product": { "id": 4, "name": "Mouse", "price": 49.99 }
   }
   ```

3. Send the `GET` request again. The new product is now in the list.

If `name` (a string) or `price` (a number) is missing, the API returns `400 Bad Request` with an error message.
