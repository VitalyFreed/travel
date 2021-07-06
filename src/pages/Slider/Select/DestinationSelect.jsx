import React, {useState, useEffect} from 'react';
import {Transition} from "react-transition-group";
import {useSelector} from "react-redux";
import classNames from "classnames";

import styles from './destinationSelect.module.scss';

import arrow from '../../../assets/slider/arrow.svg';

import {getCountries} from "../../../reducers/countryReducer";

const DestinationSelect = ({activeCountry, setActiveCounty}) => {
    const [isVisible, setVisible] = useState(false);

    const data = useSelector(getCountries);

    useEffect(() => {
        document.addEventListener('click', e => {
            if (e.target.closest('div[data-selectattr]') === null) setVisible(false);
        });
    }, []);

    const showCountryList = e => {
        setVisible(v => !v);
    };

    const handleSetActiveItem = id => {
        setActiveCounty(id);
    };

    const transitionStyles = {
        entering: {display: 'block', opacity: 0, transform: 'translateY(-30px)'},
        entered: {display: 'block', opacity: 1, transform: 'translateY(10px)'},
        exiting: {display: 'block', opacity: 0, transform: 'translateY(-30px)'},
        exited: {display: 'none', opacity: 0}
    };

    return (
        <div className={styles['destinationSelect']}>
            <div className={styles.container}>
                <div data-selectattr='true' className={styles['active__item']} onClick={showCountryList}>
                    <span
                        className={styles['active__item-text']}>{data.find(item => item.id === activeCountry).name}</span>
                    <img className={styles.arrow} src={arrow}
                         style={{transform: isVisible ? 'rotate(-90deg)' : 'rotate(90deg)'}}/>
                </div>
                <Transition in={isVisible} timeout={{
                    appear: 0,
                    enter: 0,
                    exit: 300
                }}>
                    {
                        state => (
                            <ul
                                className={styles['country__list']}
                                style={{...transitionStyles[state], transition: `all 300ms ease-out`}}
                            >
                                {data.map(item => <li
                                    key={item.id}
                                    className={classNames(styles['country__item'], activeCountry === item.id ? styles['country__item-active'] : null)}
                                    onClick={e => handleSetActiveItem(item.id)}
                                >{item.name}</li>)}
                            </ul>
                        )
                    }
                </Transition>
            </div>
        </div>
    );
};

export default DestinationSelect;