const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const basePath = path.join(__dirname,'templates')

var checkAuth = function (req, res, next){
    req.authStatus = true
    if(req.authStatus){
        console.log('Está logado! pode continuar')
        next()
    }else{
        console.log('Não está logado! Travado do sistema.')
    }
}

app.use(checkAuth)

app.get('/', (req, res) =>{
    res.sendFile(`${basePath}/index.html`)
})

app.get('/user/:id', (req, res) =>{
    var usuario = req.params.id + "@gmail.com"
    console.log(`O Navegador mandou: ${usuario} como usuário.`)
    res.sendFile(`${basePath}/user.html`)
})
app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})