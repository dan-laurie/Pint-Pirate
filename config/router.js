import express from 'express'
import { getAllCities, createCity, getSingleCity, updateCity, deleteCity } from '../controllers/cities.js'
import { loginUser, registerUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/cities')
  .get(getAllCities)
  .post(secureRoute, createCity)

router.route('/cities/:id')
  .get(getSingleCity)
  .put(secureRoute ,updateCity)
  .delete(secureRoute, deleteCity)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

export default router