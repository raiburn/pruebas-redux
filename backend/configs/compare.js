const bc =require("bcrypt");

const Comparar = async(password, hash) => {
    return await bc.compare(password, hash);
}

module.exports = {Comparar};