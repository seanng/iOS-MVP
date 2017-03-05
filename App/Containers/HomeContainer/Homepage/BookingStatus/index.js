// @flow
import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import styles from './styles';

class BookingStatus extends React.Component {
  render() {
    const { bookingDetail } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={bookingDetail.image} />
            <Text style={styles.hotelNameText}>{bookingDetail.hotelName}</Text>
          </View>
          <View style={styles.detailWrapper}>
            <Text style={styles.title}>COMPLIMENTARY TRAVEL TIME ENDS AT:</Text>
            <Text>{JSON.stringify(bookingDetail.time)}</Text>
            <Text style={styles.content}>You can pick up your key at the front desk now.</Text>
            <Text style={styles.content}>You'll start getting charged when you pick up your key or at 9:40pm, which ever comes firt.</Text>
            <Text style={styles.content}>A government issued photo ID is required.</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookButton}>
          <View style={styles.bookButtonView}>
            <Text style={styles.bookButtonText}>Cancel Booking</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingDetail: state.booking.bookingDetail,
  };
};

export default connect(mapStateToProps)(BookingStatus);
