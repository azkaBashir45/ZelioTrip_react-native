import React from 'react';
//import libraries
import { View, Text, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Divider } from "react-native-paper";
//import other 
import { colours, images, commonStyles, FONTS, SIZES, responsive } from "./../../constants/index";
import CardProfile from "./../components/cardProfile";
import Header from "./../components/headerComponent";

const Profile = () => {
    return (
        <View style={commonStyles.backgroundStyle}>
            <View style={{marginTop:responsive.resHeight(40)}}>
            <Header title="Profile" elevation={1}/>
            </View>
            <View style={
                {
                    height: responsive.resHeight(350),
                    // backgroundColor:"red"
                }}>
                <View style={{
                    height: responsive.resHeight(230),
                    width: responsive.resWidth(800),
                    borderRadius: 100,
                    marginTop: responsive.resHeight(22),
                    //  marginLeft:responsive.resWidth(100),
                    alignSelf: "center",
                    backgroundColor: "yellow"
                }} >
                    <Image style={{
                        borderRadius: 100,
                        height: responsive.resHeight(230),
                        width: responsive.resWidth(800),
                    }}
                        source={images.backgroundImage}
                    />
                </View>
                <Text style={
                    {
                        ...FONTS.h2,
                        color: colours.primaryColor,
                        textAlign: "center",
                        fontWeight: "800",
                        marginTop: responsive.resHeight(20)
                    }}>Azka</Text>

            </View>
            {/* <Divider  style={{height:2,marginLeft:23,marginRight:23}}/> */}
            <ScrollView style={{marginBottom:responsive.resHeight(32)}} showsVerticalScrollIndicator={false}> 
                <CardProfile
                    marginLeft={responsive.resWidth(22)}
                    marginTop={responsive.resHeight(10)}
                    title="Edit Profile"
                    name="user-plus" />
                <CardProfile
                    marginLeft={responsive.resWidth(22)}
                    marginTop={responsive.resHeight(15)}
                    title="Favourites"
                    name="heart" />
                <CardProfile
                    marginLeft={responsive.resWidth(40)}
                    marginTop={responsive.resHeight(13)}
                    title="My Orders"
                    name="qrcode" />
                <CardProfile
                    marginLeft={responsive.resWidth(22)}
                    marginTop={responsive.resHeight(12)}
                    title="Notifications"
                    name="bell" />
                <CardProfile
                    marginLeft={responsive.resWidth(92)}
                    marginTop={responsive.resHeight(13)}
                    title="Privacy Policy"
                    name="info" />
                <CardProfile
                    marginLeft={responsive.resWidth(25)}
                    marginTop={responsive.resHeight(12)}
                    title="Invite Friends"
                    name="share-alt" />
                <CardProfile
                    marginLeft={responsive.resWidth(43)}
                    marginTop={responsive.resHeight(13)}
                    title="LogOut"
                    name="sign-out" />
            </ScrollView>
        </View>
    );
}

export default Profile;