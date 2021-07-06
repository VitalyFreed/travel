import React from 'react';

import styles from './cityCard.module.scss';

const CityCard = ({cityName, cityImg}) => {
    return (
        <div className={styles.cityCard}>
            <div className={styles.container}>
                <div className={styles['city-img']}><img src={cityImg}/></div>
                <h2 className={styles.cityName}>{cityName}</h2>
            </div>
        </div>
    );
};

export default CityCard;