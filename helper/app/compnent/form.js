
import React, {Component} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Keyboard,AsyncStorage} from 'react-native';

 
export default class form extends Component<{}> {
    constructor(props){
        super(props)
        this.state={
            logid:'',
            pwd:''
        }

    }
    loginCall=()=>{
        Keyboard.dismiss();
        const  {logid,pwd} = this.state;

        // save local storage
        let myarray = { logid:logid,pwd:pwd}
        AsyncStorage.setItem('myarray',JSON.stringify(myarray));

        this.checkSaveData();
    }
    
    checkSaveData = async()=>{
        let myarray = await AsyncStorage.getItem('myarray');
        let data = JSON.parse(myarray);
        alert(data.logid + '  '+ data.pwd);
    } 




  render() {
    return (
      <View style={styles.contaner}>        
         <TextInput 
         underlineColorAndroid='rgba(0,0,0,0)'
         textContentType ='emailAddress'
         placeholder='Email'
         placeholderTextColor='rgba(255,255,255,0.7)'
        style={styles.inputBox}    
        onChangeText={logid=>this.setState({logid})}         
      />

<TextInput 
         underlineColorAndroid='rgba(0,0,0,0)'
         placeholder='Password'
         textContentType ='password'
         placeholderTextColor='rgba(255,255,255,0.7)'
         secureTextEntry={true}
        style={styles.inputBox} 
        onChangeText={pwd=>this.setState({pwd})}       
      />

       <TouchableOpacity style={styles.button}
       onPress={this.loginCall}
       >
           <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  contaner: {  
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
  },
  inputBox :{
width:300,
backgroundColor:'rgba(255,255,255,0.3)',
borderRadius: 25,
paddingHorizontal: 15,  
color:'#ffff',
fontSize:16,
marginVertical: 8,
  },
  button:{
    width:300,
    backgroundColor:'#ba2d65', 
    borderRadius: 25,
    marginVertical:10,
    paddingVertical: 12,
  },
  buttonText:{
      fontSize:16,
      fontWeight: '500',
      color:'#ffffff',
      textAlign:'center'
  }
});
