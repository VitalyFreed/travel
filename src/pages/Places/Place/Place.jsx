import React from 'react';

import styles from './place.module.scss';

import Stars from "../Stars/Stars";

const Place = ({id, name, price, reviews, rating, img}) => {
    return (
        <div className={styles.place} style={{transform: id === 1 ? 'translateY(-25%)' : null}}>
            <div className={styles.container}>
                <div className={styles['place-img']}><img src={img} alt={name}/></div>
                <div className={styles.footer}>
                    <div className={styles['footer__container']}>
                        <div className={styles.info}>
                            <h3 className={styles['info__title']}>{name}</h3>
                            <div className={styles['info__stat']}>
                                <span className={styles['info__stat-price']}>${price}</span>
                                <div className={styles['info__stat-rating']}>
                                    <Stars rating={rating}/>
                                </div>
                                <span className={styles['info__stat-reviews']}>{reviews / 1000}k Reviews</span>
                            </div>
                        </div>
                        <button className={styles['footer__btn']}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;