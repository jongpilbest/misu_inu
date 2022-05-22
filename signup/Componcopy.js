


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { Context } from "../contextv/DetailContext";

var hey = -1;




const Componcopy = function ({ vale }) {

 var [num, setnum] = useState(0);




 const onpress = () => setnum((pre) => pre + 1);

 const goto = function () {

  console.log(`NUM 의 에러 찾기 ${num}`)

  // console.log(vale.change, 'MISI')
  if (num == 2) {


   // check_one(1, vale.name);   context 사용해서 여기에서 바꾸는 걸로 한다.
   // 이때 check 를 바꿔야 하니 매개별수를 같이 넣어서 .. = 이름+ 매개변수 
   console.log('ERROR MISU CHECK')
   vale.check = 0;
   console.log(vale)

   setnum(0);
   return (
    {
     backgroundColor: 'pink',
     width: 70,
     height: 100,
     marginTop: 10,
     marginLeft: 30,
     padding: 0,

     flexDirection: "row",

    }
   )
  }

  else if (num == 1) {
   console.log('일로왈')
   if (vale.check == 1) {

    setnum(2);
    //return;

   }

   vale.check = 1;



   return (
    {

     backgroundColor: 'yellow',
     width: 70,
     height: 100,
     marginTop: 10,
     marginLeft: 30,
     padding: 0,

     flexDirection: "row",

    }
   )
  }


  else if (vale.check == 1) {

   return (

    {

     backgroundColor: 'yellow',
     width: 70,
     height: 100,
     marginTop: 10,
     marginLeft: 30,
     padding: 0,

     flexDirection: "row",

    }
   )
  }




  else if (num == 0) {
   //check_corrct(vale.name, 0);
   return (
    {

     backgroundColor: 'pink',
     width: 70,
     height: 100,
     marginTop: 10,
     marginLeft: 30,
     padding: 0,

     flexDirection: "row",
     // flexWrap: "wrap",

    }
   )
  }




 }


 return (



  <TouchableOpacity
   onPress={() => onpress()}>
   <View style={goto()}

   >
    <Text>  {vale.name}</Text>



   </View >

  </TouchableOpacity>


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



export default Componcopy