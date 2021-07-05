import React, {useState} from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames";

import styles from './destinationSelect.module.scss';

import arrow from '../../../assets/slider/arrow.svg';

import {getCountries} from "../../../reducers/countryReducer";

const DestinationSelect = ({activeCountry, setActiveCounty}) => {
    const [isVisible, setVisible] = useState(false);

    const data = useSelector(getCountries);

    const showCountryList = e => {
        setVisible(v => !v);
    };

    const handleSetActiveItem = id => {
        setActiveCounty(id);
    };

    return (
        <div className={styles['destinationSelect']}>
            <div className={styles.container}>
                <div className={styles['active__item']} onClick={showCountryList}>
                    <span
                        className={styles['active__item-text']}>{data.find(item => item.id === activeCountry).name}</span>
                    <img className={styles.arrow} src={arrow}/>
                </div>
                <ul className={styles['country__list']} style={{display: isVisible ? 'block' : 'none'}}>
                    {data.map(item => <li
                        key={item.id}
                        className={classNames(styles['country__item'], activeCountry === item.id ? styles['country__item-active'] : null)}
                        onClick={e => handleSetActiveItem(item.id)}
                    >{item.name}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default DestinationSelect;