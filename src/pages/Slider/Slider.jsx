import React, {useState} from 'react';

import styles from './slider.module.scss';
import Choose from "./Choose/Choose";
import Slide from "./Slide/Slide";

import banner from '../../assets/slider/banner.png';

const Slider = () => {
    const slides = [
        {
            id: 0,
            title: 'It’s Time To Explore The World',
            btnTitle: 'Plan Your Trip',
            img: banner
        },
        {
            id: 1,
            title: 'Some Title 2',
            btnTitle: 'Plan Your Trip 2',
            img: banner
        },
        {
            id: 2,
            title: 'Some Title 3',
            btnTitle: 'Plan Your Trip 3',
            img: banner
        }
    ];

    const [currentSlideId, setCurrentSlideId] = useState(0);

    const handleChangeSlide = step => {
        if (currentSlideId + step > slides.length - 1) {
            setCurrentSlideId(0);
        } else if (currentSlideId + step < 0) {
            setCurrentSlideId(slides.length - 1);
        } else {
            setCurrentSlideId(current => current + step);
        }
    };

    return (
        <div className={styles.slider}>
            <div className={styles.container}>
                {
                    slides.map((slide, i) =>
                        i === currentSlideId ?
                            <Slide key={slide.id} title={slide.title} btnTitle={slide.btnTitle} image={slide.img}/>
                            : null
                    )
                }
                <div className={styles.footer}>
                    <div className={styles.changeSlide}>
                        <div
                            className={styles.arrow}
                            onClick={e => handleChangeSlide(-1)}
                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                                 style={{transform: 'rotate(180deg)'}}>
                                <path
                                    d="M1.89375 0.24375C1.74375 0.09375 1.5375 0 1.3125 0C1.0875 0 0.9 0.09375 0.73125 0.24375L0.24375 0.73125C-0.075 1.05 -0.075 1.575 0.24375 1.89375L5.85 7.5L0.24375 13.1062C0.09375 13.2562 0 13.4625 0 13.6875C0 13.9125 0.09375 14.1188 0.24375 14.2688L0.73125 14.7562C0.88125 14.9062 1.0875 15 1.3125 15C1.5375 15 1.74375 14.9062 1.89375 14.7562L8.56875 8.08125C8.71875 7.93125 8.8125 7.725 8.8125 7.5C8.8125 7.275 8.71875 7.06875 8.56875 6.91875L1.89375 0.24375Z"
                                    fill="#FF715B"
                                />
                            </svg>
                        </div>
                        <div
                            className={styles.arrow}
                            onClick={e => handleChangeSlide(1)}
                        >
                            <svg width="9" height="15" viewBox="0 0 9 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M1.89375 0.24375C1.74375 0.09375 1.5375 0 1.3125 0C1.0875 0 0.9 0.09375 0.73125 0.24375L0.24375 0.73125C-0.075 1.05 -0.075 1.575 0.24375 1.89375L5.85 7.5L0.24375 13.1062C0.09375 13.2562 0 13.4625 0 13.6875C0 13.9125 0.09375 14.1188 0.24375 14.2688L0.73125 14.7562C0.88125 14.9062 1.0875 15 1.3125 15C1.5375 15 1.74375 14.9062 1.89375 14.7562L8.56875 8.08125C8.71875 7.93125 8.8125 7.725 8.8125 7.5C8.8125 7.275 8.71875 7.06875 8.56875 6.91875L1.89375 0.24375Z"
                                    fill="#FF715B"/>
                            </svg>
                        </div>
                        <div className={styles.line}></div>
                        <p className={styles.number}>{currentSlideId + 1 < 10 ? `0${currentSlideId + 1}` : currentSlideId + 1}</p>
                    </div>
                    <Choose/>
                </div>
            </div>
        </div>
    );
};

export default Slider;