import React, { Component } from 'react'

export default class Explorer extends Component {

    constructor(props){
        super();
        this.state = {count: 0, name: "k"};
    }
    decrement = () => {
        this.setState({count: this.state.count - 1})
    }
    reset = () => {
        this.setState({count: this.state.count = 0})
    }
    increment = () => {
        this.setState({count: this.state.count + 1})
    }
    componentDidMount(){
        console.log("componentDidMounting")
    }
    componentDidUpdate(){
        console.log("componentDidUpdating")
    }
    componentWillUnmount(){
        console.log("componentWillUnmount")
    }

  render() {
    return (
      <div className='divM'>
        <h1>ClassCounter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
        <button onClick={this.increment}>+</button>
      </div>
    )
  }
}