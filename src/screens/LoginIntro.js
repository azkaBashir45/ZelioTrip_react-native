import React from 'react';
import { View, Text, StyleSheet, ImageBackground, StatusBar } from 'react-native';
// import Apptheme, { FONTS, SIZES } from "./../../constants/theme";

// import { colours } from "./../../constants/color.js";
// import { videos } from "./../../constants/video.js";
// import { images } from "./../../constants/images";
// import { responsive } from "./../../constants/responsive";
import theme,{ images,colours,FONTS,SIZES,responsive } from "./../../constants/index";

// import Video from "react-native-video";
import Button from "./../components/button";
const LoginIntro = () => {


  return (
    <View>
      <StatusBar  hidden = {true} />
      <View style={{ height: responsive.resHeight(1070), width: responsive.resWidth(1919), backgroundColor: "red" }}>
        <ImageBackground resizeMode="stretch" style={styles.backgroundImage} source={images.backgroundImage} />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text style={{ ...FONTS.largeTitle, color: colours.whiteColor, fontWeight: "bold" }}>zeliotrip</Text>
          <Text style={{ textTransform: "capitalize", color: colours.whiteColor, bottom: 5, ...SIZES.base, fontWeight: "bold" }}>where travellers connect</Text>
        </View>
        <View style={{ flex: 4, alignItems: "center", justifyContent: "center", marginTop: responsive.resHeight(100) }}>
          <View style={{ marginTop: responsive.resHeight(250) }}>
            <Button btnColor={'#fff'} txtColor={colours.primaryColor} title="Continue with facebook" onPress={() => console.log("azka")}></Button>
            <Button  btnColor={'#fff'} txtColor={colours.blackColor} title="continue with google" onPress={() => console.log("azka")}></Button>
            <Button txtColor={colours.whiteColor} title="sign up with email" onPress={() => console.log("azka")}></Button>
          </View>
          <Text style={{ ...FONTS.h5, fontWeight: "bold", marginTop: responsive.resHeight(100), color: colours.whiteColor }}>LOGIN</Text>
          <Text style={{ ...FONTS.body3, marginTop: responsive.resHeight(20), color: colours.whiteColor, textAlign: "center" }}>By singing up,you agree to our terms, conditions and privacy policy</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    height: responsive.resHeight(1070),
    width: responsive.resWidth(1919)
  },

})
export default LoginIntro;
