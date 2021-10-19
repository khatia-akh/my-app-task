import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppointmentsScreen from "../screens/appointmentsScreen";
import ProfileScreen from "../screens/profileScreen";
import DiagnosticsScreen from "../screens/diagnosticsScreen";
import Logo from "../../assets/Logo.png";

import { Text, Image, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // headerShown: false,
          headerTitle: () => (
            <View style={styles.imgCont}>
              <Image style={styles.img} resizeMode="contain" source={Logo} />
            </View>
          ),
          headerStyle: {
            backgroundColor: "#CE86F0",
          },
        }}
      >
        <Tab.Screen name="Appointment" component={AppointmentsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Diagnostics" component={DiagnosticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: "#CE86F0",
    justifyContent: "center",
    alignItems: "center",
  },
  imgCont: {
    height: 30,
    width: 300,
  },
  img: { width: "100%", height: "100%" },
});
