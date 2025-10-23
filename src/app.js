// app.js
const express = require("express");
const app = express();
const authorRouter = require("../Routes/authorRouter.js");
const bookRouter = require("../Routes/bookRouter.js");
const indexRouter = require("../Routes/indexRouter.js");

app.use(express.json());

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

// app.use((req, res, next) => {
//    next(new Error("OH NO!"));
// });

app.use((err, req, res, next) => {
  console.error("Error caught:", err.name, "-", err.message);
  res.status(err.statusCode || 500).send(err.message || "Internal Server Error");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - Server running at http://localhost:${PORT}`);
});
