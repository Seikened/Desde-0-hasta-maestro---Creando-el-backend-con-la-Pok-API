const express = require('express');
var passport = require("passport");
require('./auth')(passport);

const app = express();
app.use(passport.initialize());

const port = 3000;

app.get("/", (req, res) => {
    //req es la request, la petición 
    //res es la respuesta
    res.status(200).send("Hello World!")
});


app.post('/login' , (req, res) => {
    res.status(200).json(
        {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'}
    )
});

app.post("/team/pokemons", () => {
    res.status(200).send("Hello World!")
})



app.get('/team', 
    passport.authenticate('jwt', {session: false}), 
(req, res, next) => {
    res.status(200).send('Hello World!')
})



app.delete("/team/pokemon:pokeid", () => {
    res.status(200).send("DELETE Hello World!")

})

app.put("/team", () => {
    res.status(200).send("PUT Hello World!")

})

//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲





app.listen(port, () => { 
    console.log("Server started on port " + port);
});




exports.app = app;