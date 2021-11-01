import React from 'react';
import { View, Text } from 'react-native';
import TextInputComponent from "./../components/textInputComponent";
import Header from "./../components/headerComponent";
import { colours, FONTS, responsive } from '../../constants';
import ButtonLogin from "./../components/buttonLogin";
import { TextInput } from 'react-native-paper';
const SignUp =()=> {

 
    return (
      <View>
          <Header title="Sign Up"/>
          <View style={{paddingTop:responsive.resHeight(2),
          backgroundColor:colours.whiteColor,
            // marginLeft:responsive.resWidth(102),
            // marginRight:responsive.resWidth(102)
            }}>
          
        <TextInputComponent email="User Name"/>
       
        <TextInputComponent  email="Email"/>
        <TextInputComponent  email="Password"/>
        <TextInputComponent  email="Confirm Password"/>
        {/* <Text style={{...FONTS.h3,
            marginTop:responsive.resHeight(30),
            marginLeft:responsive.resWidth(1020)}}>Forgot Password ?</Text> */}
            <View  style={{marginTop:responsive.resHeight(50),
            marginLeft:responsive.resWidth(260),
            marginRight:responsive.resWidth(140)}}>
            <ButtonLogin title="Sign Up" txtColor={colours.whiteColor} btnColor={colours.primaryColor}/>
            </View>
            <View style={{paddingLeft:responsive.resWidth(100),paddingRight:responsive.resWidth(100)
                , marginTop:responsive.resHeight(240),height:80}}>
                <Text style={{color:colours.lightGrey,...FONTS.body3,textAlign:"center"}}>By proceeding, I acknowledge that I have read and agree to ZelioTrip. <Text style={{color:colours.primaryColor}}>Terms & Conditions</Text> and <Text style={{color:colours.primaryColor}}>Privacy Statement</Text> </Text>
            </View>
      
        </View>
      </View>
    );
}

export default SignUp;
