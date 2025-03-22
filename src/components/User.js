import '../css/User.css'
import { useState } from 'react'

//? function component is a function that returns a piece of JSX
const User = ({name}) => {
  const [count] = useState(0)
  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: varanasi</h3>
      <h4>Contact: wazir@gmail.com</h4>
    </div>
  )
}

export default User
