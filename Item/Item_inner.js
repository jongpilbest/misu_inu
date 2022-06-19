
import React, { useContext, useEffect, useState } from "react";
import { View, Pressable, Image, Text, ScrollView, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
//import Animated from 'react-native-reanimated';
import Allery_item from "./Allery_item";




var mapv = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '7', '7'];

const Item_inner = ({ navigation }) => {
 const [modalVisible, setModalVisible] = useState(false);

 const item_show = navigation.getParam('el');
 var image = (item_show.src)

 return (
  <View style={{ backgroundColor: 'white' }}>
   <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
     Alert.alert("Modal has been closed.");
     setModalVisible(!modalVisible);
    }}
   >
    <View style={styles.centeredView}>
     <View style={styles.modalView}>
      <View style={{
       flexDirection: 'row',
       alignItems: "center",
       justifyContent: 'center'
      }}>
       <Text style={styles.modalText}>상세정보</Text>
       <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setModalVisible(!modalVisible)}
       >
        <Text style={styles.textStyle}>X</Text>
       </Pressable>
      </View>
      <View style={{
       flexDirection: 'row',
       display: 'flex-start',
       width: '60%',
       height: '10%',

       marginLeft: 20
      }}>
       <View style={{
        width: '20%',
        backgroundColor: '#7C7C7C',
        borderRadius: 20
       }}>
        <Text style={{
         fontSize: '20px',
         color: 'white',
         textAlign: 'center'
        }}>스피커</Text>
       </View>

       <View style={{
        backgroundColor: '#7C7C7C',
        marginLeft: 20,
        borderRadius: 20
       }}>
        <TouchableOpacity>
         <Text style={{
          color: 'white',
          fontSize: 20,

          textAlign: 'center'
         }}>+</Text>
        </TouchableOpacity>
       </View>

       <View style={{
        backgroundColor: '#7C7C7C',
        marginLeft: 20,
        borderRadius: 20
       }}>
        <TouchableOpacity>
         <Text style={{
          color: 'white',
          fontSize: 20
         }}>-</Text>
        </TouchableOpacity>
       </View>

      </View><View>
       <Text style={styles.modalTextv}>
        영양성분
       </Text>

      </View>
      <View>
       <Text style={styles.modalTextv}>
        원재료
       </Text>
      </View>
     </View>

    </View>
   </Modal>
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


    <View style={{
     flexDirection: 'row',
     justifyContent: 'flex-end',
     alignItems: 'flex-end',
     marginRight: 10,
     marginTop: 20,

    }}>


     <View style={{
      backgroundColor: 'pink'
     }}>
      <TouchableOpacity onPress={() => {
       { console.log('>') }


       setModalVisible(true)

      }}>
       <Text style={{
        fontSize: 20,
        textAlign: 'center'

       }}>상세정보</Text>
      </TouchableOpacity>
     </View>



    </View>


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
        return <Allery_item key={index
        } show={el} ></Allery_item>
       })}

      </View>

     </ScrollView>




    </View>


   </View >
  </View >
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
export default Item_inner;