import { Pressable, Text, View, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Button, ScrollView, } from 'react-native';
import { headerStyle, registrationStyle, termsOfUseStyle, constStyle, authorizationStyle, menuStyle} from '../assets/const/style/styles';
import {Entypo, EvilIcons,FontAwesome5, AntDesign} from 'react-native-vector-icons';
import React, { Profiler, useState } from "react";
import CheckBox from '../component/comp/CheckBox';



export default function Header() {

  const [TermsOfUse, setTermsOfUse] = useState(false);
  const [TermsOfUse1, setTermsOfUse1] = useState(false);
  const [authorization, setAuthorization] = useState(false);
  const [registrationVisible, setRegistrationVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View style={headerStyle.header}>

      //МЕНЮШКА
      <Modal
      animationType="slide"
      transparent={true}
      visible={menuVisible}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setMenuVisible(!menuVisible);
      }}>
        <View style={menuStyle.menuView}> 
        <View style ={menuStyle.menuName}>
          <Pressable onPress={() => setMenuVisible(!menuVisible)} style={menuStyle.closeButton}>
            <View style={menuStyle.buttonLine_1}></View>
              <View style={menuStyle.buttonLine_2}></View>
              <View style={menuStyle.buttonLine_3}></View>
            <Text></Text>
          </Pressable>
          <Text style={menuStyle.menuText}>Меню</Text>
          </View>
        <View
          style={menuStyle.line}/>
          <View>
          <View style={menuStyle.buttonView}>
            <Pressable style={menuStyle.button} onPress={() => setAuthorization(true) || setMenuVisible(!menuVisible)}>
              <Image source={require('../assets/const/image/input.png')} style={menuStyle.buttonImage}></Image>
              <Text style={menuStyle.buttonText}>Вход</Text>
            </Pressable>
          </View>
          <View style={menuStyle.buttonView}>
            <Pressable style={menuStyle.button}>
              <Image source={require('../assets/const/image/home.png')} style={menuStyle.buttonImage}></Image>
              <Text style={menuStyle.buttonText}>Главная</Text>
            </Pressable>
          </View>
          <View style={menuStyle.buttonView}>
            <Pressable style={menuStyle.button}>
              <Image source={require('../assets/const/image/about.png')} style={menuStyle.buttonImage}></Image>
              <Text style={menuStyle.buttonText}>О нас</Text>
            </Pressable>
          </View>
        </View>
        </View>
      </Modal>


      //АВТОРИЗАЦИЯ
      <Modal
      animationType="slide"
      transparent={true}
      visible={authorization}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setAuthorization(!authorization);
      }}>
        <View style={authorizationStyle.authorizationView}>
          <Text style={constStyle.headerText}>Авторизация</Text>
          <TextInput 
          style={constStyle.textInput} 
          placeholder="Email/Логин" 
          ></TextInput>
          <TextInput 
          style={constStyle.textInput} 
          placeholder="Пароль" 
          secureTextEntry={true}
          ></TextInput>
          <View style={authorizationStyle.authorizationButtonView}>
          <Pressable onPress={handleSubmit(onSignInPressed)} style={constStyle.button}>
            <Text style={constStyle.buttonText}>Вход</Text>
          </Pressable>
          <Pressable>
            <Text style={constStyle.text} onPress={() => setAuthorization(!authorization) || setRegistrationVisible(true)}>У Вас нет аккаунта? Зарегестрируйтесь</Text>
          </Pressable>
        </View>
        </View>
      </Modal>


      //ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ
      <Modal
      animationType="slide"
      transparent={true}
      visible={TermsOfUse1}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setTermsOfUse1(!TermsOfUse1);
      }}>
        <View style={termsOfUseStyle.termsOfUseView}>
          <Text style={termsOfUseStyle.termsOfUseText}>Пользовательское соглашения</Text>
          <View style={termsOfUseStyle.termsOfUseScroll}>
            <ScrollView>
              <Text style = {termsOfUseStyle.termsOfUseTxt_h1}>1. Общие условия пользовательского соглашения</Text>
              <Text style = {termsOfUseStyle.termsOfUseTxt_h2}>1.1. В настоящем документе и вытекающих или связанным с ним отношениях Сторон применяются следующие термины и определения:</Text>
              <Text style = {termsOfUseStyle.termsOfUseTxt_h3}>а) Платформа — программно-аппаратные средства, интегрированные с Сайтом Администрации; 
              {"\n"}б) Пользователь — дееспособное физическое лицо, присоединившееся к настоящему Соглашению в собственном интересе либо выступающее от имени и в интересах представляемого им юридического лица.
              {"\n"}в) Сайт Администрации/ Сайт — интернет-сайты, размещенные в домене http:// источник и его поддоменах.
              {"\n"}г) Сервис — комплекс услуг и лицензия, предоставляемые Пользователю с использованием Платформы.
              {"\n"}д) Соглашение - настоящее соглашение со всеми дополнениями и изменениями.</Text>
              <Text style = {termsOfUseStyle.termsOfUseTxt_h2}>1.2. Использование вами Сервиса любым способом и в любой форме в пределах его объявленных функциональных возможностей, включая:</Text>
              <Text style = {termsOfUseStyle.termsOfUseTxt_h3}>просмотр размещенных на Сайте материалов;
              {"\n"} -регистрация и/или авторизация на Сайте,
              {"\n"} -размещение или отображение на Сайте любых материалов, включая но не ограничиваясь такими как: тексты, гипертекстовые ссылки, изображения, аудио и видео- файлы, сведения и/или иная информация,
              {"\n"} -создает договор на условиях настоящего Соглашения в соответствии с положениями ст.437 и 438 Гражданского кодекса Российской Федерации.</Text>
            </ScrollView>
          </View>
        </View>
        <Pressable onPress={() => setTermsOfUse1(!TermsOfUse1)} 
        style = {termsOfUseStyle.termsOfUseButton}>
          <Text style={constStyle.buttonText}>Закрыть</Text>
          </Pressable>
      </Modal>
      

      //РЕГИСТРАЦИЯ
      <Modal 
      animationType="fade"
      transparent={true}
      visible={registrationVisible}
      onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      setRegistrationVisible(!registrationVisible);
      }}>
      <View style={registrationStyle.registrationView}>
        <Text style={constStyle.headerText}>Регистрация</Text>
        <TextInput 
        style={constStyle.textInput}
        placeholder="Email"></TextInput>
        <TextInput 
        style={constStyle.textInput} 
        placeholder="Логин"></TextInput>
        <TextInput 
        style={constStyle.textInput} 
        placeholder="Пароль"
        value={password}></TextInput>
        <View style={registrationStyle.viewCheckBox}>
          <CheckBox
          onPress={() => setTermsOfUse(!TermsOfUse)}
          isChecked={TermsOfUse}
          style = {{left: 20}}
          />
          <Pressable onPress={() => setTermsOfUse1(true)}>
            <Text style={registrationStyle.textCheckBox}>Принятие пользовательского соглашения</Text>
          </Pressable>
        </View>
        <View style={registrationStyle.registrationButtonView}>
          <Pressable onPress={() => setRegistrationVisible(!registrationVisible)} style={constStyle.button}>
            <Text style={constStyle.buttonText}>Зарегестрироваться</Text>
          </Pressable>
          <Pressable onPress={() => setRegistrationVisible(!registrationVisible) || setAuthorization(true)}>
            <Text style={constStyle.text}>У Вас есть аккаунт? Авторизуйтесь</Text>
          </Pressable>
        </View>
      </View>  
    </Modal>


      //ЗАГОЛОВОК
      <Pressable style={headerStyle.buttonHeader} 
      onPress={() => setMenuVisible(true)}>
        <View style={headerStyle.buttonLine_1}></View>
        <View style={headerStyle.buttonLine_2}></View>
        <View style={headerStyle.buttonLine_3}></View>
      </Pressable>
      <Image
        style={headerStyle.logoHeader}
        source={require('../assets/const/image/logo.png')}
      />
      <Text style={headerStyle.nameHeader}>ЧЕ Новости</Text>
      <Pressable>
        <FontAwesome5 name = 'search' style={headerStyle.searchHeader}/>
      </Pressable>
    </View>
  );
}

