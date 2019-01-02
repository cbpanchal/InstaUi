import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { 
  createSwitchNavigator, 
  createAppContainer, 
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator 
} from 'react-navigation';
import MainScreen from './App/components/MainScreen';
import { Icon } from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppContainer />
    );
  }
}

class DashboardScreen extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class WelcomeScreen extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button 
          title='login' 
          onPress={() => 
            this.props.navigation.navigate('Dashboard')
          }
        />
        <Button 
          title='signup' 
          onPress={() => 
            this.props.navigation.navigate('Dashboard')
          }
          style={{marginTop: 10,}}
        />
      </View>
    );
  }
}


class Feed extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Button 
          title='Go to Details' 
          onPress={() =>
            this.props.navigation.navigate('Detail')
          }
        />
      </View>
    );
  }
}

class Profile extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Settings extends Component{
  render(){
    return (
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const Detail = (props) => (
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Detail</Text>
  </View>
)

const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Feed',
        headerLeft: (
          <Icon
            style={{paddingLeft: 10,}} 
            name='md-menu' 
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        )
      }
    }
  },
  Detail: {
    screen: Detail
  }
}, {
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
})

const ProfileStack = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Profile',
        headerLeft: (
          <Icon
            style={{paddingLeft: 10,}} 
            name='md-menu' 
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        )
      }
    }
  }
})

const SettingStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: 'Settings',
        headerLeft: (
          <Icon
            style={{paddingLeft: 10,}} 
            name='md-menu' 
            size={30} 
            onPress={() => navigation.openDrawer()}
          />
        )
      }
    }
  }
})

const DashboardTabNavigator = createBottomTabNavigator({
  FeedStack,
  ProfileStack,
  SettingStack
}, 
{
  navigationOptions: ({navigation}) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      header: null,
      headerTitle: routeName
    };
  }
})

const DashboardStackNavigator = createStackNavigator({
  DashboardStackNavigator: DashboardTabNavigator
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: (
        <Icon
          style={{paddingLeft: 10,}} 
          name='md-menu' 
          size={30} 
          onPress={() => navigation.openDrawer()}
        />
      )
    }
  }
})


const AppDrawerNavigator= createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
})

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen,
  },
  Dashboard: {
    screen: AppDrawerNavigator
  }
})


const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
