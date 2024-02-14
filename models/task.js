const mongoose=require('mongoose')

const TaskSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,'Name Must be provided'],
    trim:true,
    maxlength:[20,'name connot be more than 20 charecters']
},
completed:{
    type:Boolean,
    default:false
}
})

module.exports = mongoose.model('Task', TaskSchema)