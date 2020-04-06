import React, { useEffect, useState } from "react";
import { View, ScrollView, ActivityIndicator, Text } from "react-native";
import { getNews } from "../helpers/utils";
import NewsItem from "./NewsItem";
import styles from "../styles";
import { Entypo } from "@expo/vector-icons";

export default NewsScreen = ({ navigation, route }) => {
  const [stories, setStories] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { location } = route.params;
  useEffect(() => {
    getNews(location)
      .then(stories => {
        setStories(stories["data"]["news"]);
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

  if (stories.length === 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={[styles.item]}>
          <Entypo name="emoji-sad" size={50} />
          <Text style={styles.btnText}>
            Sorry! No news available for the selected location
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View>
      <ScrollView>
        {stories.map((story, idx) => (
          <NewsItem key={idx} story={story} />
        ))}
      </ScrollView>
    </View>
  );
};
