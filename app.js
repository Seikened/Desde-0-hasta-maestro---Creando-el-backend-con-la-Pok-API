const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    //req es la request, la petición 
    console.log(req);
    //res es la respuesta
    res.status(200).send("Hello World!");
})

app.listen(port, () => { 
    console.log("Server started on port " + port);
});
