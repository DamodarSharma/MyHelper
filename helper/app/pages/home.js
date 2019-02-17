
import React, {Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
 
import { MessageBarManager } from 'react-native-message-bar';
 
 
export default class home extends Component {
  render() {
    return (
      <View style={styles.container}>        
         
        <Text style={styles.logoText}>Dary home</Text>
       
       
        <Button
          title="MessageBar alert"
          onPress={() =>
            MessageBarManager.showAlert({
              title: 'Your alert title goes here',
              message: 'Your alert message goes here',
              alertType: 'success',
              // See Properties section for full customization
              // Or check `index.ios.js` or `index.android.js` for a complete example
            })
          }
        /> 

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
});
