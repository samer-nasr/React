import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIN :true
      }
    }
    
  render() {

    return (
        this.state.isLoggedIN ?
        <div>Welcome Samer</div> :
        <div>Welcome Guest</div>
    )

    // let message 
    // if (this.state.isLoggedIN) {
    //     message = "Welcome Samer"
    // }else{ 
    //     message = "Welcome Guest"
    // }

    // return (
    //     <div>
    //         {message}
    //     </div>
    // )

    // if(this.state.isLoggedIN){ 
    //     return( 
    //         <div>
    //         Welcome Samer
    //         </div>
    //     )
    // }else{ 
    //     return( 
    //         <div>
    //         Welcome Guest
    //         </div>
    //     )
    // }
    
  }
}

export default UserGreeting
