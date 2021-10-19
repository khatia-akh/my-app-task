import * as React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
// import Logo from "../../../assets/icons/ORANGE-DS-LOGO.png";
import Logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgCont}>
        <Image style={styles.img} resizeMode="contain" source={Logo} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: 90,
    backgroundColor: "#CE86F0",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 20,
  },
  imgCont: {
    height: 30,
    width: 300,
  },
  img: { width: "100%", height: "100%" },
});
