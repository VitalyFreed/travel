import React, {useEffect, useRef, useState} from 'react';

import styles from './customerAvatar.module.scss';

const CustomerAvatar = ({avatar, inner}) => {
    const positionRef = useRef(null);

    //const [innerPosition, setInnerPosition] = useState(null);

    const [styleForImg, setStyleForImg] = useState({
        border: `5px solid ${avatar.borderColor}`,
        borderRadius: '50%',
        boxShadow: '0px 10px 30px #EFD8FA',
        width: inner ? avatar.width.inner : avatar.width.outer
    });

    const [styleForContainer, setStyleForContainer] = useState({
        position: inner ? 'relative' : 'absolute',
        transform: inner ? 'translate(0, 0)' : `translate(${avatar.position.x}px, ${avatar.position.y}px)`,
        top: 0,
        left: 0,
        cursor: 'pointer',
        transition: 'all 1s ease-out'
    });

    // useEffect(() => {
    //     if (inner) {
    //         setInnerPosition('innerPosition');
    //         console.log(positionRef.current.getBoundingClientRect());
    //     }
    // }, [innerPosition]);

    return (
        <div className={styles.customerAvatar} style={styleForContainer} ref={positionRef}>
            <div className={styles.container}>
                <img style={styleForImg} src={avatar.img} alt='avatar'/>
            </div>
        </div>
    );
};

export default CustomerAvatar;