// @flow
import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 64,
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
  mapContainer: {
    height: Metrics.screenHeight - 100 - (Metrics.screenWidth - 200) - 65,
    width: Metrics.screenWidth,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomRow: {
    height: 50,
    flexDirection: 'row',
  },
  rowButton: {
    flex: 1,
  },
  rowButtonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: Colors.coal,
  },
  borderRight: {
    borderRightWidth: 1,
  },
  rowButtonTopText: {
    fontWeight: '200',
    fontSize: 12,
  },
  rowButtonBottomText: {
    fontWeight: '500',
    fontSize: 16,
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
