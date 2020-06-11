import React, { Component } from "react";
import "../assets/styles/components/Skills.scss";

class Skills extends Component {

    render() {
        const { skill, percent} = this.props;

        return (
            <div className='skill'>
                <div className='skill__row'>
                    <h3 className='skill__name'>
                        {skill != undefined && skill.trim().length > 0 ? (
                            skill
                        ) : (
                            <span>Put a name to skill</span>
                        )}
                    </h3>
                    <p className='skill__value'>
                        {percent != undefined && percent.trim().length > 0 ? (
                            <span>{percent}%</span>
                        ) : (
                            <span>Put percent</span>
                        )}
                    </p>
                </div>
                <div className='skill__row'>
                    <progress id="skill__progress" max="100" value={percent} className='skill__progressive-bar'></progress>
                </div>
            </div>
        );
    }
}

export default Skills;
