import User from './User'
import UserClass2 from './UserClass2'
import React from 'react'
import UserContext from '../utils/UserContext'
import '../css/User.css'

class AboutClass extends React.Component {

  //? how to use ContextAPI in class component
  
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
        <div>
          loggedIn user: 
          <UserContext.Consumer>
            {/* this is a component */}
            {({ loggedInUser }) => {
              return <h2>{loggedInUser}</h2>
            }}
          </UserContext.Consumer>
        </div>
        <UserClass2 name={'first'} location={'Varanasi'} />
      </div>
    )
  }
}
//! parent constructor, then parent render, child constructor, child render child componentDidMount, and then parent componentDidMount will be called

export default AboutClass

// useContext is recommended to use
// but in class component we can use userContext.Consumer