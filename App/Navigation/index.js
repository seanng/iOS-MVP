// @flow

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import NavigationDrawer from './NavigationDrawer';

import CustomNavBar from './CustomNavBar';
import NavItems from './NavItems';
import Styles from './styles';

// screens identified by the router
import homepageScreen from '../Containers/homepage';
import LoginScreen from '../Containers/Login';

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene initial key='homepage' component={PresentationScreen} title='Haven' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='login' component={LoginScreen} title='Login' renderLeftButton={NavItems.hamburgerButton} />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
