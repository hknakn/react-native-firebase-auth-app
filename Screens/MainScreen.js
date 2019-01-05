import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy7NXMcfXIt7hKjco2qmW7ma7ZzK6g6Go",
  authDomain: "todo-app-5d847.firebaseapp.com",
  databaseURL: "https://todo-app-5d847.firebaseio.com",
  projectId: "todo-app-5d847",
  storageBucket: "todo-app-5d847.appspot.com"
}

firebase.initializeApp(firebaseConfig);

export class Home extends Component {
  render() {
    return (
      <View>
        <Text>This is the home screen</Text>
      </View>
    )
  }
}

export default Home