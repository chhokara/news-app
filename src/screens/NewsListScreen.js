import { StatusBar } from "expo-status-bar";
import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import { View, Text, StyleSheet } from "react-native";

const NewsListScreen = ({ navigation }) => {
  return (
    <View>
      <Card navigation={navigation} />
      <StatusBar style={styles.status} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default NewsListScreen;
