import React, { Component } from 'react'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement = () => {
    this.setState((st) => {
      return { count: st.count + 1 }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increase</button>
      </div>
    )
  }
}

export default Counter
