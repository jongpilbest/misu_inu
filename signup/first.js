

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
import { Context } from '../contextv/DetailContext'


import axios from "axios"

const valuev = [

    {
        name: 'wheat',
        check: 0,
        kr: '밀가루'
    },

    {
        name: 'milk',
        check: 0,
        kr: '우유'

    }
    , {
        name: 'buckwheat',
        check: 0,
        kr: '메밀'

    },
    {
        name: 'peanut',
        check: 0,
        kr: '땅콩'

    },
    {
        name: 'soybean',
        check: 0,
        kr: '콩'

    }
    , {
        name: 'mackerel',
        check: 0,
        kr: '고등어'


    }
    , {
        name: 'crab',
        check: 0,
        kr: '게'


    }, {
        name: 'shrimp',
        check: 0,
        kr: '새우'

    }, {
        name: 'pork',
        check: 0,
        kr: '돼지 고기'

    }, {
        name: 'peach',
        check: 0,
        kr: '복숭아'

    }, {
        name: 'tomato',
        check: 0,
        kr: '토마토'

    }, {
        name: 'walnut',
        check: 0,
        kr: '땅콩'
    }, {
        name: 'chicken',
        check: 0,
        kr: '닭'

    }, {
        name: 'beef',
        check: 0,
        kr: '쇠고기'

    }, {
        name: 'squid',
        check: 0,
        kr: '오징어'

    }, {
        name: 'shellfish',
        check: 0,
        kr: '조개'


    },
    {
        name: 'egg',
        check: 0,
        kr: '달걀'


    },
    {
        name: 'natrium',
        check: 0,
        kr: '나트륨'


    },
    {
        name: "carbohydrates",
        check: 0,
        kr: '탄수화물'

    }, {
        name: "sugar",
        check: 0,
        kr: '당류'

    },
    {

        name: "fat",
        check: 0,
        kr: '지방'


    }
    , {
        name: 'trans_fat',
        check: 0,
        kr: '트랜스지방'

    },
    {
        name: "saturated_fat",
        check: 0,
        kr: '포화지방'
    },
    {
        name: "cholesterol",
        check: 0,
        kr: '콜레스테롤'

    },
    {
        name: "protein",
        check: 0,
        kr: '단백질'

    },
    {
        name: "calorie",
        check: 0,
        kr: '칼로리'

    },



]


const first = function ({ navigation }) {

    const [id, setid] = useState("");
    const [checkhey, setcheck] = useState(10);


    // var userId = Math.floor(Math.random() * 10);
    const { add_component, add_id, die } = useContext(Context)
    const z = 1;

    const go_go_opacity = function () {

        if (id.length == 0) {
            return { opacity: 0 }
        }
        else {
            return {
                fontSize: 15,
                color: '#71A6E3',
                fontWeight: 'bold',
                marginLeft: '50%'
            }
        }
    }








    const check_id = function () {


        axios.post("http://182.215.108.120:5000/auth/checkUserId", {
            userId: id
        })
            .then((response) => {
                if (response) {
                    console.log('?? first');
                    console.log(response.data)
                    setcheck(response.data);

                    //setUser(response);
                } else {
                    alert("failed to ");
                }
            }).catch((err) => {
                console.log(err.message);
                console.log(err)
                console.log('?');
            });





    }
    const check = function () {

        if (checkhey == true) {
            console.log('1 맞냐고')
            return false;

        }
        else
            return true;



    }


    return (
        <View style={{
            backgroundColor: 'white',
            height: '100%'
        }}>
            <View style={{
                marginTop: '30%',
                marginLeft: '3%'

            }}>
                <Text style={{

                    fontSize: 20,
                    color: '#545252',
                    marginLeft: 15,
                    fontWeight: 'bold'


                }}>
                    아이디를 입력해주세요
                </Text>
            </View>


            <TextInput
                style={style.border}
                value={id}
                autoCorrect={false}
                onChangeText={(ele) => setid(ele)}
                onSubmitEditing={() => check_id()}>
            </TextInput>
            {!check() && <Text style={go_go_opacity()}>
                존재하는 아이디 입니다.
            </Text>}
            < TouchableOpacity onPress={() => {


                if (id.length >= 0) {
                    if (checkhey == false) {

                        die();
                        for (var i = 0; i < valuev.length; i++) {

                            // console.log(valuev[i])
                            add_component(valuev[i]);
                            navigation.navigate('nickname');

                        }
                        add_id(id);


                    }







                }

                for (var i = 0; i < valuev.length; i++) {

                    // console.log(valuev[i])
                    add_component(valuev[i]);
                    navigation.navigate('nickname');

                }
                add_id(id);
            }}>
                <View style={{
                    backgroundColor: '#D2E6FF'
                    , width: '37%',
                    height: '11%',
                    borderRadius: 10,
                    marginTop: '80%',
                    marginLeft: '60%'
                    //marginTop: '40%'


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

export default first;
