import React, {useState} from 'react';
import classNames from "classnames";

import arrow from '../../../assets/slider/arrow.svg';

import styles from './destinationSelect.module.scss';

const DestinationSelect = () => {
    const [activeItem, setActiveItem] = useState(0);
    const [isVisible, setVisible] = useState(false);

    const data = [
        {
            id: 0,
            name: 'Arab Egypt',
            calendar: [
                {
                    id: 1,
                    name: 'January',
                    price: 500
                },
                {
                    id: 2,
                    name: 'February',
                    price: 1500
                },
                {
                    id: 3,
                    name: 'March',
                    price: 3000
                },
                {
                    id: 4,
                    name: 'April',
                    price: 500
                },
                {
                    id: 5,
                    name: 'May',
                    price: 1200
                },
                {
                    id: 6,
                    name: 'June',
                    price: 800
                },
                {
                    id: 7,
                    name: 'July',
                    price: 10000
                },
                {
                    id: 8,
                    name: 'August',
                    price: 3500
                },
                {
                    id: 9,
                    name: 'September',
                    price: 4000
                },
                {
                    id: 10,
                    name: 'October',
                    price: 7100
                },
                {
                    id: 11,
                    name: 'November',
                    price: 6400
                },
                {
                    id: 12,
                    name: 'December',
                    price: 3950
                }
            ]
        },
        {
            id: 1,
            name: 'Peru',
            calendar: [
                {
                    id: 1,
                    name: 'January',
                    price: 2500
                },
                {
                    id: 2,
                    name: 'February',
                    price: 1500
                },
                {
                    id: 3,
                    name: 'March',
                    price: 3000
                },
                {
                    id: 4,
                    name: 'April',
                    price: 500
                },
                {
                    id: 5,
                    name: 'May',
                    price: 1200
                },
                {
                    id: 6,
                    name: 'June',
                    price: 800
                },
                {
                    id: 7,
                    name: 'July',
                    price: 10000
                },
                {
                    id: 8,
                    name: 'August',
                    price: 3500
                },
                {
                    id: 9,
                    name: 'September',
                    price: 4000
                },
                {
                    id: 10,
                    name: 'October',
                    price: 7100
                },
                {
                    id: 11,
                    name: 'November',
                    price: 6400
                },
                {
                    id: 12,
                    name: 'December',
                    price: 3950
                }
            ]
        },
        {
            id: 2,
            name: 'Israil',
            calendar: [
                {
                    id: 1,
                    name: 'January',
                    price: 9350
                },
                {
                    id: 2,
                    name: 'February',
                    price: 1500
                },
                {
                    id: 3,
                    name: 'March',
                    price: 3000
                },
                {
                    id: 4,
                    name: 'April',
                    price: 500
                },
                {
                    id: 5,
                    name: 'May',
                    price: 1200
                },
                {
                    id: 6,
                    name: 'June',
                    price: 800
                },
                {
                    id: 7,
                    name: 'July',
                    price: 10000
                },
                {
                    id: 8,
                    name: 'August',
                    price: 3500
                },
                {
                    id: 9,
                    name: 'September',
                    price: 4000
                },
                {
                    id: 10,
                    name: 'October',
                    price: 7100
                },
                {
                    id: 11,
                    name: 'November',
                    price: 6400
                },
                {
                    id: 12,
                    name: 'December',
                    price: 3950
                }
            ]
        }
    ];

    const showCountryList = e => {
        setVisible(v => !v);
    };

    const handleSetActiveItem = id => {
        setActiveItem(id);
    };

    return (
        <div className={styles['destinationSelect']}>
            <div className={styles.container}>
                <div className={styles['active__item']} onClick={showCountryList}>
                    <span
                        className={styles['active__item-text']}>{data.find(item => item.id === activeItem).name}</span>
                    <img className={styles.arrow} src={arrow}/>
                </div>
                <ul className={styles['country__list']} style={{display: isVisible ? 'block' : 'none'}}>
                    {data.map(item => <li
                        key={item.id}
                        className={classNames(styles['country__item'], activeItem === item.id ? styles['country__item-active'] : null)}
                        onClick={e => handleSetActiveItem(item.id)}
                    >{item.name}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default DestinationSelect;