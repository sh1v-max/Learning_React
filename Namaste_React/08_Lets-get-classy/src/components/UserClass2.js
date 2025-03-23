import React from 'react'
import '../css/User.css'

//! calling API in class component
class UserClass2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      userInfo:{
        name: "Dummy",
        location: "Default",
        avatar_url: "https://www.google.com"
      }
    }
  }

  //& this is how we can make API call in class component
  async componentDidMount() {

    const data = await fetch ('https://api.github.com/users/sh1v-max') 
    const json = await data.json()

    this.setState({
      userInfo: json
    })
    console.log(this.state.userInfo)
    
    console.log(json)
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo
    // debugger
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: wazir@gmail.com</h4>
      </div>
    )
  }
}

//! first constructor, then render and then componentDidMount will be called 

export default UserClass2

//! never compare react lifecycle methods with function component