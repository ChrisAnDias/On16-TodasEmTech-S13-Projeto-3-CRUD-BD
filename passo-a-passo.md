## Passo-a-passo e Comandos utilizados
**Criar o arquivo .gitignore**
<br> > touch .gitignore (no terminal) <br> 
- 'touch' cria um novo arquivo<br>

> Adicionar o node_modules ao arquivo .gitignore
<br>

**Criar arquivo server**
<br> > touch server.js <no terminal>
<br>

**Iniciar o npm**
<br> > npm init -y
<br>

**Instalar as dependências** <br>
CORS E EXPRESS
<br> > npm i express cors.<br>
O Express para construir a API. Cors para tornar a API Pública. <BR>
NODEMON
<br> > npm i -D nodemon <br>
O '-D' é de Desenvolvimento. Quando for subir o pacote, não vai essa funcionalidade que só é útil no desensvolvimento da API. <br>
<br> MONGOSSE
<br> > npm i mongoose
<br>
**Criar pasta Source (src)**
<br> > mkdir src
<br> **Dentro da pasta src, criar arquivo app.js**
<br> > touch src/app.js (Cria arquivo app.js dentro da pasta src)
<br>
<br> INICIAR API
<br>
<br> No arquivo app.js <br>
- 1. Importar o express, passar o *bodyparse* e permitir exportação
- 2. No arquivo server.js importar o app.js e abrir a porta. <br>

COLOCAR PARA FUNCIONAR <br>
Verificar se no package.json o 'start' está ativado como "nodemon server.js"
<br> > npm start

<br> CONECTAR BANCO DE DADOS <br>
- 1. Ir no MongoAtlas bucar o link do meu banco de dados. A partir da interrogração deletar e colocar a palavra que irá indicar o nome do banco de dados que será criado
- 2. criar pasta database e arquivo mongooseConnect.js. É o arquivo 
- 3. Inserir em uma constante a URL copiada do MongoAtlas.

MODELS
<br> > criar a pasta modelo com arquivos model treinador e posteriormente pokemons

CONTROLLER
<br> > criar a controller 

ROTAS
<br> > criar as rotas e importar no app

> const DBURI = process.env.DBURI
> variáveis de ambiente tem que ser maíusculas
> Tem que instalar o dontev. npm i dontenv no terminal