import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class FinalScreen extends Component {
	render(){
		return (
			<View style={{flex:1, backgroundColor: 'white', alignItems: 'center'}}>
				<View style={styles.textContainer}>
					<Text style={styles.textStyle}>Guillermo Saavedra will meet you at the location in about 8 mins</Text>
				</View>
				<Button
					title='Go back to map'
					buttonStyle={styles.buttonStyle}
					textStyle={styles.buttonTextStyle}
				/>
			</View>
		);
	}
}
const styles = {
	buttonStyle: {
		backgroundColor: 'rgb(0, 230, 0)',
		marginTop: SCREEN_HEIGHT * .1,
		width: SCREEN_WIDTH * .9
	},
	buttonTextStyle: {
		fontWeight: '500',
		fontSize: 17
	},
	textContainer: {
		marginTop: SCREEN_HEIGHT * .08,
		width: SCREEN_WIDTH * .95,
	},
	textStyle: {
		fontSize: 20,
		color: 'rgb(51, 51, 51)'
	}
}

export default FinalScreen;