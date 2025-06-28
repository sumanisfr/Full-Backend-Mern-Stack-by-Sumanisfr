//! Authentication
//! Authorization

// ? Authentication is the process of verifying the identity of a user or system, ensuring that they are who they claim to be. This is typically done through methods such as passwords, biometrics, or security tokens.

// ? Authorization, on the other hand, is the process of determining what an authenticated user or system is allowed to do. This involves granting or denying access to resources based on permissions and roles assigned to the user or system.

// ? In summary, authentication is about verifying identity, while authorization is about granting access based on that identity.
// ? In a web application, authentication is often handled through login forms, where users provide credentials like usernames and passwords. Once authenticated, the application can then check the user's permissions to determine what actions they are allowed to perform, such as viewing certain pages, editing content, or accessing specific data.

// *------------------------------------------------
//! Bcrypt:-
// ? Bcrypt is a password hashing function designed to securely store passwords. It incorporates a salt to protect against rainbow table attacks and is computationally intensive, making it resistant to brute-force attacks. Bcrypt automatically handles the generation of the salt and allows for adjustable work factors, which can be increased over time to maintain security as computing power increases.

// *------------------------------------------------
//! JWT:-
// ? JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.
// ? JWTs are commonly used for authentication and information exchange in web applications. They allow for stateless authentication, where the server does not need to store session information, as all necessary data is contained within the token itself. This makes JWTs particularly useful in distributed systems and microservices architectures.

// *------------------------------------------------
//  1. How to set cookie in express.js
//  2. How to read cookie in express.js
//  3. How to hash passwords with bcrypt
//*  example:- Password is password but after -> qbttxpse (increasing one by decrpt) -- but is week so we use 256bit incrption so, password-> ncbjbdbksbsjjwjldnbjvvldlyfvubm.
//  4. How to verify passwords with bcrypt for password encryption and decryption

//  5. How to create JWT tokens
//  6. How to verify JWT tokens

// *------------------------------------------------
// ? To implement authentication and authorization in a Node.js application, you can use libraries like `jsonwebtoken` for creating and verifying JWT tokens, and `bcrypt` for hashing and verifying passwords. These libraries help secure user credentials and manage access control effectively.
// ? To install these libraries, you can use npm:
//! npm i jsonwebtoken bcrypt

//! cookies set in package.json go to main change index.js to app.js
//  then create a file app.js

// sumanisfr -> $2b$10$faeapqnifvPr1kzCe9HzLOnzaj91CMxts1fvmnVYKd5WvW/w60P3O

//*------------------lect-15
// before you start
// npm init -y
// change index.js to app.js
// install express npm i express
// install bcrypt npm i bcrypt
//  install jwt :- npm i jsonwebtoken
//  and npm cookie-parser

// for server side data :- npm i ejs
// when need runing :- npx nodemon app.js
//add tailwind css in index.ejs
// install mongoose :- npm i mongoose
//! _________________________
// create user account
// mongoose
// schema
// model
// usercreate -> password ->
// jwt token create and -> cookie

// login -> token ->decrypt -> email
