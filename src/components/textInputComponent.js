import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from "react-native-paper";
import { colours ,FONTS,responsive} from "./../../constants/index";
const TextInputComponent =(props)=> {
//textinput focus under line color change  https://stackoverflow.com/questions/54860514/how-to-get-rid-of-the-bottom-border-of-the-react-native-paper-textinput-when-foc
 
    return (
      <View>
       <TextInput
       value={props.value}
       onChangeText={props.onChangeText}
       keyboardType={props.keyboardType}
      
       placeholder={props.email}
       secureTextEntry={props.secureTextEntry}
       placeholderTextColor={colours.lightGrey}
       underlineColor={colours.lightGrey}
       
       theme={{colors: { primary: colours.primaryColor}}}
      
       style={{
           backgroundColor:colours.whiteColor,...FONTS.h3,
           color:colours.blackColor,
           paddingRight:responsive.resWidth(50),
           paddingLeft:responsive.resWidth(50)
        
           
       }}
       />
      </View>
    );
}

export default TextInputComponent;
