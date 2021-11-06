import mongoose from 'mongoose'

const userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    profilePic: {
      type: String,
      get: (v) => `${root}${v}`,
    },
  },
  { timestamps: true }
)

export default mongoose.model('user', userSchema)

//https://mongoosejs.com/docs/schematypes.html
//För profilepic
