import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Index from "./src/pages/index";
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
