import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import ListRow from "./ListRow";

const restaurants = [
  { name: "Bobs burgers", address: "123 Easy Street" },
  { name: "Meemah Cafe", address: "456 Brotha Blvd" },
  { name: "Muffin Man", address: "897 Dreary Ln" },
  { name: "YoStreet", address: "654 Yo St" }
];

export default class RestaurantList extends Component {
  render() {
    return (
      <View>
        {restaurants.map((shoprow, index) => {
          return (
            <View
              key={shoprow.name}
              styles={{
                flexDirection: "row",
                backgroundColor: index % 2 === 0 ? "#666679" : "orange"
              }}
            >
              <ListRow
                index={index + 1}
                name={shoprow.name}
                address={shoprow.address}
              />
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
