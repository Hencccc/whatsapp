import userController from '../controllers/user.controller.js'

const routes = (app) => {
  app.post('/user/new', userController.postUser)
  app.get('/user/:getById', userController.getUser)
}

export default { routes }
