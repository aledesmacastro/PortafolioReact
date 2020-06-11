import React, { Component } from "react";
import "../assets/styles/components/Company.scss";

class Company extends Component {
    render(){
        const { logoCompany, alt } = this.props
        return (
            <div className="company">
                <img src={logoCompany} alt={alt}/>
            </div>
        )
    }
}
export default Company;