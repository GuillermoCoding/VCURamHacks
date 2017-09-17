import React,{ Component } from 'react';
import { View, Stylesheet, Text } from 'react-native';
import ChatBot from 'react-native-chatbot';
 
const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
];
 

class Chatbot extends Component {
	render {
		return (
			<ChatBot steps={steps} />
		);
	}
}

export default Chatbot;