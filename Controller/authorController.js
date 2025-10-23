const db = require("../db");
const CustomNotFoundError = require('../Error/customError.js')

const getAuthorById = async (req, res) => {
  const { authorId } = req.params;
  const author = await db.getAuthorById(Number(authorId));
  if (!author) throw new CustomNotFoundError("Author not found");
  res.send(`Author Name: ${author.name}, Author ID: ${author.id}`);
};

module.exports = { getAuthorById };
