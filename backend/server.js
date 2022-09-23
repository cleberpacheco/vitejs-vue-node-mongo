const express = require('express')

const app = express()
app.use(express.json())

let port = 5000

app.listen(process.env.port || port, () => {
    console.log(`Servidor em execução na porta:${port}`)
})