import {
  CHANGE_ROUTE,
} from './actions';
const initialState = {
  route: 'homepage',
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.route };
    default:
      {
        return state;
      }
  }
}
