import React from 'react';
//import libraries
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card } from "react-native-paper";
//import other 
import { colours, images, commonStyles, FONTS, SIZES, responsive } from "./../../constants/index";

const CardProfile = (props) => {
    return (
        <View>
            <Card style={{ height: responsive.resHeight(90) }}>
                <View style={{
                    flexDirection: "row", alignItems: "center"
                    , marginTop: responsive.resHeight(25),
                    paddingLeft: responsive.resWidth(50),
                    paddingRight: responsive.resWidth(50),

                }}>
                    <View style={{
                        backgroundColor: colours.primaryColor,
                        borderRadius: SIZES.radius1,
                        width: responsive.resWidth(200),
                        height: responsive.resHeight(55),

                    }}>
                        <FontAwesome style={{
                            width: responsive.resWidth(130),
                            marginTop: props.marginTop,
                            marginLeft: props.marginLeft,
                            alignSelf: 'center',

                            // , backgroundColor: "red"
                        }} name={props.name}
                            color={colours.whiteColor}
                            size={20} />
                    </View>
                    <Text style={{
                        width: responsive.resWidth(1000),
                        color: colours.blackColor,
                        ...FONTS.h4,
                        fontWeight: "800",
                        marginLeft: responsive.resWidth(100)
                    }}>
                        {props.title}
                    </Text>
                    <FontAwesome
                        size={25}
                        color={colours.primaryColor}

                        style={{
                            marginLeft: responsive.resWidth(420)
                        }} name="chevron-right" />
                </View>
            </Card>
        </View>
    );
}

export default CardProfile;