import React, { useCallback } from "react";
import { View, Text, Button, Linking } from "react-native";
import styles from "../styles";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    //check link
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert("Unable to open selected link");
    }
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
};

export default function AboutScreen() {
  const theUrl = "https://smartable.ai/apps/coronavirus/";
  const linkText = "SMARTABLE.AI";

  return (
      <View style={[styles.item, {alignItems: 'flex-start'}]}>
      <Text style={[styles.storyInfo, { paddingBottom: 2 }]}>
        COVID-19 Tracker was created by Alex Ritzcovan to help keep people up to
        date with information related to the COVID-19 pandemic of 2020.
      </Text>
      <OpenURLButton url="http://www.medium.com/@aritzcovan" >Contact App Creator</OpenURLButton>
      <Text style={{paddingTop: 25}}>
        All statistic and news are provided by {linkText} and their great free
        COVID-19 data API. Thank you {linkText}!
      </Text>
      <OpenURLButton url={theUrl}>{linkText}</OpenURLButton>
    </View>
  );
}
