const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'Hyngrid S',
        imagem: 'https://gitbub.com/hyngridg.png',
        minibio: 'Desenvolvedora'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)