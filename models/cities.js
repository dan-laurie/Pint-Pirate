import mongoose from 'mongoose'

//DEFINE CITY SCHEMA
const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  bio: { type: String, required: true, maxlength: 500 },
  image: { type: String, required: true },
  pint: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    abv: { type: Number, required: true },
    image: { type: String, required: true },
    bio: { type: String, required: true, maxlength: 500 },
    locations: []
  }
})

export default mongoose.model('City', citySchema)