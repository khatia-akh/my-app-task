import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LangDropDownMenu from "../components/LangDwopDownMenu";
import { strings, setLocale } from "../utils/localization/index";
import {
  TextInputForm,
  NumsInputForm,
  DropDownInputForm,
} from "../components/textInputForms";

import CheckBox from "../components/checkbox";

const ProfileScreen = () => {
  const [language, setLanguage] = useState("EN");
  const [dropdown, setDropdown] = useState(false);

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bodyTemperature, setBodyTemperature] = useState("");
  const [hasCovid, setHasCovid] = useState(false);

  function onCheckmarkPress() {
    setHasCovid(!hasCovid);
  }
  console.log("--------------------********************", bloodType);
  const onSave = () => {
    console.log("save");
  };

  useEffect(() => {}, [language]);
  return (
    <View style={{ flex: 1, paddingHorizontal: 30 }}>
      <Text style={{ marginVertical: 30 }}>{strings("observation")}</Text>
      <LangDropDownMenu
        language={language}
        setLanguage={setLanguage}
        dropdown={dropdown}
        setDropdown={setDropdown}
      />
      <TextInputForm
        name={name}
        onChangeText={(txt) => setName(txt)}
        placeholder={strings("clickAndType")}
      />
      <NumsInputForm />
      <DropDownInputForm bloodType={bloodType} setBloodType={setBloodType} />
      <NumsInputForm
        bodyTemperature={bodyTemperature}
        onChangeText={(txt) => setBodyTemperature(txt)}
        placeholder={strings("clickAndType")}
      />

      <Text>Home!</Text>
      <Text>{strings("welcome")}</Text>

      <CheckBox onPress={onCheckmarkPress} hasCovid={hasCovid} />

      <TouchableOpacity onPress={onSave}>
        <Text>{strings("save")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
