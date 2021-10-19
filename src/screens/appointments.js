import React, { useEffect, useState } from "react";
import Header from "../components/header";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AppointmentsScreen() {
  return (
    <>
      <Header />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Appointments Screen!</Text>
      </View>
    </>
  );
}

export default AppointmentsScreen;
