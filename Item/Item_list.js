
import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

import { Context } from '../contextv/DetailContext'
import Componn from "../signup/Componn"
import Component_item from "./Component_item";
import SeachBar from '../signup/SearchBar'
import Ms from "../signup/Ms";
//import { requestFrame } from "react-native-reanimated/lib/reanimated2/core";

var chekc = -1;
var chek = 0;
var text_input = 0;
var mos = [

  {
    item: '과자',
    kr: '구운감자',
    company: '해태',
    src: require('../assets/Item/01.png'),
    number: Math.floor(Math.random() * 100)


  },

  {
    item: '음료수',
    kr: '밀키스',
    company: '롯데칠성',
    src: require('../assets/Item/01.png'),
    number: Math.floor(Math.random() * 100)
  },


  {
    item: '과자',
    kr: '콘칩',
    company: '크라운',
    src: require("../assets/Item/04.png"),
    number: Math.floor(Math.random() * 100)
  },

  {
    item: '음료수',
    kr: '봉봉',
    company: '해태',
    src: require('../assets/Item/01.png'),
    number: Math.floor(Math.random() * 100)
  },
  {
    item: '아이스크림',
    kr: '감동란쌍란바',
    company: 'GS리테일',
    src: require('../assets/Item/01.png'),
    number: Math.floor(Math.random() * 100)
  },

  {
    item: '아이스크림',
    kr: '청저제주녹차',
    company: '빙그레',
    src: require('../assets/Item/01.png'),
    number: Math.floor(Math.random() * 100)
  },






]
const Item_list = ({ navigation }) => {
  const [MS_good, misu] = Ms();

  const check_most = function (el) {

    if (el == "") {
      chekc = -1;
      chek = mos;

      text_input = 0;

      return;

    }
    // 이름으로 했을때
    // 품목으로 했을때 

    chek = mos.filter(evlv => {
      return evlv.kr == el
    })

    if (chek == 0) {
      chek = mos.filter(evlv => {
        return evlv.item == el
      })
    }





    if (chek.length > 0) {
      chekc = 11;
      text_input = 33;
    }
    else if (chek.length == 0) {
      chekc = 0
      console.log('ERROR CHECK')
      text_input = 1;
    }



    return;




  }



  const check_good = function () {


    if (chekc == 11) {
      // console.log('11인데요')
      chekc = 10;
      return true;
    }
    else
      // console.log('11아닌데요 ')
      return false;

  }

  const gopage = function (el) {
    navigation.navigate('Item_inner', { el: el })

  }
  //여기까지 함수 쓴느거
  return (
    <View>


      <SeachBar onfinsh={(vl) => {
        MS_good()

        check_most(vl);
      }} >

      </SeachBar>

      {
        text_input == 1 && <Text style={{
          fontSize: 22,
          color: '#545252',
          marginLeft: 20,

          fontWeight: 'bold'
        }}>
          검색되는 상품이 없습니다

        </Text>
      }
      <View style={{
        height: '60%'
      }}>


        <ScrollView style={styles.border}>



          <View style={styles.frined}>



            {


              chekc == 11 && check_good() && chek.map((el, index) => {
                //console.log(el);


                return (
                  <View>



                    < Component_item key={el.number} vale={el} touch={(vv) => gopage(vv)} ></Component_item>

                    <Text>[{el.company}] {el.kr}</Text>



                  </View>
                )
              })

            }




          </View>



        </ScrollView>
      </View >
    </View >
  )


}

const styles = StyleSheet.create({


  border: {
    width: '90%',
    height: 800,

    borderWidth: 3,
    margin: 10,
    borderColor: 'transparent'


  },
  frined: {

    flexDirection: 'row',

    height: 600,
    // justifyContent: 'space-between',
    backgroundColor: 'white',
    // justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }




})
export default Item_list;