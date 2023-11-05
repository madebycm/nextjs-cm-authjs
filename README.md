
This project demonstrates how to effectively set custom properties in JWT tokens and utilize them across client, middleware, and server components. Built using Next.js 14 and next-auth 4.24. The use cases outlined in this repository illustrate how these custom properties can be used to enhance authentication, manage user sessions, and pass essential information securely between the client and server.

To start:
- `make up`
- go to http://localhost:3000/cm

You will see three use cases for how to access and set custom session properties using next-auth. This can be extended to serve as role-based access controls (RBAC), etc.

This demonstration uses GoogleProvider, so update .env.local with:

GOOGLE_ID="xxx"
GOOGLE_SECRET="xxx"

(or use any other provider)
