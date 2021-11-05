import React,{useState} from 'react';
import { View, Text, ImageBackground,TouchableHighlight } from 'react-native';
//import librries
import {  Card} from "react-native-paper";
import StarRating from "react-native-star-rating";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-swipeable';
//import others
import { FONTS,SIZES,images,responsive,commonStyles,colours } from "./../../constants/index";
import Header from "./../components/headerComponent";

const Favourites =()=> {
    const [ratingCount,setRating]=useState(0.0)
//  const onStarRatingPress=()=>{
//         setRating(rating=>rating)
          
//         };
      
const rightButtons = [
<Ionicons/> 
  ];
    return (
      <View style={commonStyles.backgroundStyle}>
          <View style={{
              marginTop:responsive.resHeight(51)
              }}>
          <Header title="Favourite" elevation={3} />
          </View>
          <View style={[{
              marginTop:responsive.resHeight(22),
              marginRight:responsive.resWidth(100),
              marginLeft:responsive.resWidth(100)
        }]}>
         

      <Swipeable
      rightButtonWidth={responsive.resWidth(100)}
      rightActionActivationDistance	={5}
     rightContent={rightButtons}>
          <Card elevation={2} style={{
               width:responsive.resWidth(1700),
               height:responsive.resHeight(410),
               borderRadius:responsive.resWidth(100)
          }}>
              <ImageBackground source={images.backgroundImage}
                imageStyle={{
                    borderTopRightRadius: responsive.resWidth(100),
                    borderTopLeftRadius: responsive.resWidth(100)
                }}
              style={{
                  width:responsive.resWidth(1700),
                  height:responsive.resHeight(280),
                 
              }}/>
              <Text numberOfLines={1} style={{
                  ...FONTS.h3,
                  color:colours.blackColor,
                  fontWeight:"bold",
                  paddingLeft:responsive.resWidth(80),
                  paddingRight:responsive.resWidth(50),
                  paddingTop:responsive.resHeight(8),
                  width:responsive.resWidth(1700),
                 
              }}>
                Safari Park
              </Text>
              <View style={{
             flexDirection:"row"
         }}>
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
        selectedStar={(rating)=>setRating(rating)}
        fullStarColor={colours.primaryColor}
        containerStyle={{
            width:responsive.resWidth(140),
            marginLeft:responsive.resWidth(80),
            
            
        }}      

              
              />
              <Text style={{
                  marginLeft:responsive.resWidth(510),
                  marginTop:responsive.resHeight(1),
                //   color:colours.blackColor,
                  ...FONTS.body3,
                  fontWeight:"800"
              }}>({ratingCount})</Text>
              <Text  style={{
                    marginLeft:responsive.resWidth(320),
                    width:responsive.resWidth(500),
                    textAlign:"right",
                    ...FONTS.body2,
                    color:colours.primaryColor,
                    fontWeight:"bold"
              }}>$60</Text>
              </View>
              <View style={{
                  flexDirection:"row",
                  paddingLeft:responsive.resWidth(80),
                  paddingBottom:responsive.resHeight(10),
              }}>
                  <Ionicons style={{
                      marginTop:3
                  }} name="location-sharp" size={15} color={colours.lightGrey}/>
              <Text style={{
                  fontWeight:"bold",
                  color:colours.lightGrey,
                  ...FONTS.body3,
                  marginLeft:responsive.resWidth(20)
              }}>Lahore</Text>
              </View>
          </Card>
          </Swipeable>
          </View>
      </View>
    );
}

export default Favourites;