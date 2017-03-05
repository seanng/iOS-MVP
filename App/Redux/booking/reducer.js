import {
  BOOK_HOTEL,
} from './actions';
const initialState = {
  bookingDetail: {},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case BOOK_HOTEL:
      return { ...state, bookingDetail: action.bookingDetail };
    default:
      {
        return state;
      }
  }
}
