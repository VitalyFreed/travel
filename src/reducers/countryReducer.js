import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0,
        name: 'Arab Egypt',
        calendar: [
            {
                id: 1,
                name: 'January',
                price: 500
            },
            {
                id: 2,
                name: 'February',
                price: 1500
            },
            {
                id: 3,
                name: 'March',
                price: 3000
            },
            {
                id: 4,
                name: 'April',
                price: 500
            },
            {
                id: 5,
                name: 'May',
                price: 1200
            },
            {
                id: 6,
                name: 'June',
                price: 800
            },
            {
                id: 7,
                name: 'July',
                price: 10000
            },
            {
                id: 8,
                name: 'August',
                price: 3500
            },
            {
                id: 9,
                name: 'September',
                price: 4000
            },
            {
                id: 10,
                name: 'October',
                price: 7100
            },
            {
                id: 11,
                name: 'November',
                price: 6400
            },
            {
                id: 12,
                name: 'December',
                price: 3950
            }
        ]
    },
    {
        id: 1,
        name: 'Peru',
        calendar: [
            {
                id: 1,
                name: 'January',
                price: 2500
            },
            {
                id: 2,
                name: 'February',
                price: 1500
            },
            {
                id: 3,
                name: 'March',
                price: 3000
            },
            {
                id: 4,
                name: 'April',
                price: 500
            },
            {
                id: 5,
                name: 'May',
                price: 1200
            },
            {
                id: 6,
                name: 'June',
                price: 800
            },
            {
                id: 7,
                name: 'July',
                price: 10000
            },
            {
                id: 8,
                name: 'August',
                price: 3500
            },
            {
                id: 9,
                name: 'September',
                price: 4000
            },
            {
                id: 10,
                name: 'October',
                price: 7100
            },
            {
                id: 11,
                name: 'November',
                price: 6400
            },
            {
                id: 12,
                name: 'December',
                price: 3950
            }
        ]
    },
    {
        id: 2,
        name: 'Israil',
        calendar: [
            {
                id: 1,
                name: 'January',
                price: 9350
            },
            {
                id: 2,
                name: 'February',
                price: 1500
            },
            {
                id: 3,
                name: 'March',
                price: 3000
            },
            {
                id: 4,
                name: 'April',
                price: 500
            },
            {
                id: 5,
                name: 'May',
                price: 1200
            },
            {
                id: 6,
                name: 'June',
                price: 800
            },
            {
                id: 7,
                name: 'July',
                price: 10000
            },
            {
                id: 8,
                name: 'August',
                price: 3500
            },
            {
                id: 9,
                name: 'September',
                price: 4000
            },
            {
                id: 10,
                name: 'October',
                price: 7100
            },
            {
                id: 11,
                name: 'November',
                price: 6400
            },
            {
                id: 12,
                name: 'December',
                price: 3950
            }
        ]
    }
];

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {

    }
});

export default countrySlice.reducer;

export const getCountries = state => state.country;

export const getPriceForCountry = (state, countryId, month) => {
  const country = state.country.find(c => c.id === countryId);
  const price = country.calendar.find(c => c.id === month).price;
  return price;
};