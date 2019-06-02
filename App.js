import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RestaurantList from "components/RestaurantList";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={{ fontSize: 40, textAlign: "center" }}>
            This is way sweet.
          </Text>
          <Text>Hello there.</Text>
        </View>
        <RestaurantList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    paddingTop: 10
  }
});
