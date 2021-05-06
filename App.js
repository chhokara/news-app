import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Card from "./src/components/Card";
import Header from "./src/components/Header";
export default function App() {
  return (
    <View>
      <Header />
      <Card />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
