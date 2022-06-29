import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./contextv/DetailContext";
import indexScreen from "./component/indexScreen";
import Edit from "./component/Edit";
import Change_State_2 from "./Mypage/Change_State.js/Change_State_2";
import first from "./signup/first";
import second from "./signup/second";
import fifth from "./signup/fifth";
import final from "./signup/fian";
import ingredient from "./signup/ingredient";
import nickname from "./signup/nickname";

import Barcode from "./component/barCode";
import Item_list from "./Item/Item_list";
import Item_inner from "./Item/Item_inner";
import Mypage_main from "./Mypage/Mypage_main";
import Change_State from "./Mypage/Change_State.js/Change_state";

const navigator = createSwitchNavigator(

  {
    Profile: createBottomTabNavigator({
      main: createStackNavigator({
        index: indexScreen,
        Barcode: Barcode,
        Item_list: Item_list,
        Item_inner: Item_inner,


      }),
      Item_inner: Item_inner,
      signup: createStackNavigator({
        Edit: Edit,
        first: first,
        second: second,
        fifth: fifth,
        final: final,
        nickname: nickname,
        ingredient: ingredient,
      }),

      Mypage_main: Mypage_main,





    }),
    good: createMaterialTopTabNavigator({
      Change_State: Change_State,
      Change_State_2: Change_State_2

    })
  }
);





const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  )

}