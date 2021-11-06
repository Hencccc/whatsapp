import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import Configuration from './config/configuration.js'
import middlewares from './middlewares/middlewares.js'
import MessageRoutes from './routes/message.routes.js'
import RoomRoutes from './routes/room.routes.js'
import UserRoutes from './routes/user.routes.js'

//app config
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
// app.use(middlewares.errorHandler)
// app.use(middlewares.notFound)

//Connection to DB and listener
Configuration.connectToDatabase()
Configuration.connectToPort(app)

//Pusher
const db = mongoose.connection

db.once('open', () => {
  console.log('DB connected')

  const msgCollection = db.collection('messagecontents')
  const changeStream = msgCollection.watch()

  changeStream.on('change', (change) => {
    console.log(change)

    if (change.operationType === 'insert') {
      const messageDetails = change.fullDocument
      middlewares.pusher.trigger('messages', 'inserted', {
        roomId: messageDetails.roomId,
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      })
    } else {
      console.log('Error triggering Pusher')
    }
  })
})

//api endpoints
MessageRoutes.routes(app)
RoomRoutes.routes(app)
UserRoutes.routes(app)

export default { db }
