
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
            // console.log(hey)
            return state = [];
        }
        case 'create_arr': {
            state = [];
            state = action.arr;
            console.log('???')
            console.log(state)
            return state;
        }


        case 'creat_index': {
            var d = [];
            console.log('도대체시발')
            console.log(action.arr);


            for (var i = 0; i < action.arr.length; i++) {
                d.push(action.arr[i]);


            }
            console.log('d find');
            console.log(d)
            state = [];
            state = d;



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

        axios.post("http://14.39.156.197:5000/auth/login", {

            "userId": id,
            "password": password


        })
            .then((response) => {
                if (response) {
                    console.log('?? first');
                    console.log(response.data)
                    //setcheck(response.data);

                    //setUser(response);
                } else {
                    alert("failed to ");
                }
            }).catch((err) => {
                console.log(err.message);
                console.log(err)
                console.log('?');
            });


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

const create_arr = (dispatch) => {


    return (arr) => {
        console.log('?!미수')
        console.log(arr)

        dispatch({

            type: 'create_arr',
            arr: arr

        })
    }



}
const creat_index = (dispatch) => {


    return (arr) => {

        dispatch({

            type: 'creat_index',
            arr: arr

        })
    }



}


export const { Context, Provider } = BigContext(initialstate, { creat_index, delete_all, tokevn, die, im_Si_item, add_nickname, put_state, set_state, create_arr, add_password, add_component, add_id }, []);