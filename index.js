const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')





//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main'}))
    app.set('view engine','handlebars')
    //setando o handlebars como engine em template

    //Conexão com o banco de dados MYSQL
    
    const sequelize = new Sequelize('sistemaDecurso','root','1234',{
            host:"localhost",
            dialect:'mysql'
        })

// Rotas
        app.get('/Cadastro',function(req,res){
            res.render('/views/layouts/forms')
            //res.send('Rota de Cadastro de cursos')
        })











/*app.get("/",function(req,res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/Cursos",function(req,res){
    res.send("Bem Vindo ao Meus Cursos");
})

app.get("/Cadastro",function(req,res){
    res.send("Cadastre-se");
})

app.get("/Login",function(req,res){
    res.send("Login");
})


app.get('/ola/:nome',function(req,res){
    res.send("ola "+req.params.nome);
})
*/
















app.listen(8081, function(){
    console.log('Executando')
});





