
import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    console.log('Counter - constructor');
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 500);
    console.log('Counter - componentDidMount');
  }

  tick() {
    this.setState({ counter: this.state.counter + 5 });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('Counter - componentWillUnmount');
  }

  render() {
    return <div>Inner counters: {this.state.counter}</div>;
  }
}