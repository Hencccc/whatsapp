import mongoose from 'mongoose'

const roomSchema = mongoose.Schema(
  {
    members: Array,
    name: String,
    description: String,
  },
  { timestamps: true }
)
export default mongoose.model('rooms', roomSchema)

//https://www.freecodecamp.org/news/create-a-professional-node-express/
