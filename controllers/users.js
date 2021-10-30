const uuid = require('uuid');
const crypto = require('../crypto.js')
const userDatabase = {
    '0001': { 
        'password': '',
        'salt': '',
        'userName': '',
    }
};
// userId -> password

const registerUser = (usarName, password) => {
    let hashedPwd = crypto.hashPasswordSync(password);
        //Guardar en la base de datos nuetsro usuario
        userDatabase[uuid.v4()]={
            userName: usarName,
            password: hashedPwd
        }
}


const getUserIdFromUserName = (userName) =>{
    for (let user in userDatabase){
        if(userDatabase[user].userName == userName){
            return userDatabase[user];
        }
    }
}

const checkUserCredentials = (userId, password, done) => {
    //Comprobar que las credenciales son correctas
    let user = userDatabase[userId];
    crypto.comparePassword(password, user.password, done);
};

exports.registerUser = registerUser;
exports.getUserIdFromUserName = getUserIdFromUserName;
exports.checkUserCredentials = checkUserCredentials;
