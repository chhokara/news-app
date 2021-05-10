import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const Card = ({ navigation, image, title, description }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("NewsDetails")}>
      <View style={styles.card}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>
            {title.length > 25 ? title.slice(0, 25) + "..." : title}
          </Text>
          <MaterialIcons name="favorite-border" size={24} color="#72bcd4" />
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 10,
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
  title: {
    fontFamily: "Ubuntu-Bold",
    fontSize: 20,
  },
  description: {
    fontFamily: "Ubuntu",
    fontSize: 15,
    marginTop: 10,
  },
});

export default Card;
