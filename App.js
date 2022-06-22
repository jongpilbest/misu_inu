import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "./contextv/DetailContext";
import indexScreen from "./component/indexScreen";
import Edit from "./component/Edit";

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
const navigator = createAppContainer(createBottomTabNavigator({
  main: createStackNavigator({
    index: indexScreen,
    Barcode: Barcode,
    Item_list: Item_list,
    Item_inner: Item_inner,

  }),
  Barcode: Barcode,
  signup: createStackNavigator({
    Edit: Edit,
    first: first,
    second: second,
    fifth: fifth,
    final: final,
    nickname: nickname,
    ingredient: ingredient,
  }),
  mypage: createStackNavigator({
    Mypage_main: Mypage_main
  })

  /*
 main: createStackNavigator({
   index: indexScreen,
   Barcode: Barcode,
   Item_list: Item_list,
   Item_inner: Item_inner,

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
 mypage: createStackNavigator({
   Mypage_main: Mypage_main
 })
*/

})
);





const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  )

}