import dotenv from 'dotenv'
import StatusCode from '../config/StatusCode.js'
import Pusher from 'pusher'

dotenv.config()

const notFound = (req, res, next) => {
  const error = new Error(`Not found: ${req.originalUrl}`)
  res.status(StatusCode.NOT_FOUND)
  next(error)
}

const errorHandler = (error, req, res, next) => {
  const statusCode =
    res.statusCode === StatusCode.OK
      ? StatusCode.INTERNAL_SERVER_ERROR
      : res.statusCode
  res.status(statusCode)
  res.json({
    statusCode: statusCode,
    message: error.message,
    stacktrace: process.env.ENVIROMENT === 'PRODUCTION' ? 'lols' : error.stack,
  })
}

const pusher = new Pusher({
  appId: process.env.PUSHER_appId,
  key: process.env.PUSHER_key,
  secret: process.env.PUSHER_secret,
  cluster: process.env.PUSHER_cluster,
  useTLS: process.env.PUSHER_useTLS,
})

export default {
  notFound,
  errorHandler,
  pusher,
}
