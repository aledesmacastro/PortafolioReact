import React from "react";
// IMPORT SCSS
import "../assets/styles/Reset.scss";
import "../assets/styles/layout.scss";
import "../assets/styles/App.scss";
// IMPORT COMPONENTS
import Header from "../components/Header";
import MainInfo from "../components/MainInfo";
import GetInTouch from "../components/GetInTouch";

const App = () => (
    <div className='App'>
        <div className='container'>
            <Header />
            <hr/>
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
            <GetInTouch phone='3164976830' email='aaaa@eee.com' />
        </div>
    </div>
);

export default App;
