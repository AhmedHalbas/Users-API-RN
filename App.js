import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Button, Icon, Text } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Users from './src/components/users';
import UserDetails from './src/components/user-details';
import AddUser from './src/components/add-user';
import UsersProvider from './src/context/context';
const StackNavigator = createStackNavigator();

export default class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
  }
  render() {
    return (
      <UsersProvider>
        <NavigationContainer>
          <StackNavigator.Navigator initialRouteName='Users'>
            <StackNavigator.Screen
              name='Users'
              component={Users}
              options={({ navigation }) => ({
                headerRight: () => (
                  <Icon
                    style={{ marginRight: 20 }}
                    name='add-sharp'
                    small
                    onPress={() => navigation.navigate('AddUser')}></Icon>
                ),
              })}
            />
            <StackNavigator.Screen name='UserDetails' component={UserDetails} />
            <StackNavigator.Screen name='AddUser' component={AddUser} />
          </StackNavigator.Navigator>
        </NavigationContainer>
      </UsersProvider>
    );
  }
}
