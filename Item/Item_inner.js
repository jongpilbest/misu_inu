
import React, { useContext, useEffect } from "react";
import { View, Image, Text, ScrollView, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SceneView } from "react-navigation";
//import Animated from 'react-native-reanimated';
import { Context } from '../contextv/DetailContext'

import Allery_item from "./Allery_item";
var mapv = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '7', '7'];

const Item_inner = ({ navigation }) => {
 const item_show = navigation.getParam('el');
 var image = (item_show.src)

 return (
  <View style={{ backgroundColor: 'white' }}>
   <View style={{
    marginTop: 30,
    backgroundColor: 'white'
   }}>
    <Text style={

     {
      fontSize: 40,
      textAlign: 'center'

     }
    }>
     {item_show.kr}
    </Text>
    <Text style={

     {
      fontSize: 30,
      textAlign: 'center',


     }
    }>
     {item_show.company}
    </Text>
    <Image style={{
     width: '50%',
     height: '56%',
     alignSelf: 'center',

    }}
     source={image}>

    </Image>
    <TouchableOpacity>
     <View style={{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      marginRight: 10,
      marginTop: 20
     }}>
      <Text style={{
       fontSize: 20

      }}>상세정보</Text>
     </View>
    </TouchableOpacity>

    <View style={{
     width: '100%',
     height: 200,
     backgroundColor: '#D2E6FF',

     flexDirection: 'row',

     // justifyContent: 'space-between',

     // justifyContent: 'flex-start',
     //flexWrap: 'wrap'
    }}>


     <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      // showsHorizontalScrollIndicator={false}
      pagingEnabled={true}
     >

      <View style={{
       width: '100%',
       flex: 1,
       flexDirection: 'row',
       margin: 20
      }}>
       {mapv.map((el, index) => {
        return <Allery_item key={el} show={el} ></Allery_item>
       })}

      </View>

     </ScrollView>




    </View>


   </View >
  </View >
 )
}

const style = StyleSheet.create({


})
export default Item_inner;