import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
//import libraries
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import   Entypo from 'react-native-vector-icons/Entypo';

//import other
import { responsive,colours,SIZES,FONTS,icons,images } from "./../../constants/index";

const Header =(props)=> {

  
    return (
      <View>
        <View style={[styles.backColor,{elevation:props.elevation}]}>
            <Image
            //   style={styles.imageHeader} 
              source={props.icons}/>
            <Text style={styles.textColor}>{props.title}</Text>
        </View>
      
      </View>
    );
}

export default Header;
const styles = StyleSheet.create({
    backColor:{
        width:responsive.resWidth(1920)
        ,backgroundColor:colours.whiteColor
        ,height:responsive.resHeight(95),
        flexDirection:"row",
        paddingLeft:responsive.resWidth(70),
        paddingTop:responsive.resHeight(20),
       
    },
    textColor:{
           marginTop:responsive.resHeight(5),
           fontWeight:"bold",
           marginLeft:responsive.resWidth(220),
           ...FONTS.h2,
           color:colours.blackColor
    },
    imageHeader:{
        width:responsive.resWidth(180),
        height:responsive.resHeight(70),
        backgroundColor:colours.blackColor,
      

    }
})