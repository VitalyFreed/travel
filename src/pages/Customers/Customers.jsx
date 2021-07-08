import React, {useRef, useState} from 'react';

import styles from './customer.module.scss';

import ava1 from '../../assets/customers/ava1.png';
import ava2 from '../../assets/customers/ava2.png';
import ava3 from '../../assets/customers/ava3.png';
import ava4 from '../../assets/customers/ava4.png';
import ava5 from '../../assets/customers/ava5.png';
import ava6 from '../../assets/customers/ava6.png';
import ava7 from '../../assets/customers/ava7.png';
import ava8 from '../../assets/customers/ava8.png';

import Customer from "./Customer/Customer";
import CustomerAvatar from "./CustomerAvatar/CustomerAvatar";

const Customers = () => {
    const customers = [
        {
            id: 0,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 0,
                    y: 0
                },
                img: ava1,
                borderColor: '#FF4567'
            }
        },
        {
            id: 1,
            name: 'Md Shamim Hossain 2',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 150,
                    y: 300
                },
                img: ava2,
                borderColor: '#C549FF'
            }
        },
        {
            id: 2,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 0,
                    y: 400
                },
                img: ava3,
                borderColor: '#FFCA45'
            }
        },
        {
            id: 3,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 200,
                    y: 450
                },
                img: ava4,
                borderColor: '#5F45FF'
            }
        },
        {
            id: 4,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 50,
                    y: 580
                },
                img: ava5,
                borderColor: '#FF4567'
            }
        },
        {
            id: 5,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 1000,
                    y: 450
                },
                img: ava6,
                borderColor: '#FFCA45'
            }
        },
        {
            id: 6,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 1200,
                    y: 300
                },
                img: ava7,
                borderColor: '#18A0FB'
            }
        },
        {
            id: 7,
            name: 'Md Shamim Hossain',
            speciality: 'UI/UX Designer',
            text: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
            avatar: {
                width: {
                    inner: 80,
                    outer: 50,
                },
                position: {
                    x: 1150,
                    y: 580
                },
                img: ava8,
                borderColor: '#65CE54'
            }
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleChangeSlide = customerId => {
        setCurrentSlide(customerId);
    };

    return (
        <div className={styles.customers}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>What Our Happy Customers Say About Us</h2>
                    <div className={styles.slider}>
                        {customers.map((customer, i) => i === currentSlide ?
                            <Customer key={customer.id}{...customer} inner={true}/>
                            : null
                        )}
                        <div className={styles['slider__circles']}>
                            {customers.map(customer =>
                                <div
                                    key={customer.id}
                                    className={styles.circle}
                                    onClick={e => handleChangeSlide(customer.id)}>
                                </div>)}
                        </div>
                    </div>
                    {customers.map((customer, i) => i !== currentSlide ?
                        <CustomerAvatar key={customer.id} avatar={customer.avatar}/>
                        : null
                    )}
                </div>
            </div>
        </div>
    );
};

export default Customers;