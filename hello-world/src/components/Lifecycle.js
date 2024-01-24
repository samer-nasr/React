import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Samer'
      }
      console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props , state){ 
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){ 
        console.log('LifecycleA componentDidMount')
    }

    shouldComponenetUpdate(){ 
        console.log('LifecycleA shouldComponenetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps , prevState){ 
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){ 
        console.log('LifecycleA componentDidUpdate')
    }

    handleClick = () => { 
        this.setState({ 
            name: 'Codevolution'
        })
    }
    
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={() => this.handleClick()}>Change</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default Lifecycle
