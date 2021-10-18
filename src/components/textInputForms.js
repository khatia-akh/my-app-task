import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Button,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { strings } from "../utils/localization/index";

export const TextInputForm = ({ onChangeText, name, placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{ width: 200, height: 50, backgroundColor: "aqua", marginTop: 10 }}
      onChangeText={onChangeText}
      value={name}
    />
  );
};

export const NumsInputForm = ({
  onChangeText,
  bodyTemperature,
  placeholder,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      keyboardType="numeric"
      style={{ width: 200, height: 50, backgroundColor: "aqua", marginTop: 10 }}
      onChangeText={onChangeText}
      value={bodyTemperature}
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
      >
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ zIndex: 1000 }}>
      <TouchableOpacity
        keyboardType="numeric"
        style={{
          width: 200,
          height: 50,
          backgroundColor: "aqua",
          marginTop: 10,
          justifyContent: "center",
        }}
        onPress={() => {
          setvisible(true);
        }}
      >
        <Text>{bloodType ? bloodType : strings("selectGroup")}</Text>
      </TouchableOpacity>
      {visible && (
        <View
          style={{
            width: 200,
            height: 100,
            backgroundColor: "orange",
            position: "absolute",
            zIndex: 1000,
            top: 60,
          }}
        >
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
});
