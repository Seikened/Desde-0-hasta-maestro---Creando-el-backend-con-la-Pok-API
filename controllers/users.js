const uuid = require('uuid');
const crypto = require('./crypto.js')
const userDatabase = {
    '0001': { 
        'password': '',
        'salt': '',
        'userName': '',
    }
};
// userId -> password

const registerUser = (usarName, password) => {
    crypto.hashPassword(password), (err, result) => {
            //Guardar en la base de datos nuetsro usuario

        userDatabase[uuid.v4()]={
            userName: usarName,
            password: result
        }
    }
}


const checkUserCredentials = (userId, password, done) => {
    //Comprobar que las credenciales son correctas
    let user = userDatabase[userId];
    crypto.comparePassword(password, user.password, done);
}