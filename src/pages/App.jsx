import React from 'react';

import styles from './app.module.scss';

import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import CardList from "./CardList/CardList";
import Cities from "./Cities/Cities";
import Lighthouse from "./Lighthouse/Lighthouse";
import Places from "./Places/Places";

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Slider/>
            <CardList/>
            <Cities/>
            <Lighthouse/>
            <Places/>
        </div>
    );
};

export default App;