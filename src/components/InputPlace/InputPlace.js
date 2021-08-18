import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import myImage from "../../../assets/images/launch_screen.png";

export default function InputPlace(props) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={{
          width: "100%",
          borderBottomWidth: 1,
          borderColor: "green",
          padding: 7,
        }}
        placeholder="Name of the place.."
        value={props.inputValue}
        onChangeText={(text) => props.setInputValue(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    marginTop: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
});
