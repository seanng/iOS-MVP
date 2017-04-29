// @flow
import React from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions as NavigationActions } from 'react-native-router-flux';

import AlertMessage from '../../../../Components/AlertMessage';
import { Images } from '../../../../Themes';
import styles from './styles';

const HotelImages = Images.hotelImages;

class HotelList extends React.Component {
  state: {
    dataSource: Object
  }

  constructor(props) {
    super(props);
    const dataObjects = [
      { hotelName: 'Grand Hyatt Hong Kong', rating: '8.9', image: HotelImages.grandHyatt },
      { hotelName: 'Gateway Hotel, Marco Polo', rating: '8.7', image: HotelImages.gateway },
      { hotelName: 'Four Seasons Hotel Hong Kong', rating: '8.9', image: HotelImages.fourSeasons },
      { hotelName: 'The Park Lane Hong Kong, a Pullman Hotel', rating: '8.1', image: HotelImages.parkLane },
      { hotelName: 'Prince Hotel, Marco Polo', rating: '8.6', image: HotelImages.prince },
      { hotelName: 'Conrad Hong Kong', rating: '8.7', image: HotelImages.conrad },
      { hotelName: 'Cordis Hong Kong at Langham Place', rating: '8.9', image: HotelImages.cordis },
    ];

    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
  }

  renderRow (rowData) {
    return (
      <TouchableOpacity onPress={() => { NavigationActions.hotelDetail({ hotelDetail: rowData }); }}>
        <View style={styles.row}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={rowData.image} />
            <Text style={styles.hotelNameText}>{rowData.hotelName}</Text>
          </View>
          <View style={styles.detailWrapper}>
            <Text style={styles.priceText}>$300/hour</Text>
            <Text style={styles.ratingText}>{`Excellent ${rowData.rating}`}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  noRowData () {
    return this.state.dataSource.getRowCount() === 0
  }

  render () {
    return (
      <View style={styles.container}>
        <AlertMessage title='Error, please try again later' show={this.noRowData()} />
        <ListView
          contentContainerStyle={styles.listContent}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          pageSize={15}
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // ...redux state to props here
  }
}

export default connect(mapStateToProps)(HotelList);
