
import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";



//import { TapGestureHandler } from "react-native-gesture-handler";





const Mypage_main = function ({ navigation }) {
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
        <View style={{
         backgroundColor: "#71A6E3",
         height: 30,
         // position: 'absolute',
         top: 70,
         left: 60,
         width: 30,
         borderRadius: '50%'
        }}>

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
      delete_all()
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

const style = StyleSheet.create({
 text: {
  width: 200,
  height: 40,
  borderColor: "black"
 },

 border: {
  width: '85%',
  height: 50,
  borderColor: '#D2D2D2',
  borderWidth: 3,
  margin: 10,
  borderRadius: 20,
  marginLeft: '3%',
  marginLeft: 15,
  marginTop: '5%',


 }

})

export default Mypage_main;
