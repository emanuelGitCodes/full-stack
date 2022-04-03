import express from 'express'
import UsersCtrl from './users.controller.js'

const router = express.Router()

router.route('/test')
  .get(UsersCtrl.apiGetUsers)

router
  .route('/users')
  .get(UsersCtrl.apiGetUsers)
  .post(UsersCtrl.apiPostUser)

export default router