const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

// create
router.post("/books", bookController.createBook);

// get all
router.get("/books", bookController.getAllBooks);

// get single
router.get("/books/:id", bookController.getBookById);

// update
router.put("/books/:id", bookController.updateBook);

// delete
router.delete("/books/:id", bookController.deleteBook);

module.exports = router;
