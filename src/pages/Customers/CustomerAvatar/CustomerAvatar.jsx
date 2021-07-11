import React, {useEffect, useRef, useState} from 'react';

import styles from './customerAvatar.module.scss';

const CustomerAvatar = ({avatar, inner, customersPosition, innerPosition, setInnerPosition}) => {
    const positionRef = useRef(null);

    const [styleForImg, setStyleForImg] = useState({
        border: `5px solid ${avatar.borderColor}`,
        width: avatar.width.outer,
    });

    const x = customersPosition.x + avatar.position.x - innerPosition.x;
    const y = customersPosition.y + avatar.position.y - innerPosition.y;

    const [styleForContainer, setStyleForContainer] = useState({
        position: inner ? null : 'absolute',
        transform: inner ? null : `translate(${avatar.position.x}px, ${avatar.position.y}px)`,
        display: inner ? 'block' : 'block',
        top: 0,
        left: 0,
        cursor: 'pointer'
    });

    // useEffect(() => {
    //     const x1 = positionRef.current.getBoundingClientRect().left;
    //     const y1 = positionRef.current.getBoundingClientRect().top + window.pageYOffset;
    //     if (inner) {
    //
    //         setStyleForContainer(prevState => ({
    //             ...prevState,
    //             position: 'relative',
    //             left: x,
    //             top: y,
    //         }));
    //         setStyleForContainer(prevState => ({
    //             ...prevState,
    //             transition: 'all 1s ease-out',
    //             //transform: `translate(0, 0)`,
    //             display: 'block'
    //         }));
    //         setTimeout(() => setStyleForContainer(prevState => ({
    //             ...prevState,
    //             transition: 'all 1s ease-out',
    //             transform: `translate(${-x}px, ${-y}px)`,
    //         })), 500)
    //     } else {
    //         const x1 = innerPosition.x - customersPosition.x;
    //         const y1 = innerPosition.y - customersPosition.y;
    //         setStyleForContainer(prevState => ({
    //             ...prevState,
    //             transform: `translate(${x1}px, ${y1}px)`
    //         }));
    //         setTimeout(() => setStyleForContainer(prevState => ({
    //             ...prevState,
    //             transition: 'all 1s ease-out',
    //             transform: `translate(${avatar.position.x}px, ${avatar.position.y}px)`,
    //         })), 100);
    //     }
    // }, [innerPosition, customersPosition]);

    return (
        <div className={styles.customerAvatar} style={styleForContainer} ref={positionRef}>
            <div className={styles.container}>
                <img style={styleForImg} src={avatar.img} alt='avatar'/>
            </div>
        </div>
    );
};

export default CustomerAvatar;