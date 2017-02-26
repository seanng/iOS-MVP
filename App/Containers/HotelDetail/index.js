// @flow
import React from 'react';
import {
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
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>

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
