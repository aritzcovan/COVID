import React from "react";
import { Text, View } from "react-native";
import styles from "../styles";

export default function LocationHeader({ location }) {

  if (location.countryOrRegion === null) {
    return (
      <Text style={[styles.historyScreenHeaderText, { fontWeight: "bold" }]}>
        {" "}
        Global
      </Text>
    );
  } else if (location.provinceOrState === null) {
    return (
      <Text style={[styles.historyScreenHeaderText, { fontWeight: "bold" }]}>
        {location.countryOrRegion}
      </Text>
    );
  } else {
    return (
      <Text style={[styles.historyScreenHeaderText, { fontWeight: "bold" }]}>
        {location.countryOrRegion} {" / "}
        {location.provinceOrState}
      </Text>
    );
  }
}
