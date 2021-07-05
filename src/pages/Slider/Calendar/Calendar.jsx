import React, {useState} from 'react';

import styles from './calendar.module.scss';

import calendarIcon from '../../../assets/slider/calendar.svg';

const Calendar = () => {
    const date = new Date();

    const [activeDate, setActiveDate] = useState({
        year: date.getFullYear(),
        month: date.toLocaleString('en', {month: 'long'}),
        day: date.getDate()
    });
    const [isVisible, setVisible] = useState(false);

    const showCountryList = e => {
        setVisible(v => !v);
    };

    const handleSetActiveItem = id => {
        setActiveDate(id);
    };

    return (
        <div className={styles.calendar}>
            <div className={styles.container}>
                <div className={styles.currentDate}>
                    <span>{activeDate.day} {activeDate.month} {activeDate.year}</span>
                    <img src={calendarIcon}/>
                </div>
                <table className={styles.calendarTable}>

                </table>
            </div>
        </div>
    );
};

export default Calendar;