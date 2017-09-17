import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

	class SignUpForm extends Component {
		state = { firstName: '',
				  lastName: '',
				  university: '',
				  email: '',
				  password: '',
				  error: '',
				  loading: false };

		onButtonPress() {
			const { firstName,
					lastName,
					university,
					email,
					password } = this.state;

			this.setState({ error: '', loading: true });

			firebase.auth().createUserWithEmailAndPassword(email, password)
		          		.then(this.onLoginSuccess.bind(this))
		          		.catch(this.onLoginFail.bind(this));

			firebase.auth().signInWithEmailAndPassword(email, password)
		    	.then(this.onLoginSuccess.bind(this))
		     	.catch(this.onLoginFail.bind(this));
		}



		onLoginFail() {
			this.setState({
				error: 'Authentication failed',
				loading: false
			})
		}


		onLoginSuccess() {
			this.setState({
				firstName: '',
				lastName: '',
				university: '',
				email: '',
				password: '',
				loading: false,
				error: ''
			});
		}

		renderButton() {
			if(this.state.loading) {
				return <Spinner size="small" />;
			}

			return (
				<Button onPress={this.onButtonPress.bind(this)}>
					Sign up
				</Button>
			);
		}

		render() {
			return (
				<Card>
					<CardSection>
					<Input
						label="First Name"
						placeholder="Steve"
						value={this.state}
						onChangeText={firstName => this.setState({ firstName })}
					/>
					</CardSection>

					<CardSection>
					<Input
						label="Last Name"
						placeholder="Jobs"
						value={this.state}
						onChangeText={lastName => this.setState({ lastName })}
					/>
					</CardSection>

					<CardSection>
					<Input
						label="University"
						placeholder="University of Virginia"
						value={this.state}
						onChangeText={university => this.setState({ university})}
					/>
					</CardSection>

					<CardSection>
					<Input
						label="School Email"
						placeholder="ba2ra@virginia.edu"
						value={this.state}
						onChangeText={email => this.setState({ email})}
					/>
					</CardSection>

					<CardSection>
					<Input
						style={styles.input}
						secureTextEntry
						label="Password"
						placeholder="Password"
						value={this.state}
						onChangeText={password => this.setState({ password })}
					/>
					</CardSection>

					<Text style={styles.errorTextStyle}>
          				{this.state.error}
        			</Text>

			        <CardSection>
			          {this.renderButton()}
			        </CardSection>
				</Card>
			);
		}
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  input: {
    textAlign:'left'
  }
};


export default SignUpForm;



