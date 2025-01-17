# URL Shortener Microservice

This code sets up an Express.js application that provides a basic URL shortening service. Here's a summary of its key components and functionality:

1. **Configuration and Middleware**:
   - `dotenv`: Loads environment variables from a `.env` file using `require('dotenv').config()`.
   - `express`: Sets up the server and routes.
   - `cors`: Enables Cross-Origin Resource Sharing.
   - `body-parser`: Parses URL-encoded request bodies.
   - Middleware logs HTTP method, path, and IP of incoming requests.

2. **Static Files and Main Page**:
   - Serves static files from the `/public` directory.
   - Sends the main HTML file from `/views/index.html` when accessing the root URL.

3. **API Endpoints**:
   - `/api/hello`: A simple test endpoint that returns a JSON greeting.
   - `/api/shorturl/` (POST): Accepts a URL in the request body:
     - Checks if the URL has a valid protocol (`http` or `https`) and a resolvable hostname.
     - Generates a random 8-character hexadecimal `short_url` if the URL is valid and not already shortened.
     - Stores the original URL and its shortened version in the `shortUrls` array.
     - Returns a JSON response with the original and shortened URL.
   - `/api/shorturl/:short_url` (GET): Redirects the user to the original URL associated with the given `short_url`, or returns an error if the `short_url` is not found.

4. **Helper Functions**:
   - `randomHexNumber`: Generates an 8-character random hexadecimal string to use as the shortened URL.

5. **Server**:
   - Listens on the specified port (`process.env.PORT` or `3000` by default).

### Example Usage:
- POST `/api/shorturl/` with a body containing `{ url: "http://example.com" }` might return `{ original_url: "http://example.com", short_url: "a1b2c3d4" }`.
- GET `/api/shorturl/a1b2c3d4` redirects to `http://example.com`.

This project uses boilerplate code for the URL Shortener Microservice project. Instructions for building thr project can be found at https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice.
