import React from 'react';

import styles from './info.module.scss';

const Info = ({title, img, text = null}) => {

    return (
        <div className={styles.info}>
            <div className={styles.container}>
                <div className={styles.icon} style={{background: img.background}}><img src={img.src} alt='icon'/></div>
                <div className={styles['info-block']}>
                    <h3 className={styles.title}>{title}</h3>
                    {text !== null ? <p className={styles.text}>{text}</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Info;