import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text, ViewBase } from "react-native"
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Modal from "react-native-modal";

import { Context } from "../contextv/DetailContext";
import { hydrate } from "react-dom";
//import Barcode from "../component/barCode";
var check = 1;


const Enroll_new = ({ navigation, misu }) => {
 var state_state = (Context._currentValue.state.Barcode);
 const [modalVisible, setModalVisible] = useState(false);
 const [imageUrl, setImageUrl] = useState('h');
 // 권한 요청을 위한 hooks
 const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
 console.log('here')
 const [id, setid] = useState('')
 const uploadImage = async () => {
  // 권한 확인 코드: 권한 없으면 물어보고, 승인하지 않으면 함수 종료
  if (!status?.granted) {
   const permission = await requestPermission();
   if (!permission.granted) {
    return null;
   }
  }
  // 이미지 업로드 기능
  const result = await ImagePicker.launchImageLibraryAsync({
   mediaTypes: ImagePicker.MediaTypeOptions.Images,
   allowsEditing: false,
   quality: 1,
   aspect: [1, 1]
  });
  if (result.cancelled) {
   return null; // 이미지 업로드 취소한 경우
  }
  // 이미지 업로드 결과 및 이미지 경로 업데이트
  console.log('이미지 화깅ㄴ')
  console.log(result);

  setImageUrl(result.uri);
 };


 const goto_Text = function () {

  if (check == 1) {
   return;


  }
  else if (check == 2) {
   check = 1;
   return Barcode_name;



  }

 }

 return (

  <View style={{
   flexDirection: 'row',
   height: 200,
   backgroundColor: '#D2D2D2',
   margin: 10,
   flexDirection: 'column'


  }}>
   <View style={{
    width: '90%',
    height: 40,
    alignContent: 'center',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20
   }}>


    <TextInput
     style={{
      margin: 10
     }}
     value={id}
     placeholder="   상품 이름을 입력해주세요"
     placeholderTextColor={'#B9B9B9'}
     autoCorrect={false}
     onChangeText={(ele) => setid(ele)}>

    </TextInput>

   </View>

   <View style={{
    width: '90%',
    height: 100,


   }}>


    <TouchableOpacity onPress={uploadImage}>

     <View style={{
      width: 140,
      height: 100,
      borderRadius: 20,
      marginLeft: 20,
      backgroundColor: 'white'
     }}>

      <Image
       style={{
        height: '100%',
        width: '100%',
        margin: 0,
        padding: 0,
        borderRadius: 20

        //       borderRadius: '50%',
       }}
       source={{ uri: imageUrl }}
      />

     </View>
    </TouchableOpacity>
    <View style={{
     width: 150,
     height: 40,
     position: 'absolute',
     left: 180,
     backgroundColor: 'white',
     borderRadius: 20,
     margin: 0

    }}>

    </View>
    <TouchableOpacity onPress={() => {
     misu();
    }}>
     <View style={{
      width: 150,
      height: 40,
      position: 'absolute',
      left: 180,
      top: 40,

      backgroundColor: 'pink',
      borderRadius: 20

     }}>

      <View>
       <Text>{state_state}</Text>
      </View>


     </View>

    </TouchableOpacity>

   </View >
   <View>
    <View>
     <Text>
      {goto_Text()}
     </Text>
    </View>

   </View>
  </View >

 )
}

export default Enroll_new