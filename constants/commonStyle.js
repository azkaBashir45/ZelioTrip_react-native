import React from "react";
import { StyleSheet } from "react-native";
import { colours,responsive } from "./index";
export const commonStyles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor:colours.whiteColor,
        width:responsive.resWidth(1920),
          height:responsive.resHeight(1080)
    },
    marginStyle:{
        marginRight:responsive.resWidth(50),
        marginLeft:responsive.resWidth(50)
    }
    
})