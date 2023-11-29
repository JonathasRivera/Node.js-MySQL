const mysql = require('mysql2')
require('dotenv').config()

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
}

const dbConnection = mysql.createConnection(dbConfig);

dbConnection.connect((meuErrinhoDeMysql) => {
    if(meuErrinhoDeMysql) {
        console.error('Erro ao conectar o banco de dados:' + meuErrinhoDeMysql)
    } else {
        console.log('Sucesso! Conexão com banco de dados bem-sucedida!')
    }
})

module.exports = dbConnection;