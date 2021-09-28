import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/router.js'
//Set up express stuff
const app = express()

const startServer = async () => {

  try {
    await mongoose.connect(process.env.dbURI)
    console.log('🤝 Database connection established! 🤝')

    //Middleware
    app.use(express.json())

    //? ROUTER HERE
    app.use(router)

    // Log every request
    app.use((req, _res, next) => {
      console.log(`🚨 Request Received: ${req.method} - ${req.url}`)
      next()
    })

    // Catcher
    app.use((_req, res) => {
      return res.status(404).json({ message: 'Path not found' })
    })

    const server = app.listen(process.env.PORT, () => console.log(`🚀 Server is up and running on port: ${process.env.PORT}`))
    server.timeout = 10000


  } catch (err) {
    console.log('🚨 Something went wrong...failed to connect')
    console.log(err)
  }
}
startServer()