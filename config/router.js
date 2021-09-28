import express from 'express'
import { getAllCities } from '../controllers/cities.js'

const router = express.Router()

router.route('/cities')
  .get(getAllCities)


export default router