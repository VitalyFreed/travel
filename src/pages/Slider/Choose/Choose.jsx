import React from 'react';
import classNames from "classnames";

import styles from './choose.module.scss';

import Button from "../../../components/Button/Button";
import DestinationSelect from "../Select/DestinationSelect";
import Calendar from "../Calendar/Calendar";

const Choose = () => {
    return (
        <div className={styles.choose}>
            <div className={styles.container}>
                <div className={classNames(styles.destinations, styles.block)}>
                    <h2 className={styles.title}>Destinations</h2>
                    <DestinationSelect/>
                </div>
                <div className={classNames(styles.calendar, styles.block)}>
                    <h2 className={styles.title}>Check in</h2>
                    <Calendar/>
                </div>
                <div className={classNames(styles.price, styles.block)}>
                    <h2 className={styles.title}>Price Range</h2>
                    <span>Price range</span>
                </div>
                <Button title='Discover Now'/>
            </div>
        </div>
    );
};

export default Choose;