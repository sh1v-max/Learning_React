import React from 'react'
import '../css/User.css'

//? class base component is a class which has a render method
//? that returns a piece of JSX
class UserClass extends React.Component {
  // we need to import React from 'react' to use React.Component

  //& to receive the prop, we need constructor
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }
  
  render() {
    const { name, location } = this.props
    
    return (
      <div className="user-card">
        <h1>Count = {this.state.count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: wazir@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass