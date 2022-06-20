
import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Image, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";
import * as ImagePicker from 'expo-image-picker';
import { Pressable } from 'react-native';
import Modal from "react-native-modal";



//import { TapGestureHandler } from "react-native-gesture-handler";





const Mypage_main = function ({ navigation }) {


 const [modalVisible, setModalVisible] = useState(false);
 const [imageUrl, setImageUrl] = useState('h');
 // 권한 요청을 위한 hooks
 const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
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

 const { delete_all } = useContext(Context);
 console.log(Context._currentValue.state);
 var hey_your_name = Context._currentValue.state[0];
 //console.log(hey_your_name)
 if (hey_your_name) {
  var name = hey_your_name.id;
 }

 console.log(name)
 return (


  <View style={{
   flex: 1
  }}>
   <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
     Alert.alert("Modal has been closed.");
     setModalVisible(!modalVisible);
    }}>
    <View style={styles.centeredView}>
     <View style={styles.modalView}>

      <Pressable
       style={[styles.button, styles.buttonClose]}
       onPress={() => setModalVisible(!modalVisible)}
      >

      </Pressable>
     </View>

    </View>
   </Modal>

   <View style={{
    backgroundColor: '#D2E6FF',
    flex: 1,
    //eight: '35%'
   }}>
    <Text style={{
     fontSize: 40
    }}>Mypage</Text>
   </View>
   <View style={{
    flex: 1,
    height: '30%',
    backgroundColor: 'white'
   }}>
    <View>
     <View style={{
      backgroundColor: '#D2D2D2',
      height: '85%',
      margin: 10,
      flexDirection: 'row',
      borderRadius: 20


     }}>
      <View style={{
       backgroundColor: 'white',
       height: '70%',
       width: '60%',
       margin: 10,
       borderRadius: 20
      }}>
       <Text style={{
        fontSize: 20,
        margin: 10
       }}>
        {name}
       </Text>

      </View>
      <View style={{
       width: '100%',


      }}>


       <View style={{
        backgroundColor: 'white',
        height: '70%',
        width: '25%',
        margin: 10,
        borderRadius: '50%',
        position: 'relative'

       }}>
        <Image
         style={{
          height: '100%',
          width: '100%',
          margin: 0,
          padding: 0,

          borderRadius: '50%',
         }}
         source={{ uri: imageUrl }}
        />
        <View style={{
         position: 'absolute',
         left: 60,
         width: 30,

         top: 70,
         margin: 0,
        }}>
         <Pressable onPress={uploadImage}>
          <View style={{
           backgroundColor: "#71A6E3",
           height: 30,

           borderRadius: '50%'
          }}>

          </View>
         </Pressable>
        </View>
       </View>

      </View>
     </View>

    </View>

   </View>

   <View style={{
    backgroundColor: 'white',
    flex: 2.5
   }}>
    <View style={{
     backgroundColor: '#D2E6FF',
     height: '12%',
     width: '95%',
     margin: 5,
     marginLeft: 10,
     borderRadius: 10
    }}>
     <Text style={{
      margin: 10
     }}>
      선호상품 확인

     </Text>

    </View>
    <View style={{
     backgroundColor: '#D2E6FF',
     height: '12%',
     width: '95%',
     marginLeft: 10,
     margin: 5,
     borderRadius: 10
    }}>
     <Text style={{
      margin: 10
     }}>
      비선호상품 확인
     </Text>

    </View>
    <View style={{
     backgroundColor: '#D2E6FF',
     height: '12%',
     width: '95%',
     marginLeft: 10,
     margin: 5,
     borderRadius: 10
    }}>
     <Text style={{
      margin: 10
     }}>
      상태 수정
     </Text>

    </View>
    <View style={{
     backgroundColor: '#D2E6FF',
     height: '12%',
     width: '95%',
     marginLeft: 10,
     margin: 5,
     borderRadius: 10
    }}>
     <Text style={{
      margin: 10
     }}>
      FAQ
     </Text>

    </View>
    <View style={{
     backgroundColor: '#D2E6FF',
     height: '12%',
     width: '95%',
     marginLeft: 10,
     margin: 5,
     borderRadius: 10
    }}>
     <Text style={{
      margin: 10
     }}>
      위험성분 분석
     </Text>

    </View>
    <View style={{
     backgroundColor: '#D2D2D2',
     width: '30%',
     height: '10%',
     alignContent: 'center',
     alignSelf: 'center',
     margin: 10,
     borderRadius: 10,
     justifyContent: 'center',


    }}>
     <TouchableOpacity onPress={() => {
      setModalVisible(true)
      //delete_all()
     }} >


      <Text style={{
       fontSize: 15,
       flexDirection: 'row',
       // alignItems: 'center',
       textAlign: 'center',
       justifyContent: 'center',




      }}>
       로그아웃
      </Text>
     </TouchableOpacity>
    </View>

   </View>
  </View>

 )
}

const styles = StyleSheet.create({
 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
 },
 modalView: {
  width: '80%',
  height: '60%',
  margin: 20,
  backgroundColor: "#545252",
  opacity: 0.96,

  borderRadius: 20,
  padding: 35,
  //alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
   width: 0,
   height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5
 },
 button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2
 },
 buttonOpen: {
  backgroundColor: "#545252",
 },
 buttonClose: {
  backgroundColor: "#545252",
 },
 textStyle: {
  color: "white",
  fontWeight: "bold",
  fontSize: 20

 },
 modalText: {
  marginBottom: 15,
  textAlign: "center",
  fontSize: 30,
  color: '#71A6E3'

 },
 modalTextv: {
  marginBottom: 15,

  fontSize: 30,
  color: '#71A6E3'

 }

})

export default Mypage_main;
