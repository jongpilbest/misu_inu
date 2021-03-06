
import React, { useState, useContext, useEffect } from "react"
import { View, ScrollView, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from "../contextv/DetailContext";
import Componn from "./Componn"
import BigContext from "../contextv/BigContext";
import SeachBar from "./SearchBar"
import Ms from "./Ms";
//import { TapGestureHandler } from "react-native-gesture-handler";
import axios from "axios"
import fian from "./fian";
var chekc = -1;
var chek = 0;
var text_input = 0;


const fifth = function ({ navigation }) {
    const [MS_good, misu] = Ms();
    // const [chna, mos_original] = fian();
    //console.log(misu);
    //  console.log('에러십활')
    console.log(Context._currentValue.state)
    var mos = (Context._currentValue.state).slice(0, 17);
    // console.log(mos, chekc)

    const check_most = function (el) {

        if (el == "") {
            chekc = -1;
            chek = mos;

            text_input = 0;

            return;

        }

        console.log(mos)
        chek = mos.filter(evlv => {
            return evlv.kr == el
        })
        //console.log(`chek ${chek}`)


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


    //const shpw = put_state.slice(0, 5);




    return (

        <View style={{
            backgroundColor: 'white',
            height: '100%'
        }}>
            <View style={{
                marginTop: '10%',
                marginLeft: '3%'
            }}>
                <Text style={{
                    marginLeft: 13,
                }}>
                    <Text style={{
                        fontSize: 22,
                        color: '#71A6E3',

                        fontWeight: 'bold'
                    }}>
                        알레르기
                    </Text>
                    <Text style={{
                        fontSize: 22,
                        color: '#545252',

                        fontWeight: 'bold'
                    }}>
                        성분을 알려주세요
                    </Text>
                </Text>
                <Text style={{
                    fontSize: 13,
                    color: '#545252',
                    marginLeft: 22,
                    marginTop: 10,

                    fontWeight: 'bold'
                }}>
                    마이페이지에서 변경 가능합니다.

                </Text>
            </View>
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


                            chekc == 11 && check_good() && < Componn vale={chek[0]}></Componn>

                        }
                        {
                            chekc == -1 && mos.map((el, index) => {
                                return < Componn key={index} vale={el}></Componn>
                            })

                        }




                    </View>



                </ScrollView>
            </View>
            < TouchableOpacity onPress={() => {

                navigation.navigate('ingredient');

            }

            }>
                <View style={{
                    backgroundColor: '#D2E6FF'
                    , width: '37%',
                    height: '23%',
                    borderRadius: 10,
                    marginTop: 19,
                    alignSelf: 'center',
                    alignContent: 'center'




                }}>
                    <Text style={{
                        fontSize: 19,
                        alignItems: 'center',
                        alignContent: 'center',
                        textAlign: 'center',
                        color: '#545252',
                        marginTop: '10%',
                        fontWeight: 'bold'
                    }}>
                        다음
                    </Text>
                </View>

            </TouchableOpacity>





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
export default fifth;