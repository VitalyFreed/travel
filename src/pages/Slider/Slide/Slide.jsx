import React from 'react';

import styles from './slide.module.scss';
import Button from "../../../components/Button/Button";

const Slide = ({title, btnTitle, image}) => {
    return (
        <div className={styles.slide}>
            <div className={styles.container}>
                <img className={styles['slide-img']} src={image}/>
                <div className={styles['title-block']}>
                    <h1 className={styles.title}>{title}</h1>
                    <Button title={btnTitle}/>
                </div>
            </div>
        </div>
    );
};

export default Slide;