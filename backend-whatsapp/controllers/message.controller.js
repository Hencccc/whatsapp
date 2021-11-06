import MessageModel from '../models/message.model.js'
import StatusCode from '../config/StatusCode.js'

const defaultPath = async (req, res) => {
  try {
    res.status(StatusCode.OK).send('Hello World')
  } catch (error) {
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .send({ message: error.message })
  }
}

const getAllMessages = async (req, res) => {
  const dbMessage = req.body
  try {
    const response = await MessageModel.find(dbMessage)
    res.status(StatusCode.OK).send(response)
  } catch (error) {
    res
      .status(StatusCode.INTERNAL_SERVER_ERROR)
      .send({ message: error.message })
  }
}

const postNewMessage = async (req, res) => {
  const Message = req.body
  try {
    const response = await MessageModel.create(Message)
    res.status(StatusCode.CREATED).send(response)
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send(error)
  }
}

// const getRoomId = async (req, res) => {
//   // const dbRoomId = req.params.roomId
//   try {
//     const response = await MesasgeModel.find({
//       roomId: req.params.roomId,
//     })
//     res.status(StatusCode.OK).send(response)
//   } catch (error) {
//     res.status(StatusCode.INTERNAL_SERVER_ERROR)
//   }
// }
const getRoomId = async (req, res) => {
  // const dbRoomId = req.params.roomId
  try {
    const response = await MessageModel.find({
      roomId: req.params.roomId,
    })
    console.log(response)
    res.status(StatusCode.OK).send(response)
  } catch (error) {
    console.log(error)
    res.status(StatusCode.INTERNAL_SERVER_ERROR)
  }
}

export default { getAllMessages, defaultPath, postNewMessage, getRoomId }
