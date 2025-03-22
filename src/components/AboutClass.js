import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import '../css/User.css'

class AboutClass extends React.Component {

  constructor(props) {
    super(props)

    console.log("About class constructor")
  }
  
  render() {
    return (
      <div className="about-class">
        <h1>About component</h1>
        <UserClass name ={"Wazir(class)"} location = {"Varanasi"}/>
      </div>
    )
  }
}

export default AboutClass