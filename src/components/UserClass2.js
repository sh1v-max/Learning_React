import React from 'react'
import '../css/User.css'

//! calling API in class component
class UserClass2 extends React.Component {

  //& to receive the prop, we need constructor
  constructor(props) {
    super(props)
    // console.log('child constructor')
  }

  async componentDidMount() {
    // console.log('child componentDidMount')

    const data = await fetch ('https://api.github.com/users/sh1v-max') 
    const json = await data.json()
    console.log(json)
  }

  render() {
    const { name, location } = this.props
    // console.log('child render')

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: wazir@gmail.com</h4>
      </div>
    )
  }
}

//! first constructor, then render and then componentDidMount will be called 

export default UserClass2
