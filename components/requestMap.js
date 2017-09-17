import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGTH = Dimensions.get('window').heigth;

class RequestMap extends Component {
	static navigationOptions = () => ({
		title: 'Location'
	})
	constructor(props){
		super(props);
		this.state = {
			pressed: false,
			mapLoaded: false,
			region: {
				longitude: -122.04060472955501,
        latitude: 36.96369154242544,
        longitudeDelta: 0.03785982895038842,
      	latitudeDelta: 0.043012622097968745
			}
		}
	}
	onRegionChange(region){
		this.setState({region});
	}
	componentDidMount() {
		this.setState({mapLoaded: true});
	}
	handleSubmit = ()=> {
		this.setState({pressed: true});
	}
	render(){
		return (
				<View style={{flex:1}}>
					<MapView
						region={this.state.region}
						style={{flex:1}}
						onRegionChange={this.onRegionChange.bind(this)}
						minZoomLevel={10}
					>
						<MapView.Marker
					
							coordinate={{
								longitude: -122.04060472955501,
								latitude: 36.96369154242544,
								longitudeDelta: 0.03785982895038842,
								latitudeDelta: 0.043012622097968745
							}}
							onPress={()=>this.props.navigation.navigate('exchangeConfirmation')}
						/>
					
					<MapView.Marker
					
						coordinate={{
							longitude: -122.04788091561437,
							latitude: 36.968039947218465,
							longitudeDelta: 0.037859829902373576,
							latitudeDelta: 0.043010166396406646
						}}
						onPress={()=>console.log('test')}
					/>
					<MapView.Marker
						
						coordinate={{
							longitude: -122.03664127861212,
							latitude: 36.96638569205821,
							longitudeDelta: 0.037859829902402,
							latitudeDelta: 0.043011101054808876
						}}
						onPress={()=>console.log('test')}
					/>

				</MapView>
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
  }
}
export default RequestMap;