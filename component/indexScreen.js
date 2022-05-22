
import React, { useContext, useEffect } from "react";
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from "react-native";

import { Context } from '../contextv/DetailContext'



const indexScreen = ({ navigation }) => {


    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                <Text style={{ fontSize: 40 }}>
                    Login
                </Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Barcode')}>
                <Text style={{ fontSize: 40 }}>
                    바코드
                </Text>


            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Item_list')}>
                <Text style={{ fontSize: 40 }}>
                    아이템 리스트
                </Text>


            </TouchableOpacity>


        </View >
    )
}

const style = StyleSheet.create({


})
export default indexScreen;