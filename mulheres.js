const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Hyngrid S',
        imagem: 'https://gitbub.com/hyngridg.png',
        minibio: 'Desenvolvedora'
    },
    {
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        minibio: 'Fundadora da PrograMaria'
    },
    {
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer'
    },
]

function mostraMulheres(request, response){
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)