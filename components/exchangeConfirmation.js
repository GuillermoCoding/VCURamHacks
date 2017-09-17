import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { FormInput, Button } from 'react-native-elements';
import Hr from 'react-native-hr';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGTH = Dimensions.get('window').heigth;

class ExchangeConfirmation extends Component {
	static navigationOptions = () => ({
		title: 'Confirmation'
	})

	render() {
		return (
			<View style={{flex:1, backgroundColor: 'white'}}>
				<View style={styles.textContainer}>
					<Text> </Text>
					<Text style={styles.infoTextStyle}>Name: </Text>
					<Text style={styles.infoText}>Guillermo Saavedra</Text>
				</View>
				<Text> </Text>
				<View style={styles.textContainer}>
					<Text style={styles.infoTextStyle}>Location: </Text>
					<Text style={styles.infoText}>7829 Pleasant Valley Dr.</Text>
				</View>
				<Text> </Text>
				<View style={styles.textContainer}>
					<Text style={styles.infoTextStyle}>Amount in dollars: </Text>
					<FormInput/>
				</View>
				<Text> </Text>
				
					<Button
						title='Confirm'
						buttonStyle={styles.buttonStyle}
						textStyle={styles.buttonTextStyle}
						onPress={()=>this.props.navigation.navigate('finalScreen')}
					/>
				
			</View>
		);
	}
}
const styles = {
	textContainer: {
		marginTop: SCREEN_HEIGTH * .05,
		marginLeft: SCREEN_WIDTH * .03
	},
	buttonStyle: {
		backgroundColor: 'rgb(0, 230, 0)'
	},
	infoTextStyle: {
		fontSize: 18,
		color: 'grey'
	},
	infoText: {
		color: 'rgb(51, 51, 51)',
		fontSize: 20
	},
	buttonTextStyle: {
		fontWeight: '500',
		fontSize: 17,
		
	}
}

export default ExchangeConfirmation;