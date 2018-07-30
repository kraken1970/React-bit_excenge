//дикая девочка

import React, { Component } from "react";
import "./Ticker.css";

export default class Ticker extends Component {
  state = {
    value: 0
  };

  updateExchangeRate = () => {
    return fetch(`http://coins.demo.javascript.ninja/ticker/${this.props.pair}`)
      .then(r => r.json())
      .then(res => {
        this.setState({ value: res.last });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentWillReceiveProps(nextProp) {
    if (nextProp.isActive && !this.props.isActive) {
      this.updateExchangeRate();
      this.interval = setInterval(this.updateExchangeRate, 10000);
    } else if (!nextProp.isActive && this.props.isActive) {
      clearInterval(this.interval);
      this.setState({
        value: 0
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { pair } = this.props;
    return (
      <div className="ticker">
        <p>{pair.toUpperCase().replace("_", " to ")}</p>
        <p>{this.state.value.toFixed(2)}</p>
      </div>
    );
  }
}
