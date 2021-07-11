import React from 'react';

import styles from './download.module.scss';

import googlePlay from '../../assets/download/googlePlay.svg';
import appleStore from '../../assets/download/appleStore.svg';

const Download = () => {
    return (
        <div className={styles.download}>
            <div className={styles.container}>
                <h2 className={styles.title}>Download Now Travel Community Apps</h2>
                <div className={styles.applications}>
                    <a href="#" className={styles.googlePlay}>
                        <img src={googlePlay} alt="google play img"/>
                    </a>
                    <a href="#" className={styles.appStore}>
                        <img src={appleStore} alt="apple store img"/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Download;