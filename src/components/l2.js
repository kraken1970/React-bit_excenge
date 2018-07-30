import React, { Component } from "react";

class L2 extends Component {
  render() {
    const Avatar = props => <img src={props.src} />;
    const Header = <header />;
    return (
      <header>
        <img src="https://picsum.photos/150/150/?random" />
        Vasya Pupkin
      </header>
    );
  }
}

export default L2;
