import React from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import { responsive,colours,SIZES,FONTS,icons,images } from "./../../constants/index";
const Header =(props)=> {

 
    return (
      <View>
        <View style={styles.backColor}>
            <Image  style={styles.imageHeader} source={icons.crossIcon}/>
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
        ,height:responsive.resHeight(120),
        flexDirection:"row",
        paddingLeft:responsive.resWidth(70),
        paddingTop:responsive.resHeight(20),
        elevation:2
    },
    textColor:{
           marginTop:responsive.resHeight(5),
        //    fontWeight:"bold",
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