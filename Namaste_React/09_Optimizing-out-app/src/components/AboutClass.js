import User from './User'
import UserClass2 from './UserClass2'
import React from 'react'
import '../css/User.css'

class AboutClass extends React.Component {
  constructor(props) {
    super(props)

    // console.log('parent constructor')
  }

  componentDidMount() {
    // console.log('parent componentDidMount')
  }  
  
  render() {
    // console.log('parent render')

    return (
      <div className="about-class">
        <h1>About component</h1>
        <UserClass2 name={'first'} location={'Varanasi'} />
      </div>
    )
  }
}
//! parent constructor, then parent render, child constructor, child render child componentDidMount, and then parent componentDidMount will be called

export default AboutClass
