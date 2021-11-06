import mongoose from 'mongoose'

const whatsappSchema = mongoose.Schema({
  roomId: String,
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
})
export default mongoose.model('messagecontents', whatsappSchema)

//https://www.freecodecamp.org/news/create-a-professional-node-express/
