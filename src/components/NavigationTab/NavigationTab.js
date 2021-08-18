import React from "react";
import Icons from "react-native-vector-icons/Ionicons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FindPlaces from "../FindPlaces/FindPlaces";
import SharedPlaces from "../SharedPlaces/SharedPlaces";
const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Find Places"
        component={FindPlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="md-map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shared Places"
        component={SharedPlaces}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icons name="arrow-redo" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
