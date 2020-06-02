import React from "react";
// IMPORT SCSS
import "../assets/styles/Reset.scss";
import "../assets/styles/layout.scss";
import "../assets/styles/App.scss";
// IMPORT COMPONENTS
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import GetInTouch from "../components/GetInTouch";
import Service from "../components/Service";
// IMPORT IMAGES
import iconIdea from "../assets/statics/idea.svg";
import iconCreativity from "../assets/statics/creativity.svg";
import iconInnovation from "../assets/statics/innovation.svg";
import iconPhone from '../assets/statics/incoming-call.svg';
import iconMail from '../assets/statics/email.svg';
import iconWhatsapp from '../assets/statics/whatsapp.svg';
import iconChip from '../assets/statics/chip.svg';
import iconRobot from '../assets/statics/robot.svg';

const App = () => (
    <div className='App'>
        <div className='container'>
            <Header />
            <hr />
            <MainInfo
                Name='Anibal'
                LastName='Ledesma'
                Occupation='Front End'
                FaceUrl='https://www.facebook.com/aledesmadev/'
                InUrl='https://www.linkedin.com/in/afledesma/'
                Photo='https://scontent.fbog2-3.fna.fbcdn.net/v/t1.0-9/33516574_445271872580085_3127037534983421952_n.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeGRZY0cNwDsXgtB7lSo_FqcolcJCI2ICFmiVwkIjYgIWW4KOekpR5_x_qbSeewZric&_nc_ohc=BPJsrpbE-aMAX8zeU7e&_nc_ht=scontent.fbog2-3.fna&oh=72f878f9bac672e042050a546910274d&oe=5EF5932B'
            />
        </div>
        <div className='container odd'>
            <h3 className='title-section'>Services</h3>
            <p className='subtitle-section'>What I do?</p>
            <Service
                iconService={iconIdea}
                title='Front end'
                description='orem lorem lorem'
            />
            <Service
                iconService={iconInnovation}
                title='Web development'
                description='orem lorem lorem'
            />
            <Service
                iconService={iconCreativity}
                title='Consulting'
                description='orem lorem lorem'
            />
            <Service
                iconService={iconChip}
                title='RPA'
                description='orem lorem lorem'
            />
        </div>
        <div className='container'>
            <h3 className="subtitle-section">Get In Touch</h3>
            <GetInTouch
                iconContact={iconPhone}
                message='Call me now'
                link='tel:+573164976830'
                data='3164976830'
            />
            <GetInTouch
                iconContact={iconMail}
                message='Send me mail'
                link='mailto:aledesmadev@gmail.com'
                data='aledesmadev@gmail.com'
            />
            <GetInTouch
                iconContact={iconWhatsapp}
                message='Send a message'
                link='https://api.whatsapp.com/send?phone=573164976830&text=Hello!!'
                data='Hello world!'
            />
        </div>
        <div className='container'>
            <hr />
            <p className='copyright'>Copyright @aledesmadev - 2020</p>
        </div>
    </div>
);

export default App;
