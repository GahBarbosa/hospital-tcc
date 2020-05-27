const Sequelize = require('sequelize');

const sequelize =  new Sequelize('projeto-rubi','root','12345678',{
    host:'localhost',
    dialect:'mysql'

});
sequelize.authenticate().then(data=>console.log("Connected"));

module.exports = {
    sequelize : sequelize,
    Sequelize : Sequelize
}