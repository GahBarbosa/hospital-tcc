const db = require('./connection-db.js');

const Instituicoes = db.sequelize.define('instituicoes', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true    
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    responsavel: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    }, cnpj: {
        type: db.Sequelize.STRING,
    },
    telefone: {
        type: db.Sequelize.STRING,
    },
    endereco: {
        type: db.Sequelize.STRING,
    },
    numero_endereco: {
        type: db.Sequelize.STRING,
    },
    CEP: {
        type: db.Sequelize.INTEGER,
    },
    latitude: {
        type: db.Sequelize.STRING,
    },
    longitude: {
        type: db.Sequelize.STRING,
    },
    ponto_referencia: {
        type: db.Sequelize.STRING,
    },
    senha: {
        type: db.Sequelize.STRING,
    },
    tipo_a_pos: {
        type: db.Sequelize.FLOAT,
    },
    tipo_a_neg:{
        type: db.Sequelize.FLOAT,
    },
    tipo_b_pos:{
        type: db.Sequelize.FLOAT,
    },
    tipo_b_neg:{
        type: db.Sequelize.FLOAT,
    },
    tipo_ab_pos:{
        type: db.Sequelize.FLOAT,
    },
    tipo_ab_neg:{
        type: db.Sequelize.FLOAT,
    },
    tipo_o_pos:{
        type: db.Sequelize.FLOAT,
    },
    tipo_o_neg:{
        type: db.Sequelize.FLOAT,
    },
}, {
    timestamps: false
});

module.exports = Instituicoes;