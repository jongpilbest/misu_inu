


import React, { useState, useContext, useEffect, useRef } from "react"
import { View, Image, TextInput, TouchableOpacity, Button, StyleSheet, Text } from "react-native"

import { Context } from "../contextv/DetailContext";

var hey = -1;




const Componn = function ({ vale }) {
    console.log(`vale ${vale}`)
    var [num, setnum] = useState(0);

    //var imagepath = require(`${vale.image}`)

    // let imagepath = require( vale.image )
    const { check_corrct } = useContext(Context);

    const onpress = () => setnum((pre) => pre + 1);

    const goto = function () {

        if (num == 2) {


            // check_one(1, vale.name);   context 사용해서 여기에서 바꾸는 걸로 한다.
            // 이때 check 를 바꿔야 하니 매개별수를 같이 넣어서 .. = 이름+ 매개변수 
            console.log('ERROR MISU CHECK')
            vale.check = 0;
            console.log(vale)

            setnum(0);
            return (
                {
                    backgroundColor: '#D2D2D2',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 30,
                    padding: 0,
                    borderRadius: 20,

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

                    backgroundColor: '#D2E6FF',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,

                    flexDirection: "row",

                }
            )
        }


        else if (vale.check == 1) {

            return (

                {

                    backgroundColor: '#D2E6FF',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,
                    flexDirection: "row",

                }
            )
        }




        else if (num == 0) {
            //check_corrct(vale.name, 0);
            return (
                {

                    backgroundColor: '#D2D2D2',
                    width: 89,
                    height: 100,
                    marginTop: 10,
                    marginLeft: 20,
                    padding: 0,
                    borderRadius: 20,
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
                <View style={{
                    width: '100%',
                    height: '80%',

                    justifyContent: 'center',


                }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#545252',
                        fontWeight: 'bold',
                        marginLeft: 4,
                        marginTop: 0



                    }}>  {vale.kr}</Text>

                </View>




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



export default Componn