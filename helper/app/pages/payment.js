
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
 
export default class payment extends Component {
  render() {
    return (
      <View style={styles.logo}>        
       <Icon name="md-menu" style={styles.icones} size={32} color="#900"
      onPress={()=> this.props.navigation.openDrawer() }
      />

      
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
