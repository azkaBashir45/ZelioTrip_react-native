import React, { useReducer, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TextInputComponent from "./../components/textInputComponent";
import Header from "./../components/headerComponent";
import { colours, FONTS, responsive, commonStyles } from '../../constants';
import ButtonLogin from "./../components/buttonLogin";
import { TextInput } from 'react-native-paper';
import axios from "axios";
const SignUp = () => {

  const [name, SetName] = useState();
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [confirmPassword, SetConfirm] = useState('');

  const register = async () => {
    try {
      const user = { name, email, password, confirmPassword }
      if (name && email && password && (password === confirmPassword)) {
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          confirmPassword: user.confirmPassword,

        })
      })
      const data = await response.json()
      console.log(data)
      
    }
    else {
      console.log(`Password didn't match`)
    }
    }

    catch (error) {
      console.log('There has been a problem with your fetch operation: ' + error.message);
      // ADD THIS THROW error
      throw error;
    };
  }
  // const getfun = async () => {
  //   try {
     
  //       const response = await fetch('http://localhost:5000/api/products')
  //       const data = await response.json()
  //       console.log('data', data)

  //   }

  //   catch (error) {
  //     console.log('There has been a problem with your fetch operation: ' + error.message);
  //     // ADD THIS THROW error
  //     throw error;
  //   };
  // }


  // useEffect ( () => { 
  //    return()=>{
  //     //  fetch('http://localhost:5000/api/products').then((res)=>res.json()).then((result)=>{
  //     //    console.log('data',result);
  //     //  })
  //      getfun()
  //    }
  //   });




  //  if(name && email && password && (password===confirmPassword))
  // 

  // axios.post('https://localhost:5000/users/register',user).then(res=>{
  //   console.log(res)
  // });
  // };




  return (

    <View style={commonStyles.backgroundStyle}>
      <Header title="Sign Up" />
      <View style={[commonStyles.marginStyle, {
        paddingTop: responsive.resHeight(2),
        backgroundColor: colours.whiteColor,
        // marginLeft:responsive.resWidth(102),
        // marginRight:responsive.resWidth(102)
      }]}>
        {/* <Text>{data.name}</Text> */}
        <TextInputComponent email="User Name" value={name} onChangeText={(nameChange) => SetName(nameChange)} />

        <TextInputComponent email="Email" value={email} onChangeText={(emailChange) => SetEmail(emailChange)} keyboardType="email-address" />
        <TextInputComponent email="Password" value={password} onChangeText={(pssChange) => SetPassword(pssChange)} secureTextEntry={true} />
        <TextInputComponent email="Confirm Password" value={confirmPassword} onChangeText={(pssChange) => SetConfirm(pssChange)} secureTextEntry={true} />
        {/* <Text style={{...FONTS.h3,
            marginTop:responsive.resHeight(30),
            marginLeft:responsive.resWidth(1020)}}>Forgot Password ?</Text> */}
        <View style={{
          marginTop: responsive.resHeight(50),
          marginLeft: responsive.resWidth(260),
          marginRight: responsive.resWidth(140)
        }}>
          <ButtonLogin title="Sign Up" txtColor={colours.whiteColor} btnColor={colours.primaryColor}
            onPress={register}
          />
        </View>
        <View style={{
          paddingLeft: responsive.resWidth(100), paddingRight: responsive.resWidth(100)
          , marginTop: responsive.resHeight(320), height: 80
        }}>
          <Text style={{ color: colours.lightGrey, ...FONTS.body3, textAlign: "center" }}>By proceeding, I acknowledge that I have read and agree to ZelioTrip. <Text style={{ color: colours.primaryColor }}>Terms & Conditions</Text> and <Text style={{ color: colours.primaryColor }}>Privacy Statement</Text> </Text>
        </View>

      </View>
    </View>
  );
}

export default SignUp;
