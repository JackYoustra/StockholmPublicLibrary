import React from "react";
import { View, Text, Platform, StyleSheet, Button } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Your browser will automatically refresh as soon as you save the file."
});

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to my page on the Stockholm Public Library!
      </Text>
      <Text style={styles.instructions}>
        This is my page on the Stockholm Public Library. Click the links to learn more!
      </Text>
      <Button
        title="Basic info"
        onPress={() => navigation.navigate("Basic_info")}
      />
      <Button
        title="Interior of the building"
        onPress={() =>
          navigation.navigate("User", { name: "interior" })
        }
      />
      <Button
        title="Google Earth view"
        onPress={() =>
          navigation.navigate("User", { name: "googleearth" })
        }
      />
      <Button
        title="Video that features the building"
        onPress={() =>
          navigation.navigate("User", { name: "vidya" })
        }
      />
      <Button
        title="Photo Album"
        onPress={() =>
          navigation.navigate("User", { name: "album" })
        }
      />
      <Button
        title="Blog"
        onPress={() =>
          navigation.navigate("User", { name: "blog" })
        }
      />
      <Button
        title="Magazine or Journal Article"
        onPress={() =>
          navigation.navigate("User", { name: "magazine" })
        }
      />
      <Button
        title="Architect's Article"
        onPress={() =>
          navigation.navigate("User", { name: "architect" })
        }
      />
      <Button
        title="Full bibliography"
        onPress={() =>
          navigation.navigate("User", { name: "bibliography" })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default HomeScreen;
