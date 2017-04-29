// @flow
import React from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import BookingStatus from './BookingStatus';
import HotelList from './HotelList';
import styles from './styles';

class Homepage extends React.Component {
  render () {
    let content = <HotelList />
    if (this.props.roomBooked) {
      content = <BookingStatus user={this.props.user} />
    }
    return (
      <View style={styles.container}>
        {content}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    roomBooked: state.app.roomBooked,
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Homepage);
