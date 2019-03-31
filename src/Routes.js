import React from "react";
import Home from "./screens/Home";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import TabBar from "./components/tab-bar";

const MainRoutes = {
  Home: {
    screen: Home
  }
};

// const StackNavigator = createStackNavigator(MainRoutes, {
//   headerMode: "none",
//   initialRouteName: "Home"
// });
const bottomNavigator = createBottomTabNavigator(MainRoutes, {
  tabBarComponent: props => <TabBar {...props} />
});
const Routes = createAppContainer(bottomNavigator);

export default Routes;
