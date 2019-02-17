
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

 
export default class payment extends Component {
  render() {
    return (
      <View style={styles.logo}>        
    
        <Text style={styles.logoText}>Dary payment</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {  
    flex: 1,
    alignItems: 'center',
    justifyContent : 'flex-end',
  },
  logoText :{
fontSize:18,
color:'rgba(255,255,255,0.8)'
  } ,
});
