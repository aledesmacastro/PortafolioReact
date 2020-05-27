import React from 'react';
// IMPORT SCSS
import '../assets/styles/Reset.scss';
import '../assets/styles/layout.scss';
import '../assets/styles/App.scss';
// IMPORT COMPONENTS
import Header from '../components/Header';
import MainInfo from '../components/MainInfo';

const App = () => (
    <div className="App">
        <div className="container">
            <Header />
        </div>
        <div className="container">
            <MainInfo />
        </div>
    </div>
);

export default App;