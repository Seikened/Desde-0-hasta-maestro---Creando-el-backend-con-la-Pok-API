const bcrypt = require('bcrypt');

const hashPassword = (plainTextPwd, done)=> {
    bcrypt.hash(plainTextPwd, 10, done);
};


const comaprePassword = (plainTextPwd, hashedPwd, done)=> {
    bcrypt.compare(plainTextPwd, hashedPwd, done);
}