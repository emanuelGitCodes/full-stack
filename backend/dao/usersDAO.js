import mongodb from 'mongodb'
const ObjectId = mongodb.ObjectId

let user

export default class UsersDAO {

  static async injectDB(conn) {
    if (user) { return }

    try {
      user = await conn.db(process.env.RESTREVIEWS_NS).collection('users')

    } catch (error) {
      console.error(`Unable to establish collection handles in userDAO: ${error}`)
    }
  }

  static async addUser(userInfo) { // adds user to the server
    try {
      const userDoc = {
        user: userInfo.user,
        password: userInfo.password,
        first_name: userInfo.firstName,
        last_name: userInfo.lastName
      }

      return await user.insertOne(userDoc)

    } catch (error) {
      console.error(`Unable to post review: ${error}`)
      return { error: error }
    }
  } // End of addUser()

} // end of class UsersDAO()