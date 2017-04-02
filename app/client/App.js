
import React, { Component } from 'react';
import Counter from './Counter'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('constructor');
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
    console.log('componentDidMount');
  }

  tick() {
    this.setState({ counter: this.state.counter + 2 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div>
        <h3 style={{color: 'blue'}}>Main Counter: {this.state.counter}</h3>
        <Counter />
      </div>
    );
  }
}