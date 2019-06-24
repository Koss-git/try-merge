import React, { Component } from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0 };

    // Привязка необходима, чтобы сделать this доступным в коллбэке
    this.onIncrease = this.onIncrease.bind(this);
    this.onDecrease = this.onDecrease.bind(this);
  }

  onIncrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature + 1
    }))
  }

  onDecrease() {
    this.setState(prevState => ({
      temperature: prevState.temperature - 1
    }))
  }

  render() {
    return (
      <p>
        <h2>Текущая температура: {this.state.temperature}</h2>
        <button onClick={this.onDecrease}>-</button>
        <button onClick={this.onIncrease}>+</button>
      </p>
    );
  }

}
