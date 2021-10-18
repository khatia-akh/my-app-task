import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppointmentsScreen from "../screens/appointments";
import ProfileScreen from "../screens/profile";
import DiagnosticsScreen from "../screens/diagnostics";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Appointment" component={AppointmentsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Diagnostics" component={DiagnosticsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
