
### Frontend deploy
Yes, if your Vue app uses Vue Router, Vercel is indeed the better option. Here's why and how to secure API communication:

Why Vercel Is Better for Vue Router
Support for Dynamic Routes:

Vue Router requires proper handling of routes, especially when using history mode (to remove # from URLs).
Vercel handles this seamlessly by allowing you to configure a simple _redirects file or a vercel.json configuration file to rewrite all routes to index.html.
Automatic Configuration:

Vercel detects your Vue app and sets up rewrites automatically for Vue Router if needed.
CDN Optimizations:

Vercel serves the app from a globally distributed CDN, ensuring fast routing for users worldwide.
Securing API Communication
1. Use HTTPS
Ensure your API is hosted over HTTPS to encrypt communication between your Vue app and the server.
Most platforms (like Render or Fly.io) provide free HTTPS by default.
2. Environment Variables
Never hardcode sensitive API URLs or keys in your Vue code. Use environment variables instead.
In Vite, you can create an .env file for your environment variables:
plaintext
Copy code
VITE_API_URL=https://api.example.com
Access it in your Vue app like this:
javascript
Copy code
const apiUrl = import.meta.env.VITE_API_URL;
3. Cross-Origin Resource Sharing (CORS)
Configure your API server to accept requests only from your Vue app's domain. For example:
plaintext
Copy code
Access-Control-Allow-Origin: https://your-frontend.vercel.app
Avoid using * in production, as it allows requests from any origin.
4. Authentication
Use tokens (e.g., JWT) for secure communication.
On the frontend, store tokens in HTTP-only cookies (safer than localStorage).
Send the token with each API request in the Authorization header:
plaintext
Copy code
Authorization: Bearer <token>
5. Rate Limiting
Implement rate limiting on your API server to prevent abuse.
6. API Gateway or Proxy
If exposing your API to the public, consider using an API gateway to manage access.
Alternatively, use Vercel serverless functions as a proxy:
Your Vue app sends requests to the Vercel function, and it forwards them to the API server.
This hides the API server from direct access.
7. Secure Sensitive Data
Avoid exposing sensitive data in API responses.
Validate all inputs on the server to prevent malicious requests 

### backend Deply
must have github integration
.fly.io
.render
.firebase


### Dogger
/**
FROM openjdk:21-jdk-slim-buster
WORKDIR /app
COPY target/scala-3.4.1/pokeweb.jar /app/pokeweb.jar
CMD ["java", "-jar","-Dserver.port=8080", "/app/pokeweb.jar"]
 */
 or



docker build -t pokeweb .

docker run -p 9000:9000 pokeweb

### PlayServer
--set name in build to lowercase (else docker wont find)
--set app secret in app*.conf
--set routesfilter as ENV var
