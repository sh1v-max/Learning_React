import './User.css'

//? function component is a function that returns a piece of JSX
const User = ({name}) => {
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: varanasi</h3>
      <h4>Contact: wazir@gmail.com</h4>
    </div>
  )
}

export default User
