import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Componn from "./signup/Componn";
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
import Enroll_page from "./Enroll_page/Enroll";
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
        first: first,
        second: second,
        nickname: nickname,
        fifth: fifth,
        ingredient: ingredient,
      }),
      Barcode: Barcode,
      Enroll: createStackNavigator({
        Enroll_page: Enroll_page,
        Barcode: Barcode,
      }),
      signup: createStackNavigator({
        Edit: Edit,
        first: first,
        second: second,
        fifth: fifth,
        final: final,
        nickname: nickname,
        ingredient: ingredient,
      }),
      Mypage_main: createStackNavigator({
        Mypage_main: Mypage_main,

      })
    }),
    Change_State: Change_State

  }
)





const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  )

}