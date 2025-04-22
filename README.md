# 📚 Book Management API

A RESTful API for managing books in a library system using **Node.js**, **Express.js**, and **MongoDB Atlas**.

---

## 🚀 Features

- Add a new book
- Retrieve all books
- Retrieve a single book by ID
- Update book details
- Delete a book

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose (ODM)
- dotenv (for environment variable management)
- nodemon (for development server auto-reload)
- Postman (for API testing)

---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/your-username/book-management-api.git
cd book-management-api


#  Install dependencies
npm install

#  Start the server
nodemon .\index.js




❗ Error Handling
All routes handle common errors like:

Invalid MongoDB ObjectIDs

Missing required fields

Non-existent resources

Responses follow the format:

json
Copy code
{
  "error": "Description of the error"
}



🧪 Testing
Use the provided Postman collection to test:

*All CRUD operations
*Edge cases and validations



📚 References
 *Mongoose Documentation
 *Express Routing
 *MongoDB Atlas Setup

