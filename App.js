import { createAppContainer } from "react-navigation";

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
const navigator = createStackNavigator({
  index: indexScreen,
  Edit: Edit,
  first: first,
  second: second,
  fifth: fifth,
  final: final,
  nickname: nickname,
  Barcode: Barcode,
  ingredient: ingredient,
  Item_list: Item_list,
  Item_inner: Item_inner

}, {
  initialRouteName: 'index'

})





const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App></App>
    </Provider>
  )

}