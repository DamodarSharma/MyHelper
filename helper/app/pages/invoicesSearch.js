
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

 
export default class invoice extends Component<{}> {
  render() {
    return (
      <View style={styles.logo}>        
    
        <Text style={styles.logoText}>Dary invoice</Text>
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
