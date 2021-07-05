import React from 'react';

import styles from './header.module.scss';

import logoText from '../../assets/header/logo-text.png';
import logo from '../../assets/header/logo.svg';
import userIcon from '../../assets/header/user-icon.png';
import searchIcon from '../../assets/header/search-icon.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <a href='/' className={styles.logo}>
                    <div className={styles['logo__container']}>
                        <div className={styles['logo__img']}><img src={logo}/></div>
                        <div className={styles['logo__text']}><img src={logoText}/></div>
                    </div>
                </a>
                <nav className={styles.menu}>
                    <ul className={styles['menu__list']}>
                        <li className={styles['menu__item']}><a href='#'>Destination</a></li>
                        <li className={styles['menu__item']}><a href='#'>Offer</a></li>
                        <li className={styles['menu__item']}><a href='#'>Tour</a></li>
                        <li className={styles['menu__item']}><a href='#'>Blog</a></li>
                    </ul>
                </nav>
                <div className={styles.account}>
                    <div className={styles['account__container']}>
                        <img className={styles['user-icon']} src={userIcon}/>
                        <a href='#' className={styles['user-name']}>My Account</a>
                        <img className={styles['search-icon']} src={searchIcon}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;