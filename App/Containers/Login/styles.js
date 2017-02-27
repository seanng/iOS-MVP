// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default StyleSheet.create({
  container: {
    paddingTop: 70,
    backgroundColor: Colors.black,
    height: Metrics.screenHeight,
  },
  form: {
    backgroundColor: Colors.snow,
    margin: Metrics.baseMargin,
    borderRadius: 4
  },
  row: {
    paddingVertical: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin
  },
  rowLabel: {
    color: Colors.charcoal
  },
  textInput: {
    height: 40,
    color: Colors.coal
  },
  textInputReadonly: {
    height: 40,
    color: Colors.steel
  },
  loginRow: {
    paddingBottom: Metrics.doubleBaseMargin,
    paddingHorizontal: Metrics.doubleBaseMargin,
    // flexDirection: 'row'
  },
  loginButtonWrapper: {
    flex: 1
  },
  loginButton: {
    flex: 1,
    backgroundColor: Colors.panther,
    paddingVertical: 14,
    borderRadius: 10,
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
    marginTop: Metrics.doubleBaseMargin,
  },
  loginText: {
    ...Fonts.style.normal,
    textAlign: 'center',
    color: Colors.silver,
  },
  topLogo: {
    alignSelf: 'center',
    resizeMode: 'contain'
  }
})
