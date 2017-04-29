import {
  CHANGE_ROUTE,
  UPDATE_USER_STATUS,
} from './actions';
const initialState = {
  roomBooked: false,
  route: 'homepage',
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.route };
    case UPDATE_USER_STATUS:
      return { ...state, roomBooked: action.roomBooked };
    default:
      {
        return state;
      }
  }
}
