const express = require("express");

const app = express();

app.get("/google", async (req, res) => {

    try {

        const response = await fetch("https://www.google.com");

        const data = await response.text();

        res.send(data);

    } catch (err) {

        res.send("Error : " + err.message);

    }

});

app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});