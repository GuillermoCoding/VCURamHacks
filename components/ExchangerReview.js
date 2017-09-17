import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import Hr from 'react-native-hr'
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ExchangerReview extends Component {
	static navigationOptions = ()=> ({
		title: "Exchanger profile"
	});

	render() {
		return (
			<View style={{flex:1, backgroundColor: 'white'}}>
				<ScrollView>
					<View style={styles.containerStyle}>
					<View>
							<Image style={styles.imageStyle}source={require('../assets/images/profile.png')}/>
					</View>
					<View style={styles.textContainerStyle}>
						<Text style={styles.nameTextStyle}>Guillermo Saavedra</Text>
						<Text style={{fontSize: 29, color: 'green'}}>4.9/5</Text>
					</View>
					<Text> </Text>
					<Text> </Text>
					<View style={styles.reviewTextContainer}>
						<Text style={styles.reviewTitle}>Exchange Rates</Text>
						<View style={styles.reviewHeader}>
							<Text style={styles.reviewNameStyle}>Euros -> Dollars</Text>
							<Text style={styles.dateStyle}>$ 3.98</Text>
						</View>
						<View style={styles.reviewHeader}>		
							<Text style={styles.reviewNameStyle}>Pesos -> Dollars</Text>
							<Text style={[styles.dateStyle, {marginLeft: SCREEN_WIDTH * .39}]}>$ 12.52</Text>
						</View>
						<View style={styles.reviewHeader}>	
							<Text style={styles.reviewNameStyle}>Rupees -> Dollars</Text>
							<Text style={[styles.dateStyle, {marginLeft: SCREEN_WIDTH * .36}]}>$ 7.45</Text>
						</View>
						<Text> </Text>
						<Text> </Text>

						<Text style={styles.reviewTitle}>Reviews</Text>
						<View style={styles.reviewHeader}>
							<Text style={styles.reviewNameStyle}>Joseph Smith</Text>
							<Text style={styles.dateStyle}>01-12-2017</Text>
						</View>
						<View style={styles.textReviewContent}>
							<Text style={{color : 'rgb(51, 51, 51)' }}>Great experience with this money exchanger! Would come back again.</Text>
						</View>
						<Hr lineColor='grey'/>
						<View style={styles.reviewHeader}>
							<Text style={styles.reviewNameStyle}>Davis Harris</Text>
							<Text style={styles.dateStyle}>05-20-2017</Text>
						</View>
						<View style={styles.textReviewContent}>
							<Text style={{color: 'rgb(51, 51, 51)' }}>Great rates and responds fast</Text>
						</View>
						<Hr lineColor='grey'/>
						<View style={styles.reviewHeader}>
							<Text style={styles.reviewNameStyle}>Harrison Blake</Text>
							<Text style={styles.dateStyle}>01-12-2017</Text>
						</View>
						<View style={styles.textReviewContent}>
							<Text style={{color: 'rgb(51, 51, 51)' }}>Exchanged with Guillermo multiple times during my trip!</Text>
						</View>
						<Hr lineColor='grey'/>
					</View>
						<Button
							title='Request Exchange'
							buttonStyle={styles.buttonStyle}
							textStyle={styles.buttonTextStyle}
							onPress={()=>this.props.navigation.navigate('requestMap')}
						/>
					</View>
				</ScrollView>	
			</View>
		);
	}
}
const styles = {
	imageStyle: {
		marginLeft: SCREEN_WIDTH * .325,
		width: SCREEN_WIDTH * .35,
		height: SCREEN_HEIGHT * .25,
		borderRadius: 5,
	},
	buttonStyle: {
		backgroundColor: 'rgb(0, 230, 0)',
		marginTop: SCREEN_HEIGHT * .1,
		marginBottom: SCREEN_HEIGHT * .1
	},
	buttonTextStyle: {
		fontWeight: '600',
		fontSize: 17
	},
	containerStyle: {
		marginTop: SCREEN_HEIGHT * .07
	},
	textContainerStyle: {
		alignItems: 'center'
	},
	nameTextStyle: {
		fontWeight: '600',
		fontSize: 22,
		color: 'grey'	
	},
	reviewTitle: {
		fontSize: 22,
		marginLeft: SCREEN_WIDTH * .02
	},
	reviewHeader: {
		flexDirection: 'row',
		marginLeft: SCREEN_WIDTH * .02,
		marginTop: SCREEN_HEIGHT * .03
	},
	textReviewContent: {
		marginLeft: SCREEN_WIDTH * .02,
		marginBottom: SCREEN_HEIGHT * .03,
		marginTop: SCREEN_HEIGHT * .01
	},
	dateStyle: {
		marginLeft: SCREEN_WIDTH * .4,
		color: 'grey'
	},
	reviewNameStyle: {
		fontWeight: '600'
	}

}

export default ExchangerReview;