import UsersDAO from "../dao/usersDAO.js"

export default class UsersController {

  static async apiPostUser(req, res, next) { // add user to the server
    try {
      const userInfo = {
        user: req.body.user,
        password: req.body.password,
        firstName: req.body.first_name,
        lastName: req.body.last_name
      }

      const UserResponse = await UsersDAO.addUser(userInfo)

      res.json({ status: 'success' })

    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  } // End of apiPostUser()

} // end of class UsersController()