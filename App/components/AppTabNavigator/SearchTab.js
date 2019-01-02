import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions= {
    tabBarIcon: ({tintColor}) => (
      <Icon name='ios-search' style={{color: tintColor}} />
    ),
  }

  render() {
    return (
      <View>
        <Text>Search Tab </Text>
      </View>
    );
  }
}

export default SearchTab;
