import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Here, you'll find the basic info for the app!</Text>
      <Button
        title="Most basic facts"
        onPress={() => navigation.navigate("User", { name: "basic" })}
      />
      <Button
        title="Purpose and stakeholders"
        onPress={() =>
          navigation.navigate("User", { name: "purpose" })
        }
      />
      <Button
        title="Plans of the building"
        onPress={() =>
          navigation.navigate("User", { name: "plans" })
        }
      />
      <Button
        title="Exterior photographs of the building"
        onPress={() =>
          navigation.navigate("User", { name: "exterior" })
        }
      />
      <Button
        title="Library print sources"
        onPress={() =>
          navigation.navigate("User", { name: "print" })
        }
      />
      <Button
        title="Drawing"
        onPress={() =>
          navigation.navigate("User", { name: "drawing" })
        }
      />
      <Button
        title="Who made this?"
        onPress={() => navigation.navigate("DasModal")}
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

export default SecondScreen;
