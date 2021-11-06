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
  appId: '1286479',
  key: 'c66c1ba0ef82ab0906c3',
  secret: '0ff007ac59014de2e242',
  cluster: 'eu',
  useTLS: true,
})

export default {
  notFound,
  errorHandler,
  pusher,
}
