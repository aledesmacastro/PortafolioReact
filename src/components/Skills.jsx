import React, { Component } from "react";
import "../assets/styles/components/Skills.scss";

class Skills extends Component {
    render() {
        const { skill, percent } = this.props;
        return (
            <div className='skill'>
                <div className='row'>
                    <div className='skill__name'>
                        {skill != undefined && skill.trim().length > 0 ? (
                            <p>{skill}</p>
                        ) : (
                            <p>Put a name to skill</p>
                        )}
                    </div>
                    <div className='skill__value'>
                        {percent != undefined && percent.trim().length > 0 ? (
                            <p>{percent}%</p>
                        ) : (
                            <p>Put percent</p>
                        )}
                    </div>
                </div>
                <div className='row'>
                    <div className='skill__progressive-bar'></div>
                </div>
            </div>
        );
    }
}

export default Skills;
