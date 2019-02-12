import React from "react";
import { Text, View, Button } from "react-native";

class DasModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 30 }}>
          Jack Youstra. Proudly, and late at night.
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

export default DasModalScreen;
