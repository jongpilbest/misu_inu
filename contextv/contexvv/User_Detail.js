
//import { Commands } from "react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent";
import BigBigContext from "./BigBigContext";


import React, { useState, useContext, useEffect } from "react"
const initialstate = function (state, action) {

 switch (action.type) {
  case 'set_user_hy': {
   return [...state, {

    id: action.item


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

    token: action.payload
   }]

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

const set_user_hy = (dispatch) => {

 return (item) => {
  dispatch({
   type: 'set_user_hy',
   item: item

  })

 }

}

/*
const tokevn = (dispatch) => {


    return (item) => {

        dispatch({

            type: 'tokevn',
            payload: item;

        })
    }



}
*/


export const { Context, Provider } = BigBigContext(initialstate, { set_user_hy, die, add_nickname, put_state, set_state, add_password, add_component, add_id }, []);