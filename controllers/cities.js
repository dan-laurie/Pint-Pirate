import City from '../models/cities.js'

//GET ALL CITIES
export const getAllCities = async (_req, res) => {
  const cities = await City.find()
  return res.status(200).json(cities)
}

//CREATE CITY
export const createCity = async (req, res) => {
  try {
    const cityWithOwner = { ...req.body, owner: req.currentUser._id }
    const cityToAdd = await City.create(cityWithOwner)
    return res.status(201).json(cityToAdd)
  } catch (err){
    return res.status(422).json({ message: 'Unable to add city ', errors: err })
  }
}

//GET SINGLE CITY
export const getSingleCity = async (req, res)  => {
  try {
    const { id } = req.params
    const selectedCity = await City.findById(id)
    return res.status(200).json(selectedCity)
  } catch (err){
    return res.status(422).json({ message: 'Unable to find city', errors: err })
  }
}

//UPDATED CITY
export const updateCity = async (req, res) => {
  const { id } = req.params
  try {
    const cityToUpdate = await City.findById(id)
    if (!cityToUpdate) throw new Error('City not found')
    if (!cityToUpdate.owner.equals(req.currentUser._id)) throw new Error('unauthorised')
    await cityToUpdate.update(req.body)
    return res.status(202).json({ message: '✅ Successfully Updated' })
  } catch (err) {
    return res.status(422).json({ message: 'Can\'t update city', errors: err })
  }
}

//DELETE CITY
export const deleteCity = async (req, res) => {
  const { id } = req.params
  try {
    const cityToDelete = await City.findById(id)
    if (!cityToDelete) throw new Error('City not found')
    if (!cityToDelete.owner.equals(req.currentUser._id)) throw new Error('unauthorised')
    await cityToDelete.remove(cityToDelete)
    return res.status(202).json({ message: '🚮 Deleted Successfully' })
  } catch (err) {
    return res.status(404).json({ message: 'Can\'t delete city', errors: err })
    
  }
}