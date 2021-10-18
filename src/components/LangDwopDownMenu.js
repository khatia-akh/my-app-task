import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { strings, setLocale } from "../utils/localization/index";

const LangDropDownMenu = ({ language, setLanguage, dropdown, setDropdown }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setDropdown(!dropdown);
        }}
        style={styles.centerView}
      >
        <Text>{language}</Text>
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
  },
  centerView: {
    width: 120,
    height: 56,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#C6CACC",
    justifyContent: "center",
    alignItems: "center",
  },
  dropdownView: {
    // height: 80,
    width: 120,
    // backgroundColor: "aqua",
  },
});
