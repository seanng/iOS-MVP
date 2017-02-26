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
import MapView from 'react-native-maps';

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
          <View style={styles.mapContainer}>
            <MapView
              initialRegion={{
                latitude: 22.281398,
                longitude: 114.172121,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={styles.map}
            />
          </View>
        </ScrollView>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.rowButton}>
            <View style={[styles.rowButtonView, styles.borderRight]}>
              <Text style={styles.rowButtonTopText}>Promo Code</Text>
              <Text style={styles.rowButtonBottomText}>12344321</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowButton}>
            <View style={styles.rowButtonView}>
              <Text style={styles.rowButtonTopText}>Payment</Text>
              <Text style={styles.rowButtonBottomText}>...1234</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <View style={styles.bookButtonView}>
            <Text style={styles.bookButtonText}>BOOK NOW</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(HotelDetail);
