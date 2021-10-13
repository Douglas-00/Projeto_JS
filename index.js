const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Curso')





//Config
    //Template Engine
    app.engine('handlebars',handlebars({defaultLayout:'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,}}))
    app.set('view engine','handlebars')
    //setando o handlebars como engine em template

    //BodyParser
    app.use(bodyParser.urlencoded({extended:false}))
    app.use(bodyParser.json())



    
    

// Rotas
        app.get('/',function(req,res){
            Post.findAll().then(function(curso){
                res.render('./layouts/home',{curso: curso})
            })
            
        })

        app.get('/Cad',function(req,res){
          res.render('./layouts/forms')  
            //res.send('Rota de Cadastro de cursos')
        })

        app.post('/add', function(req,res){
            Post.create({
                titulo:req.body.titulo,
                conteudo:req.body.conteudo
            }).then(function(){
                res.redirect('/')
            }).catch(function(erro){
                res.send("Houve um erro: "+erro)
            })
        })

        app.get('/deletar/:id',function(req,res){
            Post.destroy({where:{'id':req.params.id}}).then(function(){
                    res.send("Curso deletado com sucesso")
            }).catch(function(){
                res.send("Este Curso não existe")

            })})            









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
