// @flow
import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import NavigationRouter from '../../Navigation';
import StartupActions from '../../Redux/StartupRedux';
import ReduxPersist from '../../Config/ReduxPersist';

// Styles
import styles from './styles';

// wraps dispatch to create nicer functions to call within our component
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
});
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }

    if (!this.props.loggedIn) {
      NavigationActions.login();
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
