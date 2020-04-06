import React from "react";
import { formatNum, formatDate } from "../helpers/helpers";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default CountyNumbersScreen = ({ navigation, route }) => {
  const { records } = route.params;

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.tableHeader}>
        <Text style={[styles.headerText, { flex: 2 }]}>County</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Confirmed</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Deaths</Text>
        <Text style={[styles.headerText, { flex: 1 }]}>Recovered</Text>
      </View>
      <ScrollView>
        {records.stats.breakdowns.map((item, idx) => (
          <View style={styles.container} key={idx}>
            <Text style={[styles.tableText, { flex: 2 }]}>
              {item.location.county}
            </Text>
            <Text style={[styles.tableText, { flex: 1 }]}>
              {formatNum(item.totalConfirmedCases)}
            </Text>
            <Text style={[styles.tableText, { flex: 1 }]}>
              {formatNum(item.totalDeaths)}
            </Text>
            <Text style={[styles.tableText, { flex: 1 }]}>
              {formatNum(item.totalRecoveredCases)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tableText: {
    fontSize: 15,
    padding: 5
  },
  tableHeader: {
    color: "black",
    height: 50,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#DDDDDD",
    alignItems: "center"
  },
  headerText: {
    fontSize: 12,
    fontWeight: "bold"
  }
});
