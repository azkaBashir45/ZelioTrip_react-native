import React from 'react';
import { View, Text } from 'react-native';
import TextInputComponent from "./../components/textInputComponent";
import Header from "./../components/headerComponent";
import { colours, FONTS, responsive } from '../../constants';
import ButtonLogin from "./../components/buttonLogin";
import { TextInput } from 'react-native-paper';
const  ForgotPassword =()=> {

 
    return (
      <View>
          <Header title="Reset Password"/>
          <View style={{paddingTop:responsive.resHeight(2),
          backgroundColor:colours.whiteColor,
            // marginLeft:responsive.resWidth(102),
            // marginRight:responsive.resWidth(102)
            }}>
                  <Text style={{ marginLeft:responsive.resWidth(107),
            marginTop:responsive.resHeight(20),
            marginBottom:responsive.resHeight(100),
            ...FONTS.h3,
           
            marginRight:responsive.resWidth(140), color:colours.lightGrey,textAlign:"left"}}>To verify your identify, we will end a verification code to the following email. </Text>
        <TextInputComponent email="Please enter an email address"/>
       
       
       
            <View  style={{marginTop:responsive.resHeight(50),
            marginLeft:responsive.resWidth(260),
            marginRight:responsive.resWidth(140)}}>
            <ButtonLogin title="Next" txtColor={colours.whiteColor} btnColor={colours.primaryColor}/>
            </View>
            <View style={{paddingLeft:responsive.resWidth(100),paddingRight:responsive.resWidth(100)
                , marginTop:responsive.resHeight(300),height:80}}>
                <Text style={{color:colours.lightGrey,...FONTS.body3,textAlign:"center"}}>By proceeding, I acknowledge that I have read and agree to ZelioTrip. <Text style={{color:colours.primaryColor}}>Terms & Conditions</Text> and <Text style={{color:colours.primaryColor}}>Privacy Statement</Text> </Text>
            </View>
      
        </View>
      </View>
    );
}

export default ForgotPassword;
