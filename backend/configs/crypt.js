const bc =require("bcrypt");
const saltRounds = 10;

const Crypt = async (password) => {
     return await bc.hash(password, saltRounds);
}


module.exports = {Crypt};