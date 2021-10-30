const express = require('express');
var passport = require("passport");
const jwt = require('jsonwebtoken');
const usersController = require('./controllers/users');

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
    // Comprobamos credenciales
    usersController.checkUserCredentials(req.body.user, req.body.password, (err, result) => {
        //Si no son validad error
        if(!result){
            return res.status(401).json({message : "Usuario o contraseña incorrectos"});
        }
    })
    
    //Si son validas, generamos un JWT y lo devolvemos
    const token = jwt.sign({userId: req.body.user});
    res.status(200).json(
        {token: token}
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