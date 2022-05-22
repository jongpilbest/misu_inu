
//import { Commands } from "react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent";
import BigContext from "./BigContext";
//import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import token from "../component/token";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react"
const initialstate = function (state, action) {

    switch (action.type) {

        case 'add_component':
            {


                return [...state, {

                    name: action.item.name,
                    check: action.item.check,
                    kr: action.item.kr

                    //number: Math.floor(Math.random() * 999)
                }]

            }
        case 'add_id': {

            return [...state, {

                id: action.id
            }]

            // console.log(state)
        }
        case 'input_password': {
            return [...state, {

                password: action.pasv
            }]

        }
        case 'set_state': {
            var index = -1;

            for (var i = 0; i < state.length; i++) {
                if (state[i].name == action.setid) {
                    index = i;

                    break;

                }
            }


            //console.log(index, state[index]);
            if (index >= 0) {
                var fr = state[index];
                fr['here'] = 1;
                // console.log(fr);
            }
            // console.log(state)
        }

        case 'put_state': {
            //console.log(state);
            // console.log("소스케짱")
            return state;

        }
        case 'add_nickname': {
            return [...state, {

                nickname: action.nickname
            }]

        }
        case 'tokevn': {
            return [...state, {

                token: action.payload
            }]

        }





    }

}

const add_component = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_component', item: item,

        })

    }

}

const add_id = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_id', id: item
        })

    }

}
const add_password = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'input_password', pasv: item
        })

    }

}
const add_nickname = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'add_nickname', nickname: item
        })

    }

}
const set_state = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'set_state',
            setid: item

        })

    }

}

const put_state = (dispatch) => {

    return () => {
        dispatch({
            type: 'put_state'

        })

    }

}




const tokevn = (dispatch) => {

    return async (id, password) => {
        console.log('TOKEDN', id, password)
        const bol_check = 0;


        try {
            axios.post("http://182.215.108.120:5000/auth/login", {
                useId: id,
                password: password
            })
                .then((response) => {
                    if (response) {
                        console.log('?? first');
                        console.log(response.data)
                        bol_check = (response.data);

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
        catch (err) {
            console.log(err.message);

        }
        console.log(bol_check);
        await AsyncStorage.setItem('token', bol_check.token);
        dispatch({


            type: 'tokevn',
            payload: bol_check.token

        })

    }

}



export const { Context, Provider } = BigContext(initialstate, { tokevn, add_nickname, put_state, set_state, add_password, add_component, add_id }, []);