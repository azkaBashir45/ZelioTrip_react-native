import React from 'react';
import { View, Text,ScrollView } from 'react-native';
//import libraries
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import   Entypo from 'react-native-vector-icons/Entypo';
//import others
import {  images,colours,responsive,FONTS,SIZES,commonStyles} from "./../../constants/index";
import StarRatingPage from "./../components/StarRating";
import ImageSlide from "./../components/imageSlide";
const BookNowButton =()=> {

 
    return (
      <View style={commonStyles.backgroundStyle}>
    
      <View style={{
        // backgroundColor:colours.whiteColor,
        height:responsive.resHeight(100),
        marginTop:responsive.resHeight(17),
        borderRightWidth:1,
       elevation:1,
        flexDirection:"row"
        }}>
          <Text style={{
              marginTop:responsive.resHeight(55),
              marginLeft:responsive.resWidth(50),
              fontWeight:"bold",
              color:colours.blackColor,...FONTS.h3
          }}>$100/</Text><Text style={{
            marginTop:responsive.resHeight(65),
            fontWeight:"bold",
            color:colours.blackColor,...FONTS.h5
          }}>person</Text>
      <View style={{
        backgroundColor:colours.primaryColor,
        height:responsive.resHeight(70),
     width:responsive.resWidth(600),
     borderRadius:SIZES.radius2,
     marginLeft:responsive.resWidth(705),
     marginTop:responsive.resHeight(20)
        }}>
        <Text style={{
          textAlign:"center",
          ...FONTS.h4,
          fontWeight:"bold",
          color:colours.whiteColor,
          marginTop:responsive.resHeight(17),
        
        }}>Book Now</Text>

      </View>
      </View>
         
      </View>
    );
}

export default BookNowButton;