import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  contentContainer: {},
  image: {
    width: null,
    height: 100,
  },
  flatListContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
    marginRight: 30,
  },
  infoContainer: {
    justifyContent: "space-between",
  },
  avatarContainer: {
    flexDirection: "row",
    marginHorizontal: 40,
  },
  reactContainer: {
    flexDirection: "row",
  },
  footerContainer: {
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  countsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 30,
  },
  countContainer: {
    alignItems: "center",
  },
  followButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    backgroundColor: "#4771f6",
    borderRadius: 50,
    padding: 10,
    width: 100,
    height: 40,
  },
  directMessageButton: {
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    alignItems: "center",
    backgroundColor: "#78d5fa",
    borderRadius: 25,
    padding: 10,
    width: 50,
    height: 40,
  },
  flatList: {},
  imageWrapper: {
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  job: {
    fontSize: 15,
    fontWeight: "500",
    color: "grey",
  },
});

export default Styles;
