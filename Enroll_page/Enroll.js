


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { Context } from "../contextv/DetailContext";
import Enroll_new from "./Enroll_new";
var check = 1;
var new_enroll = [1];

const Enroll_page = function ({ navigation }) {

 useEffect(() => {
  new_enroll.length = 1;
 }, [])

 const fill_in = () => {

  if (check == 1) {
   return {
    opacity: 1
   }
  }
  else {
   return {
    opacity: 0
   }

  }



 }
 const goto_barcode = function () {
  console.log('hey')
  navigation.navigate('Barcode')
 }
 return (

  <View >

   <View style={{
    backgroundColor: '#D2E6FF',
    height: 200
    //eight: '35%'
   }}>
    <Text style={{
     fontSize: 58,
     alignSelf: "center",
     color: '#7C7C7C',
     position: 'absolute',
     top: '40%',
     left: '5%',
     marginTop: '5%',
    }}>plus</Text>
   </View>
   <View style={{
    height: '40%',
    width: '100%'
   }}>
    {new_enroll.map((el, index) => {
     return <Enroll_new misu={() => goto_barcode()} key={index}></Enroll_new>
    })}

   </View>
   <View style={{
    height: 20
   }}>

    {
     /*<Text style={fill_in()}>채워주세요</Text>*/
    }



   </View>
   <View style={{

   }}>
    <TouchableOpacity onPress={() => {
     new_enroll.push('0');
    }}>
     <View style={{
      borderRadius: 20,
      width: '70%',
      height: 40,
      margin: 90,
      backgroundColor: '#D2E6FF'
     }}>

     </View>
    </TouchableOpacity>
   </View>
   <TouchableOpacity onPress={() => {
    //여기에다가 모듈 넣어서 추가 완료 됬씁니다. 모듈 띄우기 

   }}>

    <View>
     {
      /*<Text style={fill_in()}>채워주세요</Text>*/
     }

    </View>
   </TouchableOpacity>
  </View>

 )
}

const styles = StyleSheet.create({


 border: {

  backgroundColor: 'white',
  width: 80,
  height: 100,
  marginTop: 10,
  marginLeft: 30,




 },




})



export default Enroll_page