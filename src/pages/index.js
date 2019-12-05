import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";

import BlogContext from "../context/BlogContext";

const Index = () => {
  const value = useContext(BlogContext);

  return (
    <View>
      <Text>Index</Text>
      <Text>{value}</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
