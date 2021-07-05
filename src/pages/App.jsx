import React from 'react';

import styles from './app.module.scss';

import Header from "./Header/Header";
import Slider from "./Slider/Slider";

const App = () => {
    return (
        <div className={styles.app}>
            <Header/>
            <Slider/>
            <Cards/>
        </div>
    );
};

export default App;