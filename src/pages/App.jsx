import React from 'react';

import styles from './app.module.scss';

import Header from "./Header/Header";
import Slider from "./Slider/Slider";
import CardList from "./CardList/CardList";

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Slider/>
            <CardList/>
        </div>
    );
};

export default App;