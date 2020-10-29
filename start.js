const express = require("express");
const path = require("path");
const port = 3030;
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/", function (req, res, next) {
    res.sendFile(path.join(__dirname, "index.html"));
})
app.listen(port);
console.log("Connection Successful!");
console.log(`Listening to port ${port}...`);