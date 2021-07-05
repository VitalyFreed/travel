import React from 'react';

import styles from './slider.module.scss';
import Button from "../../components/Button/Button";
import Choose from "./Choose/Choose";

const Slider = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <div className={styles['title-block']}>
                    <h1 className={styles.title}>It’s Time To Explore The World</h1>
                    <Button title='Plan Your Trip'/>
                </div>
                <Choose/>
            </div>
        </div>
    );
};

export default Slider;