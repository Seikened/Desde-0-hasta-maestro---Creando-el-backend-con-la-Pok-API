const express = require('express');
const router = express.Router();
const passport = require('passport');
require('./routers/auth')(passport);

router.route('./')
    .get( passport.authenticate('jwt', {session: false}), 
            (req, res, next) => {
            res.status(200).send('Hello World!')
      })
    .put( () => {
        res.status(200).send("PUT Hello World!")
    })

/*
app.post("/team/pokemons", () => {
    res.status(200).send("Hello World!")
})


app.delete("/team/pokemon:pokeid", () => {
    res.status(200).send("DELETE Hello World!")
})
*/

exports.router = router;
