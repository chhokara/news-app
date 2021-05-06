import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri:
              "https://user-images.githubusercontent.com/16916934/27370350-c82d1c44-5679-11e7-9147-2e8adeb4c515.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text>This is a dummy title</Text>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text>This is a dummy description</Text>
      </View>
    </View>
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
  },
  descriptionWrapper: {
    paddingHorizontal: 15,
  },
});

export default Card;
