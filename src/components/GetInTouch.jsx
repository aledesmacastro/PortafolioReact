import React, { Component } from 'react';
import Icon from './Icon';
import '../assets/styles/components/GetInTouch.scss';
import PathImg from '../assets/statics';
import iconPhone from 'incoming-call.svg';
import iconMail from 'email.svg';


class GetInTouch extends Component {

    render() {
        const {phone, email} = this.props;
        
        return (
            <div className="getInTouch">
                <h3 className="getInTouch__title">Get In Touch</h3>
                <div className="getInTouch__container">
                    <i><Icon svgIcon={`${PathImg}/${iconPhone}`} /></i>
                    <div className="getInTouch__contact">
                        <p>Call me now</p>
                        <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                </div>
                <div className="getInTouch__container">
                    <i><Icon svgIcon={`${PathImg}/${iconMail}`} /></i>
                    <div className="getInTouch__contact">
                        <p>Send me Mail</p>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default GetInTouch;