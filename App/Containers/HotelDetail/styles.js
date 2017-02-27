// @flow
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  bookButtonView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  bookButtonText: {
    fontWeight: '300',
    fontSize: 20,
    color: 'white',
  },
});
