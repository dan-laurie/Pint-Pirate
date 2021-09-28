import City from '../models/cities.js'

//GET ALL CITIES
export const getAllCities = async (_req, res) => {
  const cities = await City.find()
  return res.status(200).json(cities)
}