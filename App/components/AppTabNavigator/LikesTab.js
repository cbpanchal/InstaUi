import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class LikesTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions= {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-heart' style={{color: tintColor}} />
    ),
  }

  render() {
    return (
      <View>
        <Text> Likes Tab </Text>
      </View>
    );
  }
}

export default LikesTab;
