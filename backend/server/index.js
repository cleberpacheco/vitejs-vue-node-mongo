import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()

// Middleware
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())

// Routes
import postsRouter from './routes/api/posts.js'
app.use('/api/posts', postsRouter)

//Port
const port = process.env.PORT || 5000

// Start of Program
app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`)
})