// @flow
import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  text: {
    ...Fonts.style.h5,
    fontWeight: '200',
    color: Colors.black,
    marginVertical: Metrics.baseMargin
  },
});
