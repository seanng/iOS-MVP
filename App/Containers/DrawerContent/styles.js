// @flow
import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../Themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  profileWrapper: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.charcoal,
    marginTop: 20,
  },
  username: {
    fontWeight: '300',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.charcoal,
    margin: 20,
  },
  drawerItemsWrapper: {
    marginTop: 20,
  },
});
