import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { checkBoxStyle } from "../../assets/const/style/styles";

const CheckBox = (props) => {
    const iconName = props.isChecked ?
    "check-circle-outline" : "checkbox-blank-circle-outline";
  
    return (
        <View style={checkBoxStyle.container}>
            <Pressable onPress={props.onPress} style={checkBoxStyle.checkBox}>
                <MaterialCommunityIcons 
                    name={iconName} size={24} color="#000" />
            </Pressable>
        </View>
    );
};
  
export default CheckBox;
