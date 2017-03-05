export const BOOK_HOTEL = 'BOOK_HOTEL';


export function bookHotel(bookingDetail) {
  return {
    type: BOOK_HOTEL,
    bookingDetail,
  };
}
