//Importações
const DATABASE_URI = process.env.DATABASE_URI
const mongoose = require('mongoose')

//função de conexão com o banco de dados
const connect = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true, //opção que permite acessar banco de dados por meio de URL
      //sem essa opção para acessar ao banco precisaria de usuário e senha
      useUnifiedTopology: true
    })
    console.log('Banco MongoAtlas conectado! ')
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  connect
}
//Quando conectar esse arquivo ao arquivo 'app.js', será possível visualizar no MongoAtlas o novo DB criado