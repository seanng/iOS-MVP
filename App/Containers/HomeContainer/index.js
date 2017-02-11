// @flow
import React, { Component, PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';

import Homepage from '../Homepage';
import LoginScreen from '../Login';

import styles from './styles';

const propTypes = {
  homeRoute: PropTypes.string,
};

class HomeContainer extends Component {
  render() {
    const { homeRoute } = this.props;
    let content = <Homepage />;

    if (homeRoute === 'login') {
      content = <LoginScreen />;
    }

    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    homeRoute: state.app.route,
  };
};

HomeContainer.propTypes = propTypes;

export default connect(mapStateToProps)(HomeContainer);
