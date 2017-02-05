// @flow

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginTop: Metrics.navBarHeight,
    backgroundColor: Colors.snow,
  },
  row: {
    flex: 1,
    backgroundColor: Colors.snow,
    marginHorizontal: Metrics.smallMargin,
    marginVertical: Metrics.smallMargin,
    borderColor: Colors.steel,
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageWrapper: {
    position: 'relative',
    height: Metrics.screenWidth - 200,
    width: Metrics.screenWidth - (Metrics.smallMargin * 2),
  },
  image: {
    position: 'absolute',
    height: Metrics.screenWidth - 200,
    width: Metrics.screenWidth - (Metrics.smallMargin * 2),
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
  listContent: {
    marginTop: Metrics.baseMargin,
  },
})
