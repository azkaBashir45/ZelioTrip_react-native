import React from 'react';
import { View, Text, StatusBar, Image, FlatList, ScrollView, SafeAreaView, } from 'react-native';
import { colours, FONTS, SIZES, responsive, commonStyles, images } from "./../../constants/index";
import PopularPlacesCard from "./../components/popularPlacesCard";
const OnBoarding = (props) => {

  const List = [{ title: "Lahores", image: images.backgroundImage },
  { title: "Lahore", image: images.backgroundImage },
  { title: "Lahore", image: images.backgroundImage },
  { title: "Lahore", image: images.backgroundImage },
  { title: "Lahore", image: images.backgroundImage }]

  return (
    <SafeAreaView style={commonStyles.backgroundStyle}>
      <StatusBar translucent={true} backgroundColor={colours.primaryColor} />
      <View style={commonStyles.marginStyle}>
      <View style={{ marginTop: responsive.resHeight(100), flexDirection: "row" }}>
          <Text style={{ ...FONTS.h1, fontWeight: "bold", color: colours.blackColor }}>Find Places</Text>
          <Image style={{ alignItems: "center", justifyContent: "center", width: responsive.resWidth(350), height: responsive.resHeight(100), borderRadius: responsive.resWidth(500), bottom: responsive.resHeight(30), marginLeft: responsive.resWidth(560) }} source={images.backgroundImage} />
        </View>
        <View style={{ marginTop: responsive.resHeight(10), height: responsive.resHeight(76), borderWidth: 2, borderColor: colours.lightGrey, borderRadius: responsive.resWidth(20) }}>
          <Text style={{ paddingLeft: responsive.resWidth(100), color: colours.lightGrey, paddingTop: responsive.resHeight(20), paddingBottom: responsive.resHeight(10) }}>Search places</Text>
        </View>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} style={commonStyles.marginStyle}>

       
        {/* popular places */}
        <View>
        <View style={{ marginTop: responsive.resHeight(40), flexDirection:"row" }}>
          <Text style={{ ...FONTS.h3, color: colours.blackColor, fontWeight: "bold" }}>Popular Places</Text>
          <Text style={{...FONTS.h5,fontWeight:"bold",marginLeft:responsive.resWidth(805),marginTop:responsive.resHeight(10)}}>See All {'>'}</Text>
        </View>
        <View>
          <FlatList
           horizontal={true}
           ItemSeparatorComponent={
            () => <View style={{ width: 20, backgroundColor: 'white' }}/>
        }
           data={List}
           renderItem={({item,index})=><PopularPlacesCard Images={item.image} title={item.title} />
           }/>
           
            
        
        {/*   <PopularPlacesCard
            Images={List[0].image}
            title={List[0].title} /> */}
        </View>
          {/* Adventure places */}
          <View style={{ marginTop: responsive.resHeight(40), flexDirection:"row" }}>
          <Text style={{ ...FONTS.h3, color: colours.blackColor, fontWeight: "bold" }}>Adventure Places</Text>
          <Text style={{...FONTS.h5,fontWeight:"bold",marginLeft:responsive.resWidth(700),marginTop:responsive.resHeight(10)}}>See All {'>'}</Text>
        </View>
        <View>
          <FlatList
           horizontal={true}
           ItemSeparatorComponent={
            () => <View style={{ width: 20, backgroundColor: 'white' }}/>
        }
           data={List}
           renderItem={({item,index})=><PopularPlacesCard Images={item.image} title={item.title} />
           }/>
       
        </View>
          {/* popular places */}
          <View style={{ marginTop: responsive.resHeight(40), flexDirection:"row" }}>
          <Text style={{ ...FONTS.h3, color: colours.blackColor, fontWeight: "bold" }}>Relaxation Places</Text>
          <Text style={{...FONTS.h5,fontWeight:"bold",marginLeft:responsive.resWidth(690),marginTop:responsive.resHeight(10)}}>See All {'>'}</Text>
        </View>
        <View>
          <FlatList
           horizontal={true}
           ItemSeparatorComponent={
            () => <View style={{ width: 20, backgroundColor: 'white' }}/>
        }
           data={List}
           renderItem={({item,index})=><PopularPlacesCard Images={item.image} title={item.title} />
           }/>
           
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



export default OnBoarding;