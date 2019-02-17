
import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Logo from '../compnent/logo';
import Form from '../compnent/form';
 
export default class login extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>  
       
       <Logo></Logo>
       <Form></Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#f06292',
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
  }, 
});
