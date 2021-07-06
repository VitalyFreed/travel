import React from 'react';

import styles from './app.module.scss';

import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import CardList from "./CardList/CardList";
import Cities from "./Cities/Cities";

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Slider/>
            <CardList/>
            <Cities/>
        </div>
    );
};

export default App;