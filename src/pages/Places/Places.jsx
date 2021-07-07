import React from 'react';

import styles from './places.module.scss';

import Place from "./Place/Place";
import Button from "../../components/Button/Button";

import place1 from '../../assets/places/place1.png';
import place2 from '../../assets/places/place2.png';
import place3 from '../../assets/places/place3.png';

const Places = () => {
    const places = [
        {
            id: 0,
            name: 'Santorini, Oia Greece',
            price: 2000,
            reviews: 5000,
            rating: 5,
            img: place1
        },
        {
            id: 1,
            name: 'Santorini, Oia Greece',
            price: 1200,
            reviews: 900,
            rating: 3,
            img: place2
        },
        {
            id: 2,
            name: 'Santorini, Oia Greece',
            price: 1750,
            reviews: 2000,
            rating: 4,
            img: place3
        },
    ];

    return (
        <div className={styles.places}>
            <div className={styles.container}>
                <h2 className={styles.title}>Choose Your Destination</h2>
                <div className={styles['place__list']}>{places.map(place => <Place key={place.id} {...place}/>)}</div>
                <div className={styles['place__btn']}><Button title='View All Places'/></div>
            </div>
        </div>
    );
};

export default Places;