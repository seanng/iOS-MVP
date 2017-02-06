// @flow

import React, { Component } from 'react';
import { ScrollView, Image, BackAndroid } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';

import { Images } from '../../Themes';
import DrawerButton from '../../Components/DrawerButton';
import styles from './styles';

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle();
  }

  handlePressHomepage = () => {
    this.toggleDrawer()
    NavigationActions.homepage();
  }

  handlePressLogin = () => {
    this.toggleDrawer()
    NavigationActions.login();
  }


  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton text='Homepage' onPress={this.handlePressHomepage} />
        <DrawerButton text='Login' onPress={this.handlePressLogin} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
