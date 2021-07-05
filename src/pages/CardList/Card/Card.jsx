import React from 'react';
import classNames from "classnames";

import styles from './card.module.scss';

const Card = ({title, text, icon, id, activeCardId, handleSetActiveCardId}) => {
    return (
        <div
            className={classNames(styles.card, activeCardId === id ? styles['card-active'] : null)}
            onClick={e => handleSetActiveCardId(id)}
        >
            <div className={styles.container}>
                <img className={styles.icon} src={icon}/>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
};

export default Card;