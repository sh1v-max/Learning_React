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
      count: 0,
      count2: 10, // we can have multiple states
    }
  }

  render() {
    const { name, location } = this.props
    const { count, count2 } = this.state

    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        {/* <h1>Count2 = {count2}</h1> */}
        <button
          onClick={() => {
            // this.state.count = this.state.count + 1;
            //? never directly mutate the state, always use setState
            this.setState({ count: count + 1 })
            // this is how we update the state
          }}
        >
          Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: wazir@gmail.com</h4>
      </div>
    )
  }
}

export default UserClass
