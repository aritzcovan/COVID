import React from "react";
import { Text, View, Button, ScrollView } from "react-native";
import HistoryItem from "./HistoryItem";
import styles from "../styles";

export default DailyNumbersScreen = ({ navigation, route }) => {
  const { records } = route.params;
  return (
    <View>
      <View style={{backgroundColor: 'white'}}>
        <View style={styles.tableHeader}>
          <Text style={[styles.headerText, { flex: 2 }]}>Date</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Confirmed</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Deaths</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Recovered</Text>
        </View>
        <ScrollView>
          {records.stats.history.reverse().map((item, idx) => (
            <HistoryItem key={idx} item={item} />
          ))}
        </ScrollView>
      </View>
      <Button onPress={() => navigation.navigate("Home")} title="Home" />
    </View>
  );
};
