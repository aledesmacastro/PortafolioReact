import React, { Component } from "react";
import "../assets/styles/components/Service.scss";
import Icon from "./Icon";


class Service extends Component {
    render() {
        const {iconService, title, description} = this.props;
        return (
            <div className="service">
                <i className="service__icon"><Icon svgIcon={iconService}/></i>
                <h1 className="service__title">{title}</h1>
                <p className="service__description">{description}</p>
            </div>
        )
    }
}
export default Service;