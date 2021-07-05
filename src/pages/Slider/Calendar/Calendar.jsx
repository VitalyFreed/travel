import React, {useState} from 'react';

import styles from './calendar.module.scss';

import calendarIcon from '../../../assets/slider/calendar.svg';
import arrowIcon from '../../../assets/slider/arrow.svg';

const Calendar = ({activeDate, setActiveDate}) => {
    const [isVisible, setVisible] = useState(false);

    const showCalendar = e => {
        setVisible(v => !v);
    };

    const date1 = new Date(activeDate.year, activeDate.month, 1);
    const date2 = new Date(activeDate.year, activeDate.month + 1, 1);
    const countDays = Math.round((date2 - date1) / 1000 / 3600 / 24);

    const weeks = [];
    const days = [];

    for (let i = 0; i < countDays / 7; i++) {
        weeks.push(i);
    }
    for (let i = 0; i < countDays; i++) {
        days.push(i);
    }

    const handleSelectDay = day => {
        setActiveDate(d => ({
            ...d,
            day: day + 1
        }));
    };

    const handleChangeMonth = step => {
        let currentMonth = activeDate.month + step;
        let year = activeDate.year;
        if (currentMonth < 0) {
            currentMonth = 11;
            year -= 1;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            year += 1;
        }
        setActiveDate(d => ({
            ...d,
            month: currentMonth,
            year
        }));
    };

    //{date.toLocaleString('en', {month: 'long'})}

    return (
        <div className={styles.calendar}>
            <div className={styles.container}>
                <div className={styles.currentDate} onClick={showCalendar}>
                    <span>
                        {activeDate.day < 10 ? `0${activeDate.day}.` : `${activeDate.day}.`}
                        {activeDate.month + 1 < 10 ? `0${activeDate.month + 1}.` : `${activeDate.month + 1}.`}
                        {activeDate.year}
                    </span>
                    <img src={calendarIcon}/>
                </div>
                <div className={styles['calendar__wrapper']} style={{display: isVisible ? 'block' : 'none'}}>
                    <div className={styles.arrows}>
                        <img src={arrowIcon} style={{transform: 'rotate(180deg)'}}
                             onClick={e => handleChangeMonth(-1)}/>
                        <span>
                        {activeDate.day < 10 ? `0${activeDate.day}.` : `${activeDate.day}.`}
                            {activeDate.month + 1 < 10 ? `0${activeDate.month + 1}.` : `${activeDate.month + 1}.`}
                            {activeDate.year}
                    </span>
                        <img src={arrowIcon} onClick={e => handleChangeMonth(1)}/>
                    </div>
                    <table className={styles.calendarTable}>
                        <thead>
                        <th>Пн</th>
                        <th>Вт</th>
                        <th>Ср</th>
                        <th>Чт</th>
                        <th>Пт</th>
                        <th>Сб</th>
                        <th>Вс</th>
                        </thead>
                        <tbody>
                        {weeks.map(week =>
                            <tr>
                                {days.slice(week * 7, (week + 1) * 7).map(day =>
                                    <td
                                        onClick={e => handleSelectDay(day)}
                                        className={day + 1 === activeDate.day ? styles.activeDay : null}
                                    >
                                        {day + 1}
                                    </td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Calendar;