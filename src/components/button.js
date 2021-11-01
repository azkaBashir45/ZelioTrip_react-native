import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colours, Colours } from "./../../constants/color";
import { responsive } from "./../../constants/responsive";
import appTheme,{ FONTS,SIZES } from "./../../constants/theme";
const CustomButton = (props) => {
    var pressed;
    return (
        <View>
            <View style={[styles.backButton,{backgroundColor: props.btnColor}]}>
                <TouchableOpacity onPress={props.onPress}>
                 <Text  style={[styles.btnText,{color:props.txtColor}]}>{props.title}</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default CustomButton;
const styles = StyleSheet.create({
    backButton:{
    // backgroundColor:colours.whiteColor,

    marginBottom:responsive.resHeight(15),
    borderWidth:1,
    borderColor:colours.whiteColor,
      width:responsive.resWidth(1450),
      height:responsive.resHeight(80),
      borderRadius:SIZES.radius1

    },
    btnText:{
        ...FONTS.h5,
        // left:responsive.resWidth(280),
        textAlign:"center",

        top:responsive.resHeight(28),
      
        textTransform:"uppercase",
        fontWeight:"bold",
    
        
        
    }
})