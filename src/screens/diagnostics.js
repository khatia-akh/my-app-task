import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import LangDropDownMenu from "../components/LangDwopDownMenu";
import { strings, setLocale } from "../utils/localization/index";
import {
  TextInputForm,
  NumsInputForm,
  DropDownInputForm,
} from "../components/textInputForms";
import Header from "../components/header";

import CheckBox from "../components/checkbox";

import { useSelector, useDispatch } from "react-redux";
import { updateDiagnosState } from "../reducers/diagnosticSlice";

const DiagnosticsScreen = () => {
  const diagnos = useSelector((state) => state.diagnostic.value);
  const dispatch = useDispatch();

  const [language, setLanguage] = useState("EN");
  const [dropdown, setDropdown] = useState(false);

  const [data, setData] = useState({});

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [bodyTemperature, setBodyTemperature] = useState("");
  const [hasCovid, setHasCovid] = useState(false);

  function onCheckmarkPress() {
    setHasCovid(!hasCovid);
  }
  const onSave = () => {
    name == "" || birthDate == "" || bloodType == "" || bodyTemperature == ""
      ? alert("fill all fields")
      : !birthDateRgx(birthDate)
      ? alert("enter the correct date (dd/mm/yyyy)")
      : (dispatch(
          updateDiagnosState({
            name,
            birthDate,
            bloodType,
            bodyTemperature,
            hasCovid,
          })
        ),
        alert("saved"),
        setName(""),
        setBirthDate(""),
        setBloodType(""),
        setHasCovid(false),
        setBodyTemperature(""));
  };

  const birthDateRgx = (birhD) => {
    var birthRgx =
      /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;

    if (birthRgx.test(birhD)) {
      return true;
    } else {
      return false;
    }
  };
  console.log("data-********************->", diagnos);

  useEffect(() => {}, [language]);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.title}>{strings("observation")}</Text>
        {/* <Text style={styles.inputTitle}>{strings("name")}</Text> */}
        <LangDropDownMenu
          language={language}
          setLanguage={setLanguage}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        <Text style={styles.inputTitle}>{strings("name")}</Text>

        <TextInputForm
          name={name}
          onChangeText={(txt) => setName(txt)}
          placeholder={strings("clickAndType")}
        />
        {/* {name == "" ? <Text>empty</Text> : null} */}
        <Text style={styles.inputTitle}>{strings("birthday")}</Text>

        <NumsInputForm
          value={birthDate}
          onChangeText={(txt) => setBirthDate(txt)}
          placeholder={"dd/mm/yyyy"}
          keyboardType="default"
        />
        <Text style={styles.inputTitle}>{strings("bloodType")}</Text>

        <DropDownInputForm bloodType={bloodType} setBloodType={setBloodType} />
        <Text style={styles.inputTitle}>{strings("bodyTemperature")}</Text>

        <NumsInputForm
          value={bodyTemperature}
          onChangeText={(txt) => setBodyTemperature(txt)}
          placeholder={strings("clickAndType")}
          keyboardType="numeric"
        />

        <View style={styles.checkBoxView}>
          <CheckBox onPress={onCheckmarkPress} hasCovid={hasCovid} />
        </View>

        <View style={{ alignItems: "flex-end" }}>
          <TouchableOpacity onPress={onSave} style={styles.button}>
            <Text style={styles.btnTxt}>{strings("save")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default DiagnosticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 23,
  },
  title: {
    marginVertical: 33,
    marginRight: 150,
    fontSize: 20,
    lineHeight: 23,
    color: "#000000",
    textAlign: "center",
  },
  inputTitle: {
    fontSize: 15,
    lineHeight: 18,
    color: "#000000",
    marginTop: 16,
  },
  checkBoxView: {
    marginVertical: 28,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginVertical: 10,
  },
  btnTxt: {
    color: "#fff",
    fontSize: 16,
  },
});
