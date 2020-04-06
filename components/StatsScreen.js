import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { getStats } from "../helpers/utils";
import {
  formatNum,
  formatDate,
  formatStatString,
  percentIncrease
} from "../helpers/helpers";
import styles from "../styles";
import LocationHeader from "./LocationHeader";

export default StatsScreen = ({ navigation, route }) => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { location, usOnly } = route.params;

  useEffect(() => {
    getStats(location)
      .then(records => {
        setRecords(records["data"]);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [location]);

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        size="large"
      />
    );
  }

  return (
    <View style={{  flex: 1 }}>
      <ScrollView>
        <View style={styles.historyScreenHeader}>
          <Text
            style={[styles.historyScreenHeaderText, { fontWeight: "bold" }]}
          >
            As of: {formatDate(records.updatedDateTime)}
          </Text>

          <LocationHeader location={records.location} />

          <View style={styles.item}>
            <Text style={styles.historyScreenHeaderText}>
              Confirmed cases: {formatNum(records.stats.totalConfirmedCases)}
            </Text>
            <Text style={styles.historyScreenHeaderText}>
              Chg from yesterday: {formatStatString(records.stats.newlyConfirmedCases)}
              {" / "}
              {percentIncrease(
                records.stats.newlyConfirmedCases,
                records.stats.totalConfirmedCases
              )}
              %
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.historyScreenHeaderText}>
              Total deaths: {formatNum(records.stats.totalDeaths)}
            </Text>
            <Text style={styles.historyScreenHeaderText}>
              Chg from yesterday: {formatStatString(records.stats.newDeaths)}
              {" / "}
              {percentIncrease(
                records.stats.newDeaths,
                records.stats.totalDeaths
              )}
              %
            </Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.historyScreenHeaderText}>
              Total recovered: {formatNum(records.stats.totalRecoveredCases)}
            </Text>

            <Text style={styles.historyScreenHeaderText}>
              Chg from yesterday: {formatStatString(records.stats.newlyRecoveredCases)}
              {" / "}
              {percentIncrease(
                records.stats.newlyRecoveredCases,
                records.stats.totalRecoveredCases
              )}
              %
            </Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("DailyNumbers", { records })}
            style={styles.iosButton}
          >
            <Text style={styles.btnText}>Daily Totals</Text>
          </TouchableOpacity>
          {location.indexOf('US-') > -1 && (
            <TouchableOpacity
              onPress={() => navigation.navigate("CountyNumbers", { records })}
              style={styles.iosButton}
            >
              <Text style={styles.btnText}>Numbers by County</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
