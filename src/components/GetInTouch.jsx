import React, { Component } from 'react';
import Icon from './Icon';
import '../assets/styles/components/GetInTouch.scss';
import iconPhone from '../assets/statics/incoming-call.svg';
import iconMail from '../assets/statics/email.svg';
import iconWhatsapp from '../assets/statics/whatsapp.svg';


class GetInTouch extends Component {

    render() {
        const {phone, email, greet} = this.props;
        
        return (
            <div className="getInTouch">
                <h3 className="getInTouch__title">Get In Touch</h3>
                <div className="getInTouch__container">
                    <i><Icon svgIcon={iconPhone} /></i>
                    <div className="getInTouch__contact">
                        <p>Call me now</p>
                        <a href={`tel:+57${phone}`}>{phone}</a>
                    </div>
                </div>
                <div className="getInTouch__container">
                    <i><Icon svgIcon={iconMail} /></i>
                    <div className="getInTouch__contact">
                        <p>Send me mail</p>
                        <a href={`mailto:${email}`}>{email}</a>
                    </div>
                </div>
                <div className="getInTouch__container">
                    <i><Icon svgIcon={iconWhatsapp} /></i>
                    <div className="getInTouch__contact">
                        <p>Send a message</p>
                        <a href={`https://api.whatsapp.com/send?phone=57${phone}&text=${greet}`} target="_blank">{greet}</a>
                    </div>
                </div>
            </div>
        )
    }
};

export default GetInTouch;