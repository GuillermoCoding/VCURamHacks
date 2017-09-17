import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginForm, SignUpForm } from '../';
import firebase from 'firebase';
import { StackNavigator } from 'react-navigation';

class Authentication extends Component {

	state = { loggedIn: null };

  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyAXlTf-3cDzk2HJupwGGYiugLtB3MDYvGc",
        authDomain: "vcuamhacks.firebaseapp.com",
        databaseURL: "https://vcuamhacks.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "444820295445"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false });
        }
      });
    }

    renderContent() {
    switch (this.state.loggedIn) {
        case true:
          return <LoginForm />;
        case false:
          return <LoginForm />;
        default:
          return <Spinner size="large" />;
      }
    }

    render() {
		
	    return (
	      <View>
	        {this.renderContent()}
	      </View>
			
	    );
	  } 
	
}

export default Authentication;