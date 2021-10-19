import React, { useState, useContext } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { strings } from "../utils/localization/index";

const CheckBox = ({ onPress, hasCovid }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Pressable
        style={[styles.checkboxBase, hasCovid && styles.checkboxChecked]}
        onPress={onPress}
      >
        {hasCovid && <Ionicons name="checkmark" size={24} color="white" />}
      </Pressable>
      <Text style={styles.checkboxTxt}>{strings("coronavirus")}</Text>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#9FA1AD",
    backgroundColor: "transparent",
    marginRight: 20,
  },

  checkboxChecked: {
    backgroundColor: "#2196F3",
  },

  appContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },

  appTitle: {
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 24,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxLabel: {
    marginLeft: 8,
    // fontWeight: 500,
    fontSize: 18,
  },
  checkboxTxt: {
    color: "#000000",
    fontSize: 14,
    lineHeight: 19,
    maxWidth: 300,
  },
});
