import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/db.js";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();
//const express = require("express");

const app = express();

connectDB();//const express = require("express")
// const app = express()
// const port = 3000
// app.get("/", (req, res) => {
//   res.send("Hello World!")
// })
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello From Product Inventory Management System");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);


app.listen( PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})


// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
