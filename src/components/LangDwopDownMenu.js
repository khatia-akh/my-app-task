import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import { strings, setLocale } from "../utils/localization/index";
import EN from "../../assets/en.png";
import RU from "../../assets/ru.png";
import DropDownIcon from "../../assets/Vector.png";

const LangDropDownMenu = ({ language, setLanguage, dropdown, setDropdown }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setDropdown(!dropdown);
        }}
        style={styles.centerView}
      >
        <View style={styles.imgView}>
          <Image style={styles.img} source={language == "EN" ? EN : RU} />
        </View>
        <Text>{language}</Text>
        <View style={styles.dropdownIconView}>
          <Image style={styles.img} source={DropDownIcon} />
        </View>
      </TouchableOpacity>
      {dropdown && (
        <View style={styles.dropdownView}>
          <TouchableOpacity
            onPress={() => {
              setLocale(language == "EN" ? "ru" : "en");
              setLanguage(language == "EN" ? "RU" : "EN");
              setDropdown(false);
            }}
            style={styles.centerView}
          >
            <View style={styles.imgView}>
              <Image style={styles.img} source={language == "EN" ? RU : EN} />
            </View>
            <Text>{language == "EN" ? "RU" : "EN"}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() => {
              setLocale("ru");
              setLanguage("RU");
              setDropdown(false);
            }}
            style={styles.centerView}
          >
            <Text>RU</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
};

export default LangDropDownMenu;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 200,
  },
  centerView: {
    width: 120,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#C6CACC",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    flexDirection: "row",
  },
  dropdownView: {
    // height: 80,
    width: 120,
    // backgroundColor: "aqua",
  },
  imgView: {
    width: 42,
    height: 31,
    marginRight: 5,
  },
  img: { width: "100%", height: "100%" },
  dropdownIconView: {
    width: 15,
    height: 15,
    marginTop: 8,
    marginLeft: 10,
  },
});
