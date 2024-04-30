const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Importe o arquivo onde você configurou o Sequelize

const getPersonalInfo = sequelize.define('PersonalInfo', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true // Garante que o nome não esteja vazio
    }
  },
  telefone: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true // Valida o formato do e-mail
    }
  },
  endereco: {
    type: DataTypes.STRING
  }
});

module.exports = getPersonalInfo;
