import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>New App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "ios" ? "#72bcd4" : "#ffffff",
    padding: 15,
    borderBottomColor: Platform.OS === "ios" ? "#ffffff" : "#72bcd4",
    borderBottomWidth: 1,
  },
  headerTitle: {
    marginTop: 40,
    textAlign: "center",
    fontSize: 20,
    color: Platform.OS === "ios" ? "#ffffff" : "#72bcd4",
  },
});

export default Header;
