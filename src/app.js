//importações
require('dontenv').config()
const express = require('express')
const cors = require('cors')
const dbmongoose = require('./database/mongooseConnect') //importar o database
const coachRoutes = require('./routes/coachRoutes')
const pokedexRoutes = require('./routes/pokedexRoutes')

//cria a aplicação
const app = express() 

//bodyparse do express
app.use(express.json())
//deixa a API publica
app.use(cors())
//conecta ao banco
dbmongoose.connect() //conecta ao banco

app.use(coachRoutes)
app.use(pokedexRoutes)

//exportação
module.exports = app

