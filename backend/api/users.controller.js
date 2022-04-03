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

  static async apiGetUsers(req, res, next) { // can be used to search for a specific user by there user name
    let filters = {}
    if (req.query.users) { filters.users = req.query.users }

    const { usersList, totalNumUsers } = await UsersDAO.getUsers({ filters })

    let response = {
      users_list: usersList,
      total_users: totalNumUsers
    }

    res.json(response)

  } // End of apiGetUsers()

  static async apiGetUserId(req, res, next) {

    try {
      let id = req.params.id || {}
      let user = await UsersDAO.getUserById(id)

      if (!user) {
        res.status(404).json({ error: 'No user found' })
        return
      }

      res.json(user)

    } catch (error) {
      console.log(`api, ${error}`)
      res.status(500).json({ error: error })
    }
  } // End of apiGetUserId()




} // end of class UsersController()