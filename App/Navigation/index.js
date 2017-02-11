// @flow

import React, { Component } from 'react';
import { Modal, Scene, Router } from 'react-native-router-flux';
import NavigationDrawer from './NavigationDrawer';

import CustomNavBar from './CustomNavBar';
import NavItems from './NavItems';
import Styles from './styles';

// screens identified by the router
import HomeContainer from '../Containers/HomeContainer';
import Login from '../Containers/Login';


/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render() {
    return (
      <Router>
        <Scene key="modal" component={Modal}>
          <Scene key="root">
            <Scene key="drawer" component={NavigationDrawer} open={false}>
              <Scene key="drawerChildrenWrapper" navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
                <Scene initial key="homeContainer" component={HomeContainer} title="Haven" renderLeftButton={NavItems.hamburgerButton} />
              </Scene>
            </Scene>
          </Scene>
          <Scene key="login" component={Login} hideNavBar direction="vertical" />
        </Scene>
      </Router>
    );
  }
}

export default NavigationRouter
