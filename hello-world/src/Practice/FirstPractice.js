
import './style.css';
import React, { Component } from 'react'

class FirstPractice extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello From React',
         count   : 0,
         isloged : false
      }
    }

    login(){ 
        this.setState({ 
            message : `Hello ${this.props.name} From React`,
            isloged : true
        })
    }

    logout(){ 
        this.setState({ 
            message : 'Hello From React',
            count   : 0,
            isloged : false
        })
    }

    increment(){ 
        this.setState({ 
            count : this.state.count +1
        })
    }
    
  render() {
    const users = [
        {
            id : 1,
            name : 'Samer',
            age : 23
        },

        {
            id : 2,
            name : 'Tony',
            age : 25
        }
    ]
    const usersList = users.map(user => <h2 key={user.id}>Im {user.name} I am {user.age} Years old</h2>)
    if(this.state.isloged){ 
        return (
            <div>
              <h1 className='myh1'>{this.state.message}</h1>
              <button onClick={() => this.login()}>Sign in</button>
              <h2>{this.state.count}</h2>
              <button onClick={() => this.increment()}>increment</button>
              {usersList}
              <button onClick={() => this.logout()}>Log Out</button>
            </div>
          )
    }else{ 
        return (
            <div>
              <h1 className='myh1'>{this.state.message}</h1>
              <button onClick={() => this.login()}>Sign in</button>
            </div>
          )
    }

    }
    
}


export default FirstPractice

