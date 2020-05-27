const express = require('express');
const Instituicoes = require('./models/Instituicao');
const passport = require('passport');
const body_parser = require("body-parser");
const cors = require('cors');
const session = require('express-session');

const app = express();
app.use(cors())
app.use(body_parser.urlencoded({
    extended: true
}));
app.use(body_parser.json());

app.use(session({
    secret: 'MyK3y',
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 3600000
    }
}));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login', function (req, res) {
    const user = Instituicoes.findOne({
        where: {
            email: req.body.email,
        }
    }).then(response => {
        if (response == null) {
            return res.status(400).send('usuário não encontrado')
        }
        try {
            if (req.body.senha == response.senha) {
                console.log(response.id)
                res.send(JSON.stringify(response.id))
            } else {
                res.send(JSON.stringify("negado"))
            }
        } catch {
            res.status(500).send()
        }
    })
})

app.post('/cadastrar', function (req, res) {
    Instituicoes.findOne({
        where: {
            email: req.body.email
        }
    }).then(response => {
        console.log(JSON.stringify(response))
        variavel = response;
        if (variavel === null) {
            // console.log(variavel)
            Instituicoes.create({
                nome: req.body.nome,
                responsavel: req.body.responsavel,
                email: req.body.email,
                telefone: req.body.telefone,
                endereco: req.body.endereco,
                numero_endereco: req.body.numero_endereco,
                CEP: req.body.cep,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                ponto_referencia: req.body.referencia,
                senha: req.body.senha
            }).then(res.send(JSON.stringify("criado")))
        } else {
            res.send(JSON.stringify("já registrado no banco de dados"))
        }
    })

})

app.post('/alterarInstituicao/:id', function (req, res) {
    Instituicoes.update({
        nome: req.body.nome,
        responsavel: req.body.responsavel,
        email: req.body.email,
        telefone: req.body.telefone,
        usuario: req.body.usuario,
        senha: req.body.senha
    }, {
        where: {
            id: req.params.id
        }
    }).then(response => res.send(JSON.stringify("alterado"))).catch(error => res.send(JSON.stringify("ocorreu um erro\n" + error)))
})

app.post('/deletarInstituicao/:id', function (req, res) {
    Instituicoes.destroy({
        where: {
            id: req.params.id
        }
    }).then(response => {
        if (JSON.stringify(response) === 1) res.send(JSON.stringify("removido"));
        else {
            res.send(JSON.stringify("erro"))
        }
    })
})

app.post('/alterarBolsaSangue/:id', function (req, res) {
    Instituicoes.update({
            tipo_a_pos: Number(req.body.tipo_a_pos),
            tipo_a_neg: Number(req.body.tipo_a_neg),
            tipo_b_pos: Number(req.body.tipo_b_pos),
            tipo_b_neg: Number(req.body.tipo_b_neg),
            tipo_ab_pos: Number(req.body.tipo_ab_pos),
            tipo_ab_neg: Number(req.body.tipo_ab_neg),
            tipo_o_pos: Number(req.body.tipo_o_pos),
            tipo_o_neg: Number(req.body.tipo_o_neg),
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            if (response == 1) {
                res.send(JSON.stringify('alterado'))
            }
        }).catch(error => res.send(JSON.stringify("ocorreu um erro\n" + error)))
})

app.post("/instituicao/:id", function(req,res){
    Instituicoes.findOne({
        where:{
            id:req.params.id
        }
    }).then(response=>res.send(JSON.stringify(response)))
})

app.post('/esqueciSenha:email',function(req,res){
    Instituicoes.findOne({
        where:{
            email:req.params.email
        }.then(response)
    })
})
app.listen(5000);