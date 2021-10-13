const Sequelize = require('sequelize')

//Conexão com o Banco de Dados
const sequelize = new Sequelize('Uninove','root','1234',{
    host:"localhost",
    dialect:'mysql'
})

module.exports ={
    Sequelize:Sequelize,
    sequelize:sequelize
}