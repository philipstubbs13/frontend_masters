// taken from React docs
import React from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.el = document.createElement("div");
    this.modalRoot = document.getElementById("modal");
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
