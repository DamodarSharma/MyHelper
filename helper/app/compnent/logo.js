
import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

 
export default class logo extends Component<{}> {
  render() {
    return (
      <View style={styles.logo}>        
      <Image
          style={{width: 110, height: 70}}
          source={require('../images/new.png')}
        />
        <Text style={styles.logoText}>Dary Lack</Text>
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
