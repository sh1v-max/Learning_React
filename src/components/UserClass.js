import React from 'react'
import '../css/User.css'

//? class base component is a class which has a render method
//? that returns a piece of JSX
class UserClass extends React.Component {
  // we need to import React from 'react' to use React.Component

  //& to receive the prop, we need constructor
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: varanasi</h3>
        <h4>Contact: wazir@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass