import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import styles from './footer.module.scss';

import logoImg from '../../assets/header/logo.svg';
import logoTextImg from '../../assets/header/logo-text.png';

import Button from "../../components/Button/Button";

const Footer = () => {
    const [letter, changeLetter] = useState('');

    const handleChangeLetter = e => {
        changeLetter(e.target.value);
    };

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.communication}>
                        <div className={styles.logo}>
                            <img className={styles['logo-img']} src={logoImg} alt="logo"/>
                            <img className={styles['logo-text']} src={logoTextImg} alt="logo-text"/>
                        </div>
                        <p className={styles['communication__text']}>
                            You can dream, create, design, and buildsa the most wonderful place.
                        </p>
                        <span className={styles['communication__number']}>+0123 456 987, +0123 456 987</span>
                        <span className={styles['communication__email']}>yourmailaddress@gmail.com</span>
                        <span className={styles['communication__site']}>www.yourwebsitename.com</span>
                    </div>
                    <div className={styles.quickLinks}>
                        <h2 className={styles.['links__title']}>Quick Links</h2>
                        <ul className={styles.links}>
                            <li className={styles.link}><Link to='/about'>About us</Link></li>
                            <li className={styles.link}><Link to='/destinations'>Destinations</Link></li>
                            <li className={styles.link}><Link to='/latest-blog'>Latest Blog</Link></li>
                            <li className={styles.link}><Link to='/our-team'>Our Team</Link></li>
                            <li className={styles.link}><Link to='/contact'>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.support}>
                        <h2 className={styles['links__title']}>Support</h2>
                        <ul className={styles.links}>
                            <li className={styles.link}><Link to='/customer-support'>Customer Support</Link></li>
                            <li className={styles.link}><Link to='/privacy'>Privacy & Policy</Link></li>
                            <li className={styles.link}><Link to='/terms'>Terms & Condition</Link></li>
                            <li className={styles.link}><Link to='/forum'>Forum</Link></li>
                            <li className={styles.link}><Link to='/tour-guid'>Tour Guid</Link></li>
                        </ul>
                    </div>
                    <div className={styles.newsletter}>
                        <h2 className={styles['links__title']}>Newsletter</h2>
                        <input type="text" value={letter} onChange={handleChangeLetter}/>
                        <Button title='Subscribe Now'/>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>Copyright @2020 Ravel. Designed By <a href='#'>Md Shamim Hossain</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;