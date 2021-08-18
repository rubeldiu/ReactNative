import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function PlaceDetail(props) {
  return (
    <Modal>
      <View>
        <Image
          source={{ uri: props.place.image }}
          style={{ width: "100%", height: 300 }}
        />
        <Text style={{ textAlign: "center", fontSize: 40 }}>
          {props.place.value}
        </Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => {
              props.handleDeleteItem(props.place.key);
            }}
          >
            <Icon name="trash" size={60} color="#900" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.handleHideModal()}>
            <Icon name="times" size={60} color="green" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
