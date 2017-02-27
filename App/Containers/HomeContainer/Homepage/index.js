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

import AlertMessage from '../../../Components/AlertMessage';
import { Images } from '../../../Themes';
import styles from './styles';

const HotelImages = Images.hotelImages;

class Homepage extends React.Component {
  state: {
    dataSource: Object
  }

  constructor(props) {
    super(props);
    /* ***********************************************************
    * STEP 1
    * This is an array of objects with the properties you desire
    * Usually this should come from Redux mapStateToProps
    *************************************************************/
    const dataObjects = [
      { hotelName: 'Grand Hyatt Hong Kong', rating: '8.9', image: HotelImages.grandHyatt },
      { hotelName: 'Gateway Hotel, Marco Polo', rating: '8.7', image: HotelImages.gateway },
      { hotelName: 'Four Seasons Hotel Hong Kong', rating: '8.9', image: HotelImages.fourSeasons },
      { hotelName: 'The Park Lane Hong Kong, a Pullman Hotel', rating: '8.1', image: HotelImages.parkLane },
      { hotelName: 'Prince Hotel, Marco Polo', rating: '8.6', image: HotelImages.prince },
      { hotelName: 'Conrad Hong Kong', rating: '8.7', image: HotelImages.conrad },
      { hotelName: 'Cordis Hong Kong at Langham Place', rating: '8.9', image: HotelImages.cordis },
    ];

    /* ***********************************************************
    * STEP 2
    * Teach datasource how to detect if rows are different
    * Make this function fast!  Perhaps something like:
    *   (r1, r2) => r1.id !== r2.id}
    *************************************************************/
    const rowHasChanged = (r1, r2) => r1 !== r2;

    // DataSource configured
    const ds = new ListView.DataSource({ rowHasChanged });

    // Datasource is always in state
    this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
  }

  /* ***********************************************************
  * STEP 3
  * `renderRow` function -How each cell/row should be rendered
  * It's our best practice to place a single component here:
  *
  * e.g.
    return <MyCustomCell title={rowData.title} description={rowData.description} />
  *************************************************************/
  renderRow (rowData) {
    return (
      <TouchableOpacity onPress={() => { NavigationActions.hotelDetail({ hotelDetails: rowData }); }}>
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

  /* ***********************************************************
  * STEP 4
  * If your datasource is driven by Redux, you'll need to
  * reset it when new data arrives.
  * DO NOT! place `cloneWithRows` inside of render, since render
  * is called very often, and should remain fast!  Just replace
  * state's datasource on newProps.
  *
  * e.g.
    componentWillReceiveProps (newProps) {
      if (newProps.someData) {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(newProps.someData)
        })
      }
    }
  *************************************************************/

  // Used for friendly AlertMessage
  // returns true if the dataSource is empty
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

export default connect(mapStateToProps)(Homepage);
