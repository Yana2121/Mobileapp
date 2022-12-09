import { ScrollView, Text, View, StyleSheet, Button, TouchableOpacity, Pressable, Image } from 'react-native';
import { profileStyle } from '../assets/const/style/styles';

export default function Profile() {
    return (
        <View>
        <View style={profileStyle.avatarView}>
            <View style={profileStyle.avatar} >
             <Image source={require('../assets/const/image/ava.png')} style={profileStyle.avatarImage}></Image>
            </View>
            <Pressable 
            style={profileStyle.avatarButton}>
             <Text>Изменить аватарку</Text>
            </Pressable>
        </View>
        <View  style={profileStyle.nameView}>
            <Text style={profileStyle.nameText}>Петров Петр Петрович</Text>
        </View>
        <View  style={profileStyle.registrationView}>
            <Text style={profileStyle.text}>Дата регистрации: </Text>
            <Text style={profileStyle.text}>01.01.2022</Text>
        </View>
        <View  style={profileStyle.birthdayView}>
            <Text style={profileStyle.text}>Дата рождения: </Text>
            <Text style={profileStyle.text}>01.01.2022</Text>
        </View>
        <View  style={{borderRadius: 15, borderColor: '#5AB0FF', borderWidth: 3, width: '100%', top: 34, height: 33, flexDirection: 'row'}}>
            <Text style={profileStyle.text}>Личный сайт: </Text>
            <Text style={profileStyle.text}>vk.com/c0metome</Text>
        </View>
        <View  style={profileStyle.aboutMyself}>
            <Text style={profileStyle.text}>О себе:</Text>
        </View>
        </View>
    );
  }