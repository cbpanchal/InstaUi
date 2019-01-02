import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import { Icon } from 'native-base';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{paddingLeft: 10,}} />,
    title: 'Instagram',
    headerRight: <Icon name='ios-send' style={{paddingRight: 10,}} />,
    headerTitleStyle: {
      alignContent: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }
  }
  render() {
    return (
      <AppTabNavigator />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeTab: {
    screen: HomeTab
  },
  SearchTeb: {
    screen: SearchTab
  },
  AddMediaTab: {
    screen: AddMediaTab
  },
  LikesTab: {
    screen: LikesTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});

const AppTabNavigator = createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default MainScreen;
