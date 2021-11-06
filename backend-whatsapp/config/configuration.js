import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async () => {
  try {
    const connection_url = process.env.DATABASE_URL

    await mongoose.connect(connection_url, {
      writeConcern: {
        useCreateIndex: true,
        useNewUrlParser: true,
      },
      useUnifiedTopology: true,
    })
    console.log('Successfully connected to DB')
  } catch (error) {
    console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE: ', error)
    process.exit
  }
}

const connectToPort = (app) => {
  const port = process.env.PORT || 9000
  app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`)
  })
}

export default {
  connectToDatabase,
  connectToPort,
}

// //DB config
// const connection_url =
//   'mongodb+srv://admin:Ch2xBk3G5sJq5Mm@cluster0.66e4g.mongodb.net/WhatsAppDB?retryWrites=true&w=majority'
// mongoose.connect(connection_url, {
//   writeConcern: {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//   },
//   useUnifiedTopology: true,
// })
