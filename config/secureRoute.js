import jwt from 'jsonwebtoken'
import { secret } from './environment.js'
import User from '../models/users.js'

export const secureRoute = async (req, res, next) => {
  try {
    // Checking that an authorization header has been sent
    if (!req.headers.authorization) throw new Error('Missing headers')

    // Remove Bearer and space from start of header
    const token = req.headers.authorization.replace('Bearer ', '')
    
    // Verify token using jwt.sign
    const payload = jwt.verify(token, secret)

    // Query the user model, by the id in payload
    const userToVerify = await User.findById(payload.sub)
    if (!userToVerify) throw new Error('User not found')

    req.currentUser = userToVerify

    next() // Verified - Move on to the controller
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorised' })
  }
}