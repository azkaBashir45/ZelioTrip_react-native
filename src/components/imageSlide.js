import React from 'react';
import { View, Text, StatusBar, ImageBackground } from 'react-native';
//import libraries
//import others
import {  images,colours,responsive,FONTS,SIZES,commonStyles} from "./../../constants/index";
import Header from "./headerComponent";
const ImageSlide =()=> {

 
    return (
      <View>
          <StatusBar backgroundColor="transparent" translucent={true}/>
      <View style={{
         
          height:responsive.resHeight(400)
      }}>
          
    <ImageBackground style={{height:responsive.resHeight(400)}} source={images.backgroundImage}>
    </ImageBackground>
      </View>
      </View>
    );
}

export default ImageSlide;