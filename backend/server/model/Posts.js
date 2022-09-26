import mongoose from 'mongoose'
import Mongoose from '../config/connect.js'

const postSchema = new Mongoose.Schema({
    text: String,
    createdAt: Date
}, { collection: 'posts' })

const Posts = Mongoose.model('posts', postSchema, 'posts')

export const get = () => {
    return Posts.find()
}

export const save = async (postViewModel) => {
    return await Posts.create(postViewModel)
}

export const update = async (model) => {
    return await Posts.findByIdAndUpdate(mongoose.Types.ObjectId(model._id), model)
}

export const deletePost = async (id) => { 
    const post = Posts.find({ _id: mongoose.Types.ObjectId(id) })
    return await Posts.deleteOne(post)
}

export default { Posts: Posts, postModel: postSchema }