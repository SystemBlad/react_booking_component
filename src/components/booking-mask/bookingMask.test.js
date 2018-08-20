import React from 'react';
import ReactDOM from 'react-dom';
import BookingMask from './booking-mask';
import {createStore} from 'redux'
import rootReducer from "../../reducers";
import {Provider} from 'react-redux'
import { saveBookingURL } from "./actions";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const store = createStore(rootReducer);
    ReactDOM.render(
        <Provider store={store}>
            <BookingMask/>
        </Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('saveBookingURL should create SAVE_BOOKING_URL action', () => {
    expect(saveBookingURL('Test URL')).toEqual({
        type: 'SAVE_BOOKING_URL',
        bookingURL: 'Test URL'
    })
})

