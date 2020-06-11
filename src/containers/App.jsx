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
import Skills from "../components/Skills";
import Company from "../components/Company";
// import Counter from "../components/Counter";
// IMPORT IMAGES
import iconIdea from "../assets/statics/idea.svg";
import iconCreativity from "../assets/statics/creativity.svg";
import iconInnovation from "../assets/statics/innovation.svg";
import iconPhone from '../assets/statics/incoming-call.svg';
import iconMail from '../assets/statics/email.svg';
import iconWhatsApp from '../assets/statics/whatsapp.svg';
import iconChip from '../assets/statics/chip.svg';
import iconRobot from '../assets/statics/robot.svg';
import logoId2 from '../assets/statics/id2.png';
import logoMicroSites from '../assets/statics/micrositios.png';
import logoEnterdev from '../assets/statics/enterdev.png';
const App = () => (
    <div className='App'>
        <section className='container'>
            <div className="container__fluid">
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
        </section>
        <section className='container odd'>
            <div className="container__fluid">
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
        </section>
        <section className="container">
            <div className="container__fluid">
            <h3 className='title-section'>Skills</h3>
                <p className='subtitle-section'>Every day is a new change</p>
                <Skills skill="Html" percent="98"/>
                <Skills skill="Css" percent="95"/>
                <Skills skill="Sass" percent="85"/>
                <Skills skill="Git & Github" percent="85"/>
                <Skills skill="JavaScript" percent="75"/>
                <Skills skill="React" percent="15"/>
                <Skills skill="Php" percent="20"/>
                <Skills skill="Wordpress" percent="50"/>
                <Skills skill="Agility RPA" percent="85"/>
                {/* <Counter /> */}
            </div>
        </section>
        <section className="container odd">
            <div className="container__fluid">
                <div className="companies flex-row-center flex-justify-stretch">
                    <Company logoCompany={logoId2} alt="Logo company id2" />
                    <Company logoCompany={logoMicroSites} alt="Logo company Micrositios" />
                    <Company logoCompany={logoEnterdev} alt="Logo company Enterdev" />
                </div>
            </div>
        </section>
        <section className='container'>
            <div className="container__fluid">
                <h3 className="title-section">Just say Hello</h3>
                <p className="subtitle-section">Get In Touch</p>
                {/* <GetInTouch
                    iconContact={iconWhatsApp}
                    message='Send a message'
                    link='https://api.whatsapp.com/send?phone=573164976830&text=Hello!!'
                    data='Hello world!'
                /> */}
                <GetInTouch
                    iconContact={iconMail}
                    message='Send me mail'
                    link='mailto:aledesmadev@gmail.com'
                    data='aledesmadev@gmail.com'
                />
                {/* <GetInTouch
                    iconContact={iconPhone}
                    message='Call me now'
                    link='tel:+573164976830'
                    data='3164976830'
                /> */}
                <hr />
                <p className='copyright'>Copyright @aledesmadev - 2020</p>
            </div>
        </section>
    </div>
);

export default App;