// to start the server run nodemon
import app from "./server.js";
import mongodb from 'mongodb'
import dotenv from 'dotenv'
import UsersDAO from "./dao/usersDAO.js";
dotenv.config()

const MongoClient = mongodb.MongoClient
const port = process.env.PORT || 8000

MongoClient.connect(
  process.env.RESTREVIEWS_DB_URI,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
  })
  .catch(error => {
    console.error(error.stack)
    process.exit(1)
  })
  .then(async client => {
    await UsersDAO.injectDB(client)

    app.listen(port, () => {
      console.log(`Listening on PORT:${port}`)
    })
  })