import React from 'react';

import styles from './stars.module.scss';

const Stars = ({rating}) => {


    return (
        <div className={styles.stars}>
            <div className={styles.container}>
                {new Array(5).fill(0).map((star, i) =>
                    i + 1 < rating ? <div key={i} className={styles.star}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                    fill="#FFC01E"/>
                            </svg>
                        </div>
                        :
                        <div key={i} className={styles.star}>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                                    fill="#b3b3b3"/>
                            </svg>
                        </div>)}
            </div>
        </div>
    );
};

export default Stars;