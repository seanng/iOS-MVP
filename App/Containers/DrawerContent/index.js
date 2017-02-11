// @flow

import React, { Component } from 'react';
import { ScrollView, Image, BackAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { Actions as NavigationActions } from 'react-native-router-flux';

import { changeRoute } from '../../Redux/app/actions';
import { Images } from '../../Themes';
import DrawerButton from '../../Components/DrawerButton';
import styles from './styles';

const mapStateToProps = (state) => {
  return {
    homeRoute: state.app.route,
    user: state.auth.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeRoute,
  }, dispatch);
}

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
    this.props.changeRoute('homepage');
    this.toggleDrawer();
  }

  handlePressSettings = () => {
    this.props.changeRoute('settings');
    this.toggleDrawer();
  }

  handlePressHowItWorks = () => {
    this.props.changeRoute('howItWorks');
    this.toggleDrawer();
  }

  handlePressPreviousBooking = () => {
    this.props.changeRoute('previousBookings');
    this.toggleDrawer();
  }

  handlePressTextUs = () => {
    this.props.changeRoute('textUs');
    this.toggleDrawer();
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <View>
          <Image source={Images.logo} style={styles.logo} />
        </View>
        <DrawerButton text='Homepage' onPress={this.handlePressHomepage} />
        <DrawerButton text='Payment' onPress={this.handlePressSettings} />
        <DrawerButton text='Settings' onPress={this.handlePressHowItWorks} />
        <DrawerButton text='How it works' onPress={this.handlePressPreviousBooking} />
        <DrawerButton text='Previous bookings' onPress={this.handlePressTextUs} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
