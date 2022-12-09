import { Pressable, Text, View, StyleSheet, TouchableOpacity, ImageBackground, Touchable, Image } from 'react-native';
import {Entypo, FontAwesome5} from 'react-native-vector-icons';
import { allNewsStyle } from '../assets/const/style/styles';


export default function News() {
    return (
    <TouchableOpacity style={allNewsStyle.allNewsView}>
        <Image source={require('../assets/const/image/news.png')} style={allNewsStyle.imageAllNews}>
        </Image>
        <Text style={allNewsStyle.textAllNews}>Что занимает больше всего места в памяти смартфона</Text>
        <Text style={allNewsStyle.dateAllNews}>08:36</Text>
    </TouchableOpacity>
    );
  }