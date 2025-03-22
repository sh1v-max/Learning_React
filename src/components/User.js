import '../css/User.css'
import { useState } from 'react'

//? function component is a function that returns a piece of JSX
const User = ({name}) => {
  const [count] = useState(0)
  const [count2] = useState(10) // we need to create separate state for each value
  return (
    <div className="user-card">
      <h1>Count = {count}, Count 2 = {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: varanasi</h3>
      <h4>Contact: wazir@gmail.com</h4>
    </div>
  )
}

export default User
