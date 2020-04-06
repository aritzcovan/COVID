import React, { useCallback } from "react";
import { Text, View, Button, Linking, Alert } from "react-native";
import { formatDate } from "../helpers/helpers";
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

export default function NewsItem({ story }) {
  return (
    <View style={styles.item}>
      <OpenURLButton url={story.webUrl}>{story.title}</OpenURLButton>
      <Text style={styles.storyInfo}>
        {story.provider.name}
        :: {formatDate(story.publishedDateTime)}
      </Text>
    </View>
  );
}
