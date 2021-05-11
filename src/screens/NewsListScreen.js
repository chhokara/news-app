import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import Card from "../components/Card";
import { View, Text, StyleSheet, FlatList } from "react-native";
import * as newsAction from "../redux/actions/newsAction";

const NewsListScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const news = useSelector((state) => state.news.articles);
  const { articles } = news;

  useEffect(() => {
    dispatch(newsAction.fetchArticles());
  }, [dispatch]);

  console.log(articles);

  return (
    <View>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <Card
            navigation={navigation}
            title={item.title}
            description={item.description}
            image={item.urlToImage}
            url={item.url}
          />
        )}
      />
      <StatusBar style={styles.status} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default NewsListScreen;
