import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGTH = Dimensions.get('window').heigth;

class MapScreen extends Component {
	static navigationOptions = () => ({
		title: 'Currency Map'
	})
	constructor(props){
		super(props);
		this.state = {
			pressed: false,
			mapLoaded: false,
			region: {
				longitude: -122,
        latitude: 37,
        longitudeDelta: 0.04,
      	latitudeDelta: 0.09
			}
		}
	}
	onRegionChange(region){
		this.setState({region});
		console.log(region);
	}
	componentDidMount() {
		this.setState({mapLoaded: true});
	}
	handleSubmit = ()=> {
		this.setState({pressed: true});
	}
	displayMap = ()=>{
		if (this.state.pressed) {
			return (
				<MapView
						region={this.state.region}
						style={{flex:1}}
						onRegionChange={this.onRegionChange.bind(this)}
						maxZoomLevel={5}
					>
				<MapView.Marker
					coordinate={{
						longitude: -122.0285077192559,
        		latitude: 36.97317519500744,
        		longitudeDelta: 0.02564774568193,
      			latitudeDelta: 0.02913482172104409
					}}
					onPress={()=>this.props.navigation.navigate('exchangerReview')}
				>
				
				<View>
					<Button
						title='$'
						buttonStyle={styles.buttonMarkerStyle}
						textStyle={styles.buttonMarkerTextStyle}
					/>
				</View>

				</MapView.Marker>
				<MapView.Marker
					coordinate={{
						longitude: -122.0375010334571,
        		latitude: 36.96644347873866,
        		longitudeDelta: 0.021310156380110357,
      			latitudeDelta: 0.024209633338053038
					}}
					onPress={()=>this.props.navigation.navigate('exchangerReview')}
				>
				
				<View>
					<Button
						title='$'
						buttonStyle={styles.buttonMarkerStyle}
						textStyle={styles.buttonMarkerTextStyle}
					/>
				</View>

				</MapView.Marker>
				<MapView.Marker
					coordinate={{
						longitude: -122.02864937062726,
        		latitude: 36.966712988948004,
        		longitudeDelta: 0.0008074657726524492,
      			latitudeDelta: 0.0008092338793730391
					}}
					onPress={()=>this.props.navigation.navigate('exchangerReview')}
				>
				
				<View>
					<Button
						title='$'
						buttonStyle={styles.buttonMarkerStyle}
						textStyle={styles.buttonMarkerTextStyle}
					/>
				</View>

				</MapView.Marker>
				</MapView>
			);
		} else {
			return (
				<MapView
						region={this.state.region}
						style={{flex:1}}
						onRegionChange={this.onRegionChange.bind(this)}
						maxZoomLevel={5}
					/>
			);
		}
	}
	render(){
		return (
				<View style={{flex:1}}>
					{this.displayMap()}
					<View style={styles.buttonContainer}>
            <Button
              large
              title='Search'
              backgroundColor= 'rgb(0, 230, 0)'
							onPress={()=> this.handleSubmit()}
            />
          </View>
				</View>
				
		);
	}
}
const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    left: 0
  },
	buttonMarkerStyle: {
		backgroundColor: 'rgb(0, 230, 0)',
		borderRadius: 10
	},
	buttonMarkerTextStyle: {
		color: 'white',
		fontWeight: '600'
	}
}
export default MapScreen;