
import React, { useState, useContext } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"
//simport '../assets/font' as Font from "expo-font";
import { Context } from '../contextv/DetailContext'

const Edit = function ({ navigation }) {
    const [id, setid] = useState('');
    const { tokevn } = useContext(Context);
    console.log(Context._currentValue.state.token);
    // const { logicalWidth, logicalHeight } = Dimensions.get('window')

    const [password, setpassword] = useState('');
    return (
        <View style={{
            position: 'relative', backgroundColor: 'white',
            height: '100 %'
        }} >
            <View style={{

                width: '100%',
                height: '30%',
                backgroundColor: '#D2E6FF'
            }}>
                <Text style={style.login}>
                    Login
                </Text>
            </View>
            <View>


                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 10,
                        borderColor: 'transparent',
                        borderWidth: 3,
                        marginTop: '10%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#D2E6FF',
                        //padding: 20,
                        fontSize: 10
                    }}
                    value={id}
                    placeholder="아이디를 입력해주세요"
                    placeholderTextColor={'#B9B9B9'}
                    autoCorrect={false}
                    onChangeText={(ele) => setid(ele)}>

                </TextInput>
                <TextInput
                    style={{
                        width: '86%',
                        height: '13%',
                        borderRadius: 10,
                        borderWidth: 3,
                        borderColor: 'transparent',
                        margin: 10,
                        justifyContent: 'center',
                        alignSelf: 'center',
                        backgroundColor: '#D2E6FF',
                        marginTop: 30,
                        // padding: 20,
                        fontSize: 10

                    }}
                    placeholder="비밀번호를 입력해 주세요 "
                    placeholderTextColor={'#B9B9B9'}
                    value={password}
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(ele) => setpassword(ele)}>

                </TextInput>
                <TouchableOpacity onPress={() => tokevn(id, password)}>

                    <View style={{
                        borderRadius: 15,
                        alignSelf: "center",
                        backgroundColor: '#D2D2D2',
                        width: '39%',
                        height: 37,
                        marginTop: '4%'
                    }}>



                        <Text style={style.bottm}>
                            로그인
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('first')}>
                    <Text style={style.bottmm}>
                        회원가입
                    </Text>
                </TouchableOpacity>





            </View>

        </View >


    )
}

const style = StyleSheet.create({
    border: {
        width: '86%',
        height: '15%',

        borderColor: 'black',
        borderWidth: 3,
        margin: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#D2E6FF'

    },
    login: {
        fontSize: 58,
        alignSelf: "center",
        color: '#7C7C7C',
        position: 'absolute',
        top: '35%',
        marginTop: '5%',
        // fontFamily: 'Mate-Regular'


    }, bottm: {
        //alignSelf: "center",
        //justifyContent: 'center',
        top: '13%',
        textAlign: 'center',
        alignContent: 'center',
        fontSize: 17,
        color: '#545252',
        // fontFamily: 'Roboto',

        marginTop: '4%'
    }, bottmm: {
        marginTop: 20,
        fontSize: 20,
        alignSelf: "center",
    }

})

export default Edit;