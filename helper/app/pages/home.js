import React, {Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';

import { MessageBarManager } from 'react-native-message-bar';
import Icon from 'react-native-vector-icons/Ionicons';
 
 import MenuButton from '../compnent/menubutton';

export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>        
      <Icon name="md-menu" style={styles.icones} size={32} color="#900"
      onPress={()=> this.props.navigation.openDrawer() }
      />
             
      <View style={styles.container} >

        <Text style={styles.logoText}>Dary home</Text>
        
        <Button
          title="MessageBar alert"
          onPress={()=> this.props.navigation.openDrawer() }
        /> 
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  logoText :{
    fontSize:18,
    color:'rgba(255,255,255,0.8)'
  } ,
  icones: {  
    zIndex:9,
    position:'absolute',
    top: 20,
    left:20,
   }
});
