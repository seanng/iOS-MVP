// @flow
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  imageWrapper: {
    position: 'relative',
    height: Metrics.screenWidth - 200,
    width: Metrics.screenWidth,
  },
  image: {
    position: 'absolute',
    height: Metrics.screenWidth - 200,
    width: Metrics.screenWidth,
  },
  hotelNameText: {
    fontWeight: '300',
    fontSize: 24,
    color: Colors.snow,
    backgroundColor: 'transparent',
    marginVertical: Metrics.smallMargin,
    marginHorizontal: Metrics.smallMargin,
  },
  detailWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
  },
  title: {
    fontWeight: '400',
    fontSize: 17,
    color: Colors.coal,
  },
  time: {
    fontWeight: '500',
    fontSize: 20,
    color: Colors.coal,
  },
  content: {
    fontWeight: '200',
    fontSize: 15,
    color: Colors.coal,
  },
  bookButtonView: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  bookButtonText: {
    fontWeight: '300',
    fontSize: 20,
    color: 'white',
  },
});
