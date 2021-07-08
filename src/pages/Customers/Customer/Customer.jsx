import React from 'react';

import styles from './customer.module.scss';

import CustomerAvatar from "../CustomerAvatar/CustomerAvatar";

const Customer = ({name, speciality, text, avatar, inner}) => {
    return (
        <div className={styles.customer}>
            <div className={styles.container}>
                <div className={styles['info__container']}>
                    <CustomerAvatar avatar={avatar} inner={inner}/>
                    <div className={styles.info}>
                        <span className={styles['info__name']}>{name}</span>
                        <span className={styles['info__speciality']}>{speciality}</span>
                    </div>
                </div>
                <div className={styles.text}>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
};

export default Customer;