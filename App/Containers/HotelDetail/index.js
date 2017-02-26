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

class HotelDetail extends React.Component {
  render() {
    const { hotelDetail } = this.props;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={hotelDetail.image} />
            <Text style={styles.hotelNameText}>{hotelDetail.hotelName}</Text>
          </View>
          <View style={styles.detailWrapper}>
            <Text style={styles.priceText}>$300/hour</Text>
            <Text style={styles.ratingText}>{`Excellent ${hotelDetail.rating}`}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.bookButton}>
          <View style={styles.bookButtonView}>
            <Text style={styles.bookButtonText}>BOOK NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(HotelDetail);
