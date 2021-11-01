import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colours, Colours } from "./../../constants/color";
import { responsive } from "./../../constants/responsive";
import appTheme,{ FONTS,SIZES } from "./../../constants/theme";
const ButtonLogin = (props) => {
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

export default ButtonLogin;
const styles = StyleSheet.create({
    backButton:{
    // backgroundColor:colours.whiteColor,

    marginBottom:responsive.resHeight(15),
    borderWidth:1,
    borderColor:colours.whiteColor,
      width:responsive.resWidth(1450),
      height:responsive.resHeight(90),
      borderRadius:SIZES.radius2

    },
    btnText:{
        ...FONTS.h3,
        // left:responsive.resWidth(280),
        textAlign:"center",

        top:responsive.resHeight(19),
      
        textTransform:"uppercase",
        fontWeight:"bold",
    
        
        
    }
})