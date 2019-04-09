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
import Contato from "./screens/Contato";


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
  Login: { screen: Login },
  Contato: { screen: Contato }
};

const StackNavigator = createStackNavigator(routes, {
  headerMode: "none",
  initialRouteName: "Contato"
});
const Routes = createAppContainer(StackNavigator);

export default Routes;
