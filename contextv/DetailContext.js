
//import { Commands } from "react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent";
import BigContext from "./BigContext";
import { AsyncStorage } from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";
import React, { useState, useContext, useEffect } from "react"
const initialstate = function (state, action) {

    switch (action.type) {
        case 'im_Si_item': {
            return [...state, {

                name: action.item.kr,
                company: action.item.company,
                src: action.item.src,
                item: action.item.item


                //number: Math.floor(Math.random() * 999)
            }]

        }
        case 'die': {
            state.length = 0;
            console.log(state)

        }

        case 'add_component':
            {
                console.log(action.item)

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

                id: action.id,
                password: action.password
            }]

        }


        case 'delete_all': {

            var hey = state
            console.log(hey)
            return state = [];
        }


    }

}

const die = (dispatch) => {

    return () => {
        dispatch({
            type: 'die'

        })

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

const im_Si_item = (dispatch) => {

    return (item) => {
        dispatch({
            type: 'im_Si_item',
            item: item

        })

    }

}


const tokevn = (dispatch) => {


    return (id, password) => {

        dispatch({

            type: 'tokevn',
            id: id,
            password: password

        })
    }



}

const delete_all = (dispatch) => {


    return () => {

        dispatch({

            type: 'delete_all',


        })
    }



}



export const { Context, Provider } = BigContext(initialstate, { delete_all, tokevn, die, im_Si_item, add_nickname, put_state, set_state, add_password, add_component, add_id }, []);