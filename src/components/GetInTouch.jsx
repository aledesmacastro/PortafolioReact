import React, { Component } from 'react';
import Icon from './Icon';
import '../assets/styles/components/GetInTouch.scss';


class GetInTouch extends Component {

    render() {
        const {iconContact, message, link, data} = this.props;
        
        return (
            <div className="getInTouch">
                <div className="getInTouch__container">
                    <i><Icon svgIcon={iconContact} /></i>
                    <div className="getInTouch__contact">
                        <p className="getInTouch__message">{message}</p>
                        <a className="getInTouch__link" href={link}>{data}</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default GetInTouch;