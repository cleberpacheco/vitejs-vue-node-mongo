import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/vue_express_node', {
    useNewUrlParser: true
})

export default mongoose