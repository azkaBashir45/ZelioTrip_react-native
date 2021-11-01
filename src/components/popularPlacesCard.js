import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import SignUp from '../screens/SignUp';
import { images, FONTS, SIZES, responsive, colours, icons } from "./../../constants/index";
const PopularPlacedCard = (props) => {


    return (
        <View style={{
            //   height:responsive.resHeight(210),
            // width:responsive.resWidth(750),
            // borderRadius:responsive.resWidth(SIZES.radiusCard),
            // backgroundColor:"red",
            marginTop: responsive.resHeight(24)
        }}>
            <Card style={{ width: responsive.resWidth(700), height: responsive.resHeight(210), borderRadius: responsive.resWidth(SIZES.radiusCard) }}>
                <ImageBackground
                    imageStyle={{ borderRadius: responsive.resWidth(SIZES.radiusCard) }}
                    source={props.Images}
                    style={{
                        width: responsive.resWidth(700),
                        height: responsive.resHeight(210),
                        borderRadius: responsive.resWidth(SIZES.radiusCard)
                    }}>
                    <Text 
                    ellipsizeMode="tail" 
                    numberOfLines={1}
                    style={{
                        ...FONTS.h4, 
                        color: colours.whiteColor, 
                        fontWeight: "bold", 
                        textAlign: "center",
                        marginTop: responsive.resHeight(160),
                        width:responsive.resWidth(459),
                        alignSelf:"center",
                      
                        // paddingLeft:responsive.resWidth(SIZES.padding),
                        // paddingRight:responsive.resWidth(SIZES.padding)
                        
                        
                    }}>{props.title}</Text>
                </ImageBackground>
            </Card>
            {/* <ImageBackground source={images.backgroundImage}  style={{ width:responsive.resWidth(750),height:responsive.resHeight(210), borderRadius:responsive.resWidth(SIZES.radiusCard),}}/> */}

        </View>
    );
}

export default PopularPlacedCard;