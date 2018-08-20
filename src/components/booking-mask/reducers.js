
const initialState = {
    bookingURL: ""
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_BOOKING_URL':
            return {...state, bookingURL: action.bookingURL};
        default:
            return state
    }
};

export default bookingReducer