import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableHighlight } from 'react-native';
//import librries

import StarRating from "react-native-star-rating";

//import others
import { FONTS, SIZES, images, responsive, commonStyles, colours } from "./../../constants/index";


const StarRatingPage = () => {
    const [ratingCount, setRating] = useState(0.0)
    return (
        <View style={{ flexDirection: "row" }}>
            <StarRating
                rating={ratingCount}
                maxStars={5}
                disabled={false}
                halfStarEnabled={true}
                halfStarColor={colours.primaryColor}
                // emptyStar={'ios-star-outline'}
                // fullStar={'ios-star'}

                emptyStarColor={colours.primaryColor}
                // iconSet={'Ionicons'}
                starSize={25}
                selectedStar={(rating) => setRating(rating)}
                fullStarColor={colours.primaryColor}
                containerStyle={{
                    width: responsive.resWidth(140),
                    marginLeft: responsive.resWidth(80),
                }}
            />
            <View style={{
                width:responsive.resWidth(192),
                // backgroundColor:"yellow",
                marginLeft:responsive.resWidth(490),
                marginTop:responsive.resHeight(2)
                
                }}>
            <Text style={{
                ...FONTS.body3,
                fontWeight: "bold",
                color:colours.blackColor,
                marginLeft:responsive.resWidth(20)
               
            }}>({ratingCount})</Text>
            </View>
        </View >
    );
}

export default StarRatingPage;