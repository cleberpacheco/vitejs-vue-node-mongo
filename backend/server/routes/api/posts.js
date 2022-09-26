import express from 'express'
import * as Posts from '../../model/Posts.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get()
        res.status(200).send(posts)
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
    // const posts = await loadPostsCollection();
    // res.send(await posts.find({}).toArray());
})

router.post('/', async (req, res) => {
    try {
        const model = { ...req.body, createdAt: new Date() };
        const post = await Posts.save(model)
        res.status(201).send(`Incluído com sucesso. Post Id ${post._id}`)
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
})

router.delete('/:id', async (req, res) => { 
    try {
        await Posts.deletePost(req.params.id)
        res.status(200).send('Excluído com sucesso')
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
})

router.put('/:id', async (req, res) => { 
    try {
        const model = { ...req.body, _id: req.params.id };
        await Posts.update(model)
        res.status(200).send('Atualizado com sucesso')
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
})

// router.post('/', async (req, res) => {
//     const posts = await loadPostsCollection();
//     await posts.insertOne({
//         text: req.body.text,
//         createdAt: new Date()
//     })

//     res.status(201).send()
// })

// router.put('/:id', async (req, res) => { 
//     const posts = await loadPostsCollection();
//     const post = posts.find({ _id:  new mongodb.ObjectId(req.params.id)})
//     post.text = req.body.text

//     await posts.updateOne(post)
//     res.status(200).send()
// })

// router.delete('/:id', async (req, res) => { 
//     const posts = await loadPostsCollection();
//     await posts.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
//     res.status(200).send()
// })

// async function loadPostsCollection() {
//     const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { 
//         useNewUrlParser: true,
//     })

//     return client.db('vue_express_node').collection('posts')
// }

export default router
