import express from "express";

import path from "path";
// import { fileURLToPath } from "url";
import expressLayouts from "express-ejs-layouts";

// const __filename = fileURLToPath(import.meta.url);
// const __dername = path.dirname(__filename);

const __dirname = import.meta.dirname;

const app = express();

// in-memory item 
let items = [];

// routes
app.get('/', (req, res) => {
    res.render("index", { title: "Home", items});
});
app.get("/about", (req, res) => {
    res.render("contact", {title: "About Us"});
});
app.get("/contact", (req, res) => {
    res.render("contact", {title: "Contact Us"})
})



app.listen(5700, () => console.log("Server running at http://localhost:5700"));