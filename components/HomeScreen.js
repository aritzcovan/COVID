import React, { useState } from "react";
import {
  Text,
  View,
  Picker,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { locationList } from "../helpers/pickerSource";
import { white, purple } from "../helpers/colors";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [selectedPlace, setSelectedPlace] = useState("global");
  const [usOnly, setUsOnly] = useState(false);
  const [btnText, setBtnText] = useState("United States Only");
  const screenWidth = Math.round(Dimensions.get("window").width);
  const screenHeight = Math.round(Dimensions.get("window").height) / 3;
  function onPress() {
    if (usOnly) {
      setBtnText("Show US only");

      setUsOnly(false);
      setSelectedPlace("global");
    } else {
      setBtnText("Show all locations");
      setUsOnly(true);
      setSelectedPlace("US");
    }
  }

  let locations = usOnly
    ? locationList.filter(loc => loc.indexOf("US") > -1)
    : locationList;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a location</Text>

      <TouchableOpacity
        style={[styles.iosButton, { width: 300 }]}
        onPress={onPress}
      >
        <Text style={styles.iosButtonText}>{btnText}</Text>
      </TouchableOpacity>
      <Picker
        style={[styles.picker, { height: screenHeight, width: 200 }]}
        selectedValue={selectedPlace}
        onValueChange={newValue => setSelectedPlace(newValue)}
      >
        {locations.map((location, i) => (
          <Picker.Item key={i} value={location} label={location} />
        ))}
      </Picker>

      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          style={[styles.iosButton]}
          onPress={() => {
            navigation.navigate("Stats", { location: selectedPlace, usOnly });
          }}
        >
          <Text style={styles.iosButtonText}>Stats</Text>
          <FontAwesome name="line-chart" size={30} color={purple} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iosButton]}
          onPress={() => {
            navigation.navigate("News", { location: selectedPlace });
          }}
        >
          <Text style={styles.iosButtonText}>News</Text>
          <FontAwesome name="newspaper-o" size={30} color={purple} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iosButton]}
          onPress={() => {
            navigation.navigate("About");
          }}
        >
          <Text style={styles.iosButtonText}>About</Text>
          <AntDesign name="question" size={25} color={purple} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1
  },
  button: {
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1
  },
  title: {
    fontSize: 24,
    padding: 20
  },
  iosButton: {
    width: 200,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 25
  },
  iosButtonText: {
    fontSize: 20
  },
  picker: {}
});
