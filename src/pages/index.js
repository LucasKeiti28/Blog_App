import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";

import BlogContext from "../context/BlogContext";

const Index = () => {
  const { data, addBlogPosts } = useContext(BlogContext);

  return (
    <View>
      <Text>Index</Text>
      <Button title="Add Post" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
