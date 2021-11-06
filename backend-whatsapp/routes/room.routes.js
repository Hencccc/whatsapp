import RoomController from '../controllers/room.controller.js'

const routes = (app) => {
  app.post('/room/new', RoomController.postNewRoom)
  app.get('/room/get', RoomController.getAllRooms)
}
export default { routes }
