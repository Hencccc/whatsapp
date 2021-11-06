import RoomModel from '../models/room.model.js'
import StatusCode from '../config/StatusCode.js'

const getAllRooms = async (req, res) => {
  try {
    const response = await RoomModel.find()
    res.status(StatusCode.CREATED).send(response)
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send(error)
  }
}

const postNewRoom = async (req, res) => {
  const newRoom = new RoomModel({
    members: [req.body.senderId, req.body.receiverId],
    name: req.body.name,
    description: req.body.description,
  })
  try {
    const savedRoom = await newRoom.save()
    res.status(StatusCode.CREATED).send(savedRoom)
  } catch (error) {
    res.status(StatusCode.INTERNAL_SERVER_ERROR).send(error)
  }
}

export default { postNewRoom, getAllRooms }
