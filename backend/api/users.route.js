import express from 'express'
import UsersCtrl from './users.controller.js'

const router = express.Router()

router.route('/')

router
  .route('/user')
  .post(UsersCtrl.apiPostUser)

export default router