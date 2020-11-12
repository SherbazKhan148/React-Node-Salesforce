const express = require("express");
var cors = require("cors");

//Initializing Express
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.json({ msg: "Welcome To React-Node-Salesforce Server" });
});

app.use(cors());

//Add Routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started On ${PORT}`));
