import React from "react";
import Home from "./screens/Home";

import ProductDescription from "./screens/ProductDescription";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBar from "./components/tab-bar";
import Login from "./screens/Login";

const MainRoutes = {
  Home: {
    screen: Home
  }
};

const bottomNavigator = createBottomTabNavigator(MainRoutes, {
  tabBarComponent: props => <TabBar {...props} />
});
const routes = {
  Home: { screen: bottomNavigator },
  ProductDescription: { screen: ProductDescription },
  Login: { screen: Login }
};



const StackNavigator = createStackNavigator(routes, {
  headerMode: "none",
  initialRouteName: "Login"
});
const Routes = createAppContainer(StackNavigator);

export default Routes;
