import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { formatNum, formatDate } from "../helpers/helpers";

function HistoryItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.tableText}>{formatDate(props.item.date)}</Text>
      <Text style={styles.tableText}> {formatNum(props.item.confirmed)}</Text>
      <Text style={styles.tableText}> {formatNum(props.item.deaths)}</Text>
      <Text style={styles.tableText}>{formatNum(props.item.recovered)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tableText: {
    fontSize: 15,
    padding: 5
  }
});

export default HistoryItem;
