import User from './User'
import UserClass from './UserClass'
import React from 'react'
import '../css/User.css'

class AboutClass extends React.Component {
  constructor(props) {
    super(props)

    console.log('parent constructor')
  }

  componentDidMount() {
    console.log('parent componentDidMount')
  }  
  
  render() {
    console.log('parent render')

    return (
      <div className="about-class">
        <h1>About component</h1>
        <UserClass name={'Wazir(class)'} location={'Varanasi'} />
        <UserClass name={'Elon Musk'} location={'US'} />
      </div>
    )
  }
}
//! parent constructor, then parent render, child constructor, child render child componentDidMount, and then parent componentDidMount will be called

export default AboutClass
