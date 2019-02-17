import React, {Component} from 'react';
import { Platform,Dimensions,SafeAreaView,ScrollView,View,StyleSheet,Image} from 'react-native';
import {createDrawerNavigator,createAppContainer,DrawerItems} from 'react-navigation';
 
import HomeScreen from '../pages/home';
import Patment from '../pages/payment';

const WiDTH = Dimensions.get('window').width;
const DrawerConfig ={
    drawerWidth:WiDTH*0.83,
}

const CustomDrawComponent = (props)=>(
    <SafeAreaView style={{flex:1}}>
        <View style={styles.Imgcontainer}>
            <Image
                source={require('../images/new.png')}
                style={styles.Img}
            ></Image>
        </View>

         <ScrollView>
             <DrawerItems {...props} ></DrawerItems>
         </ScrollView>
    </SafeAreaView>
)



const DrawerNavigator = createDrawerNavigator(
    {
         
        Home : {
           screen : HomeScreen
        },
        payment : {
            screen : Patment
        } 
    },
    {
        contentComponent : CustomDrawComponent
    },
    DrawerConfig
);


const styles = StyleSheet.create({
    Imgcontainer: {       
      backgroundColor: '#f06292',
      height:150,
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    Img :{
        height:120,
        width:120,
        borderRadius: 60,
    }
  });



export default createAppContainer(DrawerNavigator);