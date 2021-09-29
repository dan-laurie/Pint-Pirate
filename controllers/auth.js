import User from '../models/users.js'
import { secret } from '../config/environment.js'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body)
    console.log(newUser)
    return res.status(202).json({ message: `Welcome ${newUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

export const loginUser = async (req, res) => {
  try {
    // Find the user based on the email passed in the body
    const userToLogin = await User.findOne({ email: req.body.email })
    console.log('User to login ->', userToLogin)
    // Check the password matches, if it does, then we can send a token
    console.log('Password is a match: ', userToLogin.validatePassword(req.body.password))
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)){
      throw new Error()
    }
    // Generating our token
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })
    console.log('TOKEN ->', token)
    return res.status(200).json({ 
      message: `Welcome back ${userToLogin.username}`,
      token
    })
  } catch (err) {
    console.log(err)
    return res.status(422).json({ message: 'Unauthorised' })
  }

}