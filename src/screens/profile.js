import React, { useEffect, useState } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../components/header";

const ProfileScreen = () => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>ProfileScreen!</Text>
      </View>
    </>
  );
};

export default ProfileScreen;
