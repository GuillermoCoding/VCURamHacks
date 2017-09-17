import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MapScreen from './components/mapScreen';
import Authentication from './components/Authentication';
import ExchangerReview from './components/ExchangerReview';
import RequestMap from './components/requestMap';
import ExchangeConfirmation from './components/exchangeConfirmation';
import FinalScreen from './components/finalScreen';

export default class App extends React.Component {

  render() {
    const MainNavigator = TabNavigator({
      tabOne: { screen: StackNavigator({
        mapScreen : { screen: MapScreen},
        exchangerReview: { screen: ExchangerReview },
        requestMap: { screen: RequestMap},
        exchangeConfirmation: { screen: ExchangeConfirmation},
        finalScreen: { screen: FinalScreen}
      })},

    },{
      navigationOptions: {
        tabBarVisible : false
      }
    });
    return (
      <MainNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
