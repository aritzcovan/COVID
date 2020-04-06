import React from "react";
import { Text } from "react-native";
import numeral from "numeral";

import moment from "moment";

export function formatDate(dateString) {
  return moment.utc(dateString).format("L");
}

export function formatNum(number) {
  return number === 0 ? 0 : numeral(number).format(0, 0);
}

export function formatStatString(number) {
  if (number === 0) {
    return <Text>{`${formatNum(number)}`}</Text>;
  } else if (number > 0) {
    return <Text>{`+ ${formatNum(number)}`}</Text>;
  } else {
    return <Text>{`- ${formatNum(number)}`}</Text>;
  }
}

export function percentIncrease(newCases, totalCases) {
  if ((newCases || totalCases) === 0) {
    return 0;
  }
  let p1 = newCases / (totalCases - newCases);
  return parseFloat(p1 * 100).toFixed(2);
}

