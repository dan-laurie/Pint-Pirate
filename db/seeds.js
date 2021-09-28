import mongoose from 'mongoose'
import { dbURI } from '../config/environment.js'

//Models
import City from '../models/cities.js'

//Data
import cityData from './data/cities.js'

const seedDatabase = async () => {

  try {
    // Connect to mongodb
    await mongoose.connect(dbURI)
    console.log('🤝 Database connected!🤝')
    // Drop current database
    await mongoose.connection.db.dropDatabase()
    console.log('❌ Dropped database ❌')
    // // create default users
    // const users = await User.create(userData)
    // console.log(`✅  ${users.length} users created`)
    // create a new teams array with owners populated
    // const teamsWithOwners = teamData.map(team => {
    //   team.owner = users[0]._id
    //   return team
    // })

    // Create Cities
    const cities = await City.create(cityData)
    console.log(`🌱 Database seeded with ${cities.length} cities 🌱`)
    // Close connection to mongodb
    await mongoose.connection.close()
    console.log('👋 Bye')
  } catch (err) {
    console.log('🆘 Something went wrong')
    console.log(err)
    // Close connection to mongodb
    await mongoose.connection.close()
    console.log('👋 Bye')
  }
}
seedDatabase()