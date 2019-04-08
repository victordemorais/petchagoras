import React from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Home from "./screens/Home";
import TabBar from "./components/tab-bar";
import ProductDescription from "./screens/ProductDescription";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";


const MainRoutes = {
  Home: {
    screen: Home
  }
};

const bottomNavigator = createBottomTabNavigator(MainRoutes, {
  tabBarComponent: props => <TabBar {...props} />
});
const routes = {
  SignUp: {screen: SignUp},
  Home: { screen: bottomNavigator },
  ProductDescription: { screen: ProductDescription },
  Login: { screen: Login }
};



const StackNavigator = createStackNavigator(routes, {
  headerMode: "none",
  initialRouteName: "SignUp"
});
const Routes = createAppContainer(StackNavigator);

export default Routes;
