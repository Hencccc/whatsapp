import MessageController from '../controllers/message.controller.js'

const routes = (app) => {
  app.get('/', MessageController.defaultPath)
  app.get('/messages/sync', MessageController.getAllMessages)
  app.post('/messages/new', MessageController.postNewMessage)
  app.get('/messages/:roomId', MessageController.getRoomId)
}
export default { routes }
