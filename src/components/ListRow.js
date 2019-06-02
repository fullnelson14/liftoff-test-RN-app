import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class ListRow extends Component {
  render() {
    return (
      <View styles={styles.rowstyle}>
        <Text styles={styles.number}>{this.props.index}</Text>
        <View styles={styles.Shopinfo}>
          <Text> {this.props.name} </Text>
          <Text styles={styles.Address}> {this.props.address} </Text>
        </View>
        <Text styles={styles.infobutton}>Info</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Shopinfo: {
    flexDirection: "column",
    flex: 8
  },
  Address: {
    color: "grey"
  },
  rowstyle: {
    flexDirection: "row",
    padding: 50
  },
  infobutton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
