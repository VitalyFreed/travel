import React from 'react';
import {useSelector} from "react-redux";

import styles from './price.module.scss';

import dollarIcon from '../../../assets/slider/dollar.svg';

import {getPriceForCountry} from "../../../reducers/countryReducer";

const Price = ({activeCountry, month}) => {
    console.log(month)
    const price = useSelector(state => getPriceForCountry(state, activeCountry, month));

    return (
        <div className={styles.price}>
            <div className={styles.container}>
                <span className={styles['price__text']}>{price}</span>
                <img src={dollarIcon}/>
            </div>
        </div>
    );
};

export default Price;