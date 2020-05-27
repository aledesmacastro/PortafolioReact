import React from "react";
import "../assets/styles/components/MainInfo.scss";
import photo from "../assets/statics/photo.jpg";
import iconFace from "../assets/statics/facebook.svg";
import iconIn from "../assets/statics/linkedin.svg";
import Icon from "./Icon";

const MainInfo = () => (
    <div className='mainInfo'>
        <div className='blockInfo'>
            <div className='blockInfo__occupation'>Front End</div>
            <div className='blockInfo__Names'>
                <h1>
                    Anibal <span className='lastName'>Ledesma</span>
                </h1>
            </div>
            <div className='blockInfo__description'>
                <h2>
                    Hábil para trabajar en ambientes desafiantes y competitivos.
                    Persona responsable y adaptable, rápida absorción de las
                    nuevas tecnologías. Asociación y trabajo en equipo.
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
                            <a href='' className='list-icons__link'>
                                <Icon svgIcon={iconFace} />
                                Facebook
                            </a>
                        </li>
                        <li>
                            <a href='' className='list-icons__link'>
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
                    src={photo}
                    alt='this is my main photo'
                    className='blockImage__image'
                />
            </div>
        </div>
    </div>
);

export default MainInfo;
