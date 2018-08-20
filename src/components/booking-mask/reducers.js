
const initialState = {
    bookingURL: ""
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_BOOKING_URL':
            console.log(action.bookingURL);
            //state.bookingURL = action.bookingURL;
            return {...state, bookingURL: action.bookingURL};
        default:
            return state
    }
};

export default bookingReducer