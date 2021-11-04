import React,{useReducer, useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import TextInputComponent from "./../components/textInputComponent";
import Header from "./../components/headerComponent";
import { colours, FONTS, responsive } from '../../constants';
import ButtonLogin from "./../components/buttonLogin";
import { TextInput } from 'react-native-paper';
import  axios  from "axios";
const SignUp =()=> {
 
 const [name ,SetName]=useState();
 const [email ,SetEmail]=useState('');
 const [password ,SetPassword]=useState('');
 const [confirmPassword ,SetConfirm]=useState('');

 const register= async ()=>{
   const user ={name,email,password,confirmPassword}
   const response=await fetch('http://localhost:5000/users/register',{
     method:'POST',
     headers:{
       'Content-Type':'application/json'
     },
     body:JSON.stringify({
       name,email,password
     })
   })
   const data=response.json()
   console.log(data)
  }
  //  if(name && email && password && (password===confirmPassword))
  // 
  // axios.post('https://localhost:5000/users/register',user).then(res=>{
  //   console.log(res)
  // });
  // };

      //  }
       

    return (
      <View>
          <Header title="Sign Up"/>
          <View style={{paddingTop:responsive.resHeight(2),
          backgroundColor:colours.whiteColor,
            // marginLeft:responsive.resWidth(102),
            // marginRight:responsive.resWidth(102)
            }}>
          
        <TextInputComponent email="User Name" value={name} onChangeText={(nameChange)=>SetName(nameChange)}/>
       
        <TextInputComponent email="Email" value={email} onChangeText={(emailChange)=>SetEmail(emailChange)} keyboardType="email-address"/>
        <TextInputComponent  email="Password" value={password} onChangeText={(pssChange)=>SetPassword(pssChange)} secureTextEntry={true}/>
        <TextInputComponent  email="Confirm Password" value={confirmPassword} onChangeText={(pssChange)=>SetConfirm(pssChange)} secureTextEntry={true}/>
        {/* <Text style={{...FONTS.h3,
            marginTop:responsive.resHeight(30),
            marginLeft:responsive.resWidth(1020)}}>Forgot Password ?</Text> */}
            <View  style={{marginTop:responsive.resHeight(50),
            marginLeft:responsive.resWidth(260),
            marginRight:responsive.resWidth(140)}}>
            <ButtonLogin title="Sign Up" txtColor={colours.whiteColor} btnColor={colours.primaryColor} onPress={register}/>
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
