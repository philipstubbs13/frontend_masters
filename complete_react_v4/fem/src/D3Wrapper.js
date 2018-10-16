import React from "react";

class LibWrapper extends React.Component {
  componentDidMount() {
    lib.init(this.el);
  }
  componentWillUnmount() {
    lib.cleanUp(this.el);
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <div ref={el => (this.el = el)} />;
  }
}

export default LibWrapper;
