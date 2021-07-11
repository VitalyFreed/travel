import React from 'react';

import styles from './lighthouse.module.scss';

import lighthouseImg from '../../assets/lighthouse/lighthouse.png';
import circlesImg from '../../assets/lighthouse/circles.png';
import mapImg from '../../assets/lighthouse/map.svg';
import headphonesImg from '../../assets/lighthouse/headphones.svg';
import personImg from '../../assets/lighthouse/person.svg';

import Info from "./Info/Info";

const Lighthouse = () => {
    const info = [
        {
            id: 0,
            title: 'Best Travel Guide Always For Your Services',
            text: 'Travel has helped us to understandsa the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life',
            img: {
                src: personImg,
                background: '#FF715B'
            },
        },
        {
            id: 1,
            title: 'World Class Services Provide For You',
            text: null,
            img: {
                src: mapImg,
                background: '#EDFAE3'
            },
        },
        {
            id: 2,
            title: '24/7 Strong Customer Support',
            text: null,
            img: {
                src: headphonesImg,
                background: '#FFF8E3'
            }
        },
    ];

    return (
        <div className={styles.lighthouse} id='offer'>
            <div className={styles.container}>
                <div className={styles['lighthouse__img-block']}>
                    <img src={lighthouseImg} alt="lighthouse" className={styles['lighthouse-img']}/>
                    <img src={circlesImg} alt="circles" className={styles['circles-img']}/>
                </div>
                <div className={styles.info}>
                    <h2 className={styles['info__title']}>We Offering In Total 793 Tours Out The World</h2>
                    {info.map(item => <Info key={item.id} title={item.title} img={item.img} text={item.text}/>)}
                </div>
            </div>
        </div>
    );
};

export default Lighthouse;