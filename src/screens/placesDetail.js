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
import BookNowButton from "./../components/bookNowButton";
const PlacesDetail =()=> {

 
    return (
      <View style={commonStyles.backgroundStyle}>
        <View>
          <ScrollView>
     <ImageSlide />
   
      <View style={{
        // backgroundColor:"red",
        height:responsive.resHeight(80),
      
        }}>
        <View style={{
          flexDirection:"row",
          // backgroundColor:"yellow",
          marginTop:responsive.resHeight(12),
          marginLeft:responsive.resWidth(90),
          
          }}>
        <Text style={{
          ...FONTS.h2,
          color:colours.blackColor,
          fontWeight:"bold"
          }}>Jallo Park</Text>
          <View style={{
            marginLeft:responsive.resWidth(285),
            marginTop:responsive.resHeight(7),
            // backgroundColor:"blue"
            }}>
        <StarRatingPage  />
        </View>
        </View>
       </View>
        <View style={{
          height:responsive.resHeight(320),
        //  backgroundColor:"red",
          marginLeft:responsive.resWidth(90),
          marginRight:responsive.resWidth(50)
          }}>
             <ScrollView showsVerticalScrollIndicator={false} >
          <Text style={{
            marginTop:responsive.resHeight(20),
           textAlign:"justify",
            color:colours.blackColor,
            ...FONTS.body3
          }}>The country’s first ever Butterfly House established at newly upgraded Botanical Garden at Jallo Park become the center of attraction of thousands of visitors, including students and women on Sunday.

          There were long queues of cars, wagons and buses parked on roads outside the Botanical Garden as the free parking had already filled and was closed for any further entry since Sunday morning. The entry free public park has been gaining popularity among the masses due to its features especially the Butterfly House and Aquarium, Bonsai and Cactus Garden, a treetops walkway, a Rhizotron, a walkway built below th ground level that allows visitors to see roots of trees, tree houses and gazebos.
          </Text>
          </ScrollView>
        </View>
        <View style={{
          height:responsive.resHeight(180),
          // backgroundColor:"red",
          marginTop:responsive.resHeight(25),
          marginLeft:responsive.resWidth(90),
          marginRight:responsive.resWidth(50)
          }}>
          <Text style={{
            fontWeight:"bold",
            ...FONTS.h2,
            color:colours.blackColor
          }}>Facilites</Text>
           <View style={{marginTop:responsive.resHeight(10)}}>
          <ScrollView  horizontal={true} >
         
            <View>
          <FontAwesome name="wifi" size={32} color={colours.primaryColor}/>
          <Text style={{...FONTS.body2,color:colours.blackColor,}}>Wifi</Text>
          </View>
          <View style={{marginLeft:responsive.resWidth(240)}}>
          <Ionicons name="fast-food-sharp" size={32} color={colours.primaryColor}/>
          <Text style={{...FONTS.body2,color:colours.blackColor,}}>Food</Text>
          </View>
          <View style={{marginLeft:responsive.resWidth(240)}}>
          <FontAwesome name="wifi" size={32} color={colours.primaryColor}/>
          <Text style={{...FONTS.body2,color:colours.blackColor,}}>Wifi</Text>
          </View>
          <View style={{marginLeft:responsive.resWidth(240)}}>
          <FontAwesome name="wifi" size={32} color={colours.primaryColor}/>
          <Text style={{...FONTS.body2,color:colours.blackColor}}>Wifi</Text>
          </View>
          </ScrollView >
        
          </View>
        </View>
  </ScrollView>
   </View>
  <BookNowButton/>
      </View>
 
    
    );
}

export default PlacesDetail;