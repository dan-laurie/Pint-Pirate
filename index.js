import express from 'express'
import mongoose from 'mongoose'
import { dbURI, port } from './config/environment.js'
import router from './config/router.js'
//Set up express stuff
const app = express()

const startServer = async () => {

  try {
    await mongoose.connect(dbURI)
    console.log('🤝 Database connection established! 🤝')

    //Middleware
    app.use(express.json())

    //? ROUTER HERE
    app.use('/api', router)

    // Log every request
    app.use((req, _res, next) => {
      console.log(`🚨 Request Received: ${req.method} - ${req.url}`)
      next()
    })

    // Catcher
    app.use((_req, res) => {
      return res.status(404).json({ message: 'Path not found' })
    })

    const server = app.listen(port, () => console.log(`🚀 Server is up and running on port: ${port}`))
    server.timeout = 10000


  } catch (err) {
    console.log('🚨 Something went wrong...failed to connect')
    console.log(err)
  }
}
startServer()