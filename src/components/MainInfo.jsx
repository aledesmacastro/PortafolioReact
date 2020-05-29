import React, { Component } from "react";
import "../assets/styles/components/MainInfo.scss";
import iconFace from "../assets/statics/facebook.svg";
import iconIn from "../assets/statics/linkedin.svg";
import Icon from "./Icon";

class MainInfo extends Component {
    render() {
        const { Name, LastName, Occupation, FaceUrl, InUrl, Photo} = this.props;
        return (
            <div className='mainInfo'>
                <div className='blockInfo'>
                    <div className='blockInfo__occupation'>{Occupation}</div>
                    <div className='blockInfo__Names'>
                        <h1>
                            {Name}
                            <span className='lastName'>{LastName}</span>
                        </h1>
                    </div>
                    <div className='blockInfo__description'>
                        <h2>
                            Hábil para trabajar en ambientes desafiantes y
                            competitivos. Persona responsable y adaptable,
                            rápida absorción de las nuevas tecnologías.
                            Asociación y trabajo en equipo.
                        </h2>
                    </div>
                    <div className='blockInfo__buttons'>
                        <div className='btn btnPrimary'>
                            <a href=''>Biography</a>
                        </div>
                        <div className='btn btnPrimary'>
                            <a href=''>Hire me</a>
                        </div>
                    </div>
                    <div className='blockInfo__socials'>
                        <div className='container__icons'>
                            <ul className='list-icons'>
                                <li>
                                    <a
                                        href={FaceUrl}
                                        className='list-icons__link'
                                        target='_blank'>
                                        <Icon svgIcon={iconFace} />
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={InUrl}
                                        className='list-icons__link'
                                        target='_blank'>
                                        <Icon svgIcon={iconIn} />
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='blockImage'>
                    <div className='blockImage__container'>
                        <img
                            src={Photo}
                            alt='this is my main photo'
                            className='blockImage__image'
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainInfo;
