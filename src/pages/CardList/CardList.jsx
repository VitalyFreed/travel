import React, {useState} from 'react';

import styles from './cardList.module.scss';

import mapIcon from '../../assets/cards/map.png';
import binocularIcon from '../../assets/cards/binocular.png';
import backpackIcon from '../../assets/cards/backpack.png';
import ukeleleIcon from '../../assets/cards/ukelele.png';

import Card from "./Card/Card";

const CardList = () => {
    const [activeCardId, setActiveCardId] = useState(0);

    const handleSetActiveCardId = id => {
        setActiveCardId(id);
    };

    const cards = [
        {
            id: 0,
            title: 'Choose Destination',
            text: 'Lorem Ipsum is simply dummy text of the printing setting',
            icon: mapIcon
        },
        {
            id: 1,
            title: 'Explore The Place',
            text: 'Lorem Ipsum is simply dummy text of the printing setting',
            icon: binocularIcon
        },
        {
            id: 2,
            title: 'Start Your Journey',
            text: 'Lorem Ipsum is simply dummy text of the printing setting',
            icon: backpackIcon
        },
        {
            id: 3,
            title: 'Let’s Enjoy',
            text: 'Lorem Ipsum is simply dummy text of the printing setting',
            icon: ukeleleIcon
        },
    ];

    return (
        <div className={styles.cardList}>
            <div className={styles.container}>
                {cards.map(({id, title, text, icon}) => <Card
                    key={id}
                    title={title}
                    text={text}
                    icon={icon}
                    id={id}
                    activeCardId={activeCardId}
                    handleSetActiveCardId={handleSetActiveCardId}
                />)}
            </div>
        </div>
    );
};

export default CardList;