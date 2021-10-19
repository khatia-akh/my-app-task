import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { strings } from "../utils/localization/index";

import DropDownIcon from "../../assets/Vector.png";

export const TextInputForm = ({ onChangeText, name, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      onChangeText={onChangeText}
      value={name}
    />
  );
};

export const NumsInputForm = ({
  onChangeText,
  value,
  placeholder,
  keyboardType,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType={keyboardType}
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export const DropDownInputForm = ({ setBloodType, bloodType }) => {
  const [visible, setvisible] = useState(false);
  // const [bloodType, setBloodType] = useState("");

  const MenuItem = ({ text }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setBloodType(text);
          setvisible(false);
        }}
        style={styles.dropDownItems}
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ zIndex: 1000 }}>
      <TouchableOpacity
        keyboardType="numeric"
        style={styles.textInput}
        onPress={() => {
          setvisible(true);
        }}
      >
        <Text>{bloodType ? bloodType : strings("selectGroup")}</Text>
        <View style={styles.dropdownIconView}>
          <Image style={styles.img} source={DropDownIcon} />
        </View>
      </TouchableOpacity>

      {visible && (
        <View style={styles.dropDownItemsContainer}>
          <MenuItem text="blood group A" />
          <MenuItem text="blood group B" />
          <MenuItem text="blood group O" />
          <MenuItem text="blood group AB" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  textInput: {
    // width: 200,
    height: 50,
    // backgroundColor: "aqua",
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    flexDirection: "row",
  },
  dropDownItemsContainer: {
    width: "100%",
    // height: 100,
    // backgroundColor: "orange",
    position: "absolute",
    zIndex: 1000,
    top: 60,
  },
  dropDownItems: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    padding: 10,
  },
  img: { width: "100%", height: "100%" },
  dropdownIconView: {
    width: 15,
    height: 15,
    marginTop: 8,
    marginLeft: 10,
  },
});
