import { Pressable, Text, View, StyleSheet, TouchableOpacity, Imageб, Modal, TextInput, Button, Alert, Linking } from 'react-native';
import { bottomStyle, constStyle, feedbackStyle } from '../assets/const/style/styles';
import {Entypo, EvilIcons, } from 'react-native-vector-icons';
import { useState, useCallback } from 'react';

const VKurl = "https://vk.com/alexanderkorol0";
const YOUurl = "https://www.youtube.com/@windy31LetsGoodPlays";
const TGurl = "https://t.me/fox_garden"

export default function Footer() {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  return (
    <View style={bottomStyle.bottom}>
      <Modal 
      animationType="slide"
      transparent={true}
      visible={feedbackVisible}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setFeedbackVisible(!feedbackVisible);
      }}>
        <View style={feedbackStyle.feedbackView}>
          <Text style={constStyle.headerText}>Обратная связь</Text>
          <TextInput style={constStyle.textInput} placeholder='ФИО'></TextInput>
          <TextInput style={constStyle.textInput} placeholder='Номер телефона'></TextInput>
          <TextInput style={constStyle.textInput} placeholder='Почта'></TextInput>
          <TextInput style={constStyle.textInput} placeholder='Название новости'></TextInput>
          <TextInput style={feedbackStyle.feedbackTextInput} placeholder='Описание новости'></TextInput>
          <Pressable style={feedbackStyle.fileButton}>
            <EvilIcons name='paperclip' style={feedbackStyle.fileButtonIcon}/>
            <Text style={feedbackStyle.fileButtonText}>Прикрепить файл</Text>
          </Pressable>
          <View style={feedbackStyle.sendView}>
            <Pressable style={constStyle.button} onPress={() => setFeedbackVisible(!feedbackVisible)}>
              <Text style={constStyle.buttonText}>Отправить</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

        <View style={{flexDirection: 'row',}}>
        <Pressable onPress={() => setFeedbackVisible(true)} style={bottomStyle.button_2}>
          <Text style={bottomStyle.textBottom}>Связаться с нами</Text>
        </Pressable>
        <Pressable style={bottomStyle.button} onPress={() => Linking.openURL(VKurl)}>
          <Entypo name='vk' style={bottomStyle.iconBottom}/>
        </Pressable>
        <Pressable style={bottomStyle.button} onPress={() => Linking.openURL(YOUurl)}>
          <Entypo name='youtube' style={bottomStyle.iconBottom}/>
        </Pressable>
        <Pressable style={bottomStyle.button} onPress={() => Linking.openURL(TGurl)}>
          <EvilIcons name='sc-telegram' style={bottomStyle.iconTg}/>
        </Pressable>
        </View>
    </View>
  );
}
