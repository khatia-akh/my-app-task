import * as Localization from "expo-localization";

import i18n from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

import en from "./en.json";
import ru from "./ru.json";
// import { AsyncStorage } from 'react-native';

const currentLocale = Localization.locale;

i18n.fallbacks = true;
i18n.translations = { ru, en };
i18n.defaultLocale = "en";
i18n.locale = currentLocale.substring(0, currentLocale.indexOf("-"));

export const strings = (name, params = {}) => {
  return i18n.t(name, params);
};

export const setLocale = (locale) => {
  i18n.locale = locale;
  // setLanguage(locale);
};

export const getLocale = () => {
  return i18n.currentLocale();
};

export const chooseString = (strings) => {
  const locale = getLocale();
  const string = locale === "en" ? strings[0] : strings[1];
  return string;
};

export const setLanguage = async (lang) => {
  await AsyncStorage.setItem("lang", JSON.stringify(lang));
};

export const getLanguage = async () => {
  const lang = await AsyncStorage.getItem("lang");
  return JSON.parse(lang);
};
