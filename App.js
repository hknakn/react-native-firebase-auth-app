import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';
import * as firebase from 'firebase';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Screens/MainScreen'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBy7NXMcfXIt7hKjco2qmW7ma7ZzK6g6Go",
  authDomain: "todo-app-5d847.firebaseapp.com",
  databaseURL: "https://todo-app-5d847.firebaseio.com",
  projectId: "todo-app-5d847",
  storageBucket: "todo-app-5d847.appspot.com"
}

firebase.initializeApp(firebaseConfig);

class Home extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: ''
    })
  }

  signUpUser = (email, password) => {
    try {

      if(this.state.password<6) {
        alert("Please enter at least 6 characters")
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password)

    } catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      })
      
    } catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel style={{ marginTop: 25 }}>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 35 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}>Login</Text>
          </Button>

          <Button style={{ marginTop: 20 }}
            full
            rounded
            primary
            onPress={() => this.props.navigation.navigate('MainScreen')}
          >
            <Text style={{ color: 'white' }}>Sign Up</Text>
          </Button>

        </Form>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: Home,
    MainScreen: MainScreen
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 35
  },
});
