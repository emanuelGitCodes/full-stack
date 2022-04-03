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

  static async getUsers({ filters = null }) { // get all users data.

    let query
    if (filters) {
      if ("users" in filters) {
        query = { $text: { $search: filters['users'] } }
      }
    }

    let cursor

    try {
      cursor = await user.find(query)

    } catch (error) {
      console.error(`Unable to post review: ${error}`)
      return { usersList: [], totalNumUsers: 0 }
    }

    try {
      const usersList = await cursor.toArray()
      const totalNumUsers = await user.countDocuments(query)

      return { usersList, totalNumUsers }

    } catch (error) {
      console.error(`Unable to convert cursor to array or problem counting documents, ${error}`)
      return { restaurantsList: [], totalNumRestaurants: 0 }
    }


  } // End of addUser()

} // end of class UsersDAO()