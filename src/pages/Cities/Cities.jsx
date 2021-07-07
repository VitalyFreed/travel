import React from 'react';

import styles from './cities.module.scss';

import CityCard from "./CityCard/CityCard";
import Button from "../../components/Button/Button";

import cubaImg from '../../assets/cities/cuba.png';
import parisImg from '../../assets/cities/paris.png';
import japanImg from '../../assets/cities/japan.png';

const Cities = () => {
    const cities = [
        {
            id: 0,
            name: 'Cuba City',
            img: cubaImg
        },
        {
            id: 1,
            name: 'Paris',
            img: parisImg
        },
        {
            id: 0,
            name: 'Japan',
            img: japanImg
        },
    ];

    return (
        <div className={styles.cities}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1 className={styles['info__title']}>
                        Top <span>Destinations</span> In The World
                    </h1>
                    <p className={styles['info__text']}>
                        It is a long established fact that a reader will be the
                        distracted by the readable content of a page when looking at its layout from it.
                    </p>
                    <Button title='Discover More'/>
                </div>
                <div className={styles['card__list']}>
                    {cities.map(city => <CityCard cityName={city.name} cityImg={city.img}/>)}
                    <div className={styles.rectangle}></div>
                </div>
            </div>
        </div>
    );
};

export default Cities;