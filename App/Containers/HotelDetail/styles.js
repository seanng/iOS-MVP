// @flow
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 65,
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
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.doubleBaseMargin,
  },
  priceText: {
    fontWeight: '500',
    fontSize: 15,
    color: Colors.coal,
  },
  ratingText: {
    fontWeight: '400',
    fontSize: 15,
    color: Colors.steel,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    marginBottom: Metrics.smallMargin,
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
