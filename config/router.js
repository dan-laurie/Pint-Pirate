import express from 'express'
import { getAllCities, createCity, getSingleCity, updateCity, deleteCity } from '../controllers/cities.js'

const router = express.Router()

router.route('/cities')
  .get(getAllCities)
  .post(createCity)

router.route('/cities/:id')
  .get(getSingleCity)
  .put(updateCity)
  .delete(deleteCity)

export default router