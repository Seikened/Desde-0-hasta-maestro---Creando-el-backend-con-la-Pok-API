const bcrypt = require('bcrypt');

const hashPassword = (plainTextPwd, done)=> {
    bcrypt.hash(plainTextPwd, 10, done);
};

const hashPasswordSync = (plainTextPwd)=> {
    return bcrypt.hashSync(plainTextPwd, 10);
};


const comaprePassword = (plainTextPwd, hashedPwd, done)=> {
    bcrypt.compare(plainTextPwd, hashedPwd, done);
};


exports.hashPassword = hashPassword;
exports.hashPasswordSync = hashPasswordSync;
exports.comaprePassword = comaprePassword;
