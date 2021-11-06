import userModel from '../models/user.model.js'
import StatusCode from '../config/StatusCode.js'

const postUser = async (req, res) => {
  const User = req.body
  try {
    const response = await userModel.create(User)
    res.status(StatusCode.CREATED).send(response)
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send(error)
  }
}

const getUser = async (req, res) => {
  const User = req.query.userId
  try {
    const response = await userModel.find(User)
    res.status(StatusCode.OK).send(response)
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send(error)
  }
}

// nst getRoomId = async (req, res) => {
//   // const dbRoomId = req.params.roomId
//   try {
//     const response = await MessageModel.find({
//       roomId: req.params.roomId,
//     })
//     console.log(response)
//     res.status(StatusCode.OK).send(response)
//   } catch (error) {
//     console.log(error)
//     res.status(StatusCode.INTERNAL_SERVER_ERROR)
//   }
// }

export default { postUser, getUser }
