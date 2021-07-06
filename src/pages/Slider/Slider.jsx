import React from 'react';

import styles from './slider.module.scss';
import Choose from "./Choose/Choose";
import Slide from "./Slide/Slide";

import arrowIcon from '../../assets/slider/arrow.svg';

import banner1 from '../../assets/slider/banner.png';

const Slider = () => {
    const slides = [
        {
            title: 'It’s Time To Explore The World',
            btnTitle: 'Plan Your Trip',
            img: banner1
        }
    ]

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                <Slide title='It’s Time To Explore The World' btnTitle='Plan Your Trip' image={banner1}/>
                <div className={styles.footer}>
                    <div className={styles.changeSlide}>
                        <div className={styles.arrow}><img src={arrowIcon} style={{transform: 'rotate(180deg)'}}/></div>
                        <div className={styles.arrow}><img src={arrowIcon}/></div>
                        <div className={styles.line}></div>
                        <p className={styles.number}>03</p>
                    </div>
                    <Choose/>
                </div>
            </div>
        </div>
    );
};

export default Slider;