const db = require('./connection-db.js');
const Instituicoes = require('./Instituicao')

const Doadores = db.sequelize.define('doadores', {
    id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_instituicao: {
        type: db.Sequelize.INTEGER,
    },
    nome: {
        type: db.Sequelize.STRING,
    },
    email: {
        type: db.Sequelize.STRING,
    },
    cnpj: {
        type: db.Sequelize.STRING,
    },
    telefone: {
        type: db.Sequelize.STRING,
    },
    tipo_sanguineo: {
        type: db.Sequelize.STRING,
    },
}, {
    timestamps: false
});
Doadores.hasOne(Instituicoes);
module.exports = Doadores;