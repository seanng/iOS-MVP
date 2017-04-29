export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';

export function changeRoute(route) {
  return {
    type: CHANGE_ROUTE,
    route,
  };
}

export function userBookedRoom(roomBooked) {
  return {
    type: UPDATE_USER_STATUS,
    roomBooked,
  };
}
