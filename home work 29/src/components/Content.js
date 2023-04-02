import React, { Component } from "react";

class Content extends Component {
  render() {
    return (
      <div className="content">\
        <p>Content</p>
        {this.props.children}
      </div>
    );
  }
}

export default Content;
