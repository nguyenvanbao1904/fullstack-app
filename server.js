const express = require("express");
const app = express();
var cors = require("cors");
const helmet = require("helmet");
const port = 3000;

app.use(cors());
app.use(helmet());

app.get("/api", (req, res) => {
    res.json("api");
});

// app.use(express.static(path.join(__dirname, "./client/build")));
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(port, function () {
    console.log(`server is running on port: ${port}`);
});
