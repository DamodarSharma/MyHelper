
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class menubutton extends Component<{}> {
    render() {
      return (
            <Icon name="md-menu" style={styles.icones} size={32} color="#900"
            onPress={()=> this.props.navigation.openDrawer() }
            />
      );
    }
  }
  
  const styles = StyleSheet.create({
    icones: {  
     zIndex:9,
     position:'absolute',
     top: 20,
     left:20,
    }
});