import { useState, useEffect } from 'react';
const url = 'http://localhost:5050/api/v1/users'
const url2 = 'http://localhost:5050/api/v1/users?users=temp'

const TestData = props => {

  const [isUser, setUser] = useState([])
  const [specificUser, setSpecificUser] = useState(null)

  useEffect(() => {
    getUsers()
    getSpecificUser()
  }, [])

  const getUsers = async () => {
    const response = await fetch(url)
    const user = await response.json()
    setUser(user.users_list)
  }

  const getSpecificUser = async () => {
    const response = await fetch(url2)
    const user = await response.json()
    console.log(user)
    setSpecificUser(user.users_list)
  }

  return (
    <>
      <h3> Users list</h3>
      <ul>
        {isUser.map((item, index) => {
          const { _id, first_name, last_name, user, password } = item

          return (
            <li key={index}>
              <h4> id: {_id}  </h4>
              <h4> First Name: {first_name}  </h4>
              <h4> Last Name: {last_name}  </h4>
              <h4> User: {user}  </h4>
              <h4> Password: {password}  </h4>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TestData