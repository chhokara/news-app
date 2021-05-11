import { StatusBar } from "expo-status-bar";
import React from "react";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";

const FavoritesScreen = ({ navigation }) => {
  const news = useSelector((state) => state.news);
  const { favorites } = news;
  return (
    <View>
      <FlatList
        data={favorites}
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
export default FavoritesScreen;
