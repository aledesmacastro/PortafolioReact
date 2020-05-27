import React, { Component } from "react";

class Icon extends Component {
  render() {
    const { svgIcon } = this.props;
    return (
      <svg role="img" viewBox={svgIcon.viewBox} className="icon">
        <use role="presentation" xlinkHref={svgIcon.url} />
      </svg>
    );
  }
}

export default Icon;