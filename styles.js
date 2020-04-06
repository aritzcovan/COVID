import { Platform, StyleSheet } from "react-native";
import { white, purple } from "./helpers/colors";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#cc4b1a"
  },
  cell: {
    flex: 1,
    padding: 30
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    height: 40,
    backgroundColor: "tan"
  },
  headerText: {
    fontSize: 15,
    fontWeight: "bold"
  },
  tableText: {
    fontSize: 15,
    padding: 5
  },
  iosButton: {
    width: 250,
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
  historyScreenHeader: {
    padding: 5,
    marginTop: 30,
    marginBottom: 30
  },
  historyScreenHeaderText: {
    fontSize: 20,
    padding: 3,
    marginBottom: 14
  },
  button: {
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1
  },
  btnContainer: {
    alignItems: "center"
  },
  btnText: {
    fontSize: 18
  },
  tableHeader: {
    color: "black",
    height: 50,
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  item: {
    backgroundColor: white,
    borderRadius: Platform.OS === "ios" ? 16 : 2,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    justifyContent: "center",
    shadowRadius: 3,
    shadowOpacity: 0.8,
    shadowColor: "rgba(0,0,0,0.24)",
    shadowOffset: {
      width: 0,
      height: 3
    }
  },
  storyInfo: {
    marginTop: 20,
    fontSize: 15
  },
  noDataText: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20
  }
});
