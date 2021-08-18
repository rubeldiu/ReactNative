import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-redux";
import Store from "./src/redux/store";
import Login from "./src/components/Login/Login";
import NavigationTab from "./src/components/NavigationTab/NavigationTab";
import { navigationRef, navigate } from "./src/NavigationRoot";
import Icons from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={Store}>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="Places"
            component={NavigationTab}
            options={{
              headerLeft: null,
              headerRight: () => (
                <TouchableOpacity
                  onPress={() => {
                    navigate("Login");
                  }}
                >
                  <Icons
                    name="power-off"
                    size={26}
                    style={{ paddingRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
