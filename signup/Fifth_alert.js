

import React, { useState, useContext, useEffect } from "react"
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"


const Fifth_alert = function ({ term }) {
    console.log('여기 경고창', term);
    return (
        <View View style={style.background} >
            <Text style={style.font}>Error</Text>
        </View >
    )



}
const style = StyleSheet.create({
    font: {
        fontSize: 40,

        borderColor: "black"
    },

    border: {
        width: '90%',
        height: 50,
        borderColor: 'black',
        borderWidth: 3,
        margin: 10

    },
    background: {

        backgroundColor: 'white'
    }


})
export default Fifth_alert