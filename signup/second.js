import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text, Alert } from "react-native"

import { Context } from '../contextv/DetailContext'

var id = 0;

const second = function ({ navigation }) {
    const { add_password } = useContext(Context);
    const [password, setpassword] = useState("");


    const go_go_opacity = function () {

        if (password.length == 0) {
            return {
                opacity: 0,

            }

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



    var re = /^[a-z0-9_-]{2,10}$/;

    const checkcorrct = function (el) {



        if (!re.test(password)) {

            return false;
        }

        if (re.test(password)) {

            return 1;
        }

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
                    비밀번호를 입력해주세요
                </Text>
            </View>

            <TextInput
                style={style.border}
                value={password}
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(ele) => setpassword(ele)}

            >
            </TextInput>

            {
                !checkcorrct(password) && <Text style={go_go_opacity()}>
                    다시 입력해주세요!
                </Text>
            }


            < TouchableOpacity onPress={() => {
                if (checkcorrct(password) == 1) {
                    add_password(password)


                    navigation.navigate('fifth'
                    )
                }

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


export default second;