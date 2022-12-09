import { Pressable, Text, View, StyleSheet, TouchableOpacity, ImageBackground, Touchable, Image } from 'react-native';
import { newsStyle} from '../assets/const/style/styles';
import {Entypo, FontAwesome5} from 'react-native-vector-icons';



export default function NewsDay() {
    return (
        <View style={newsStyle.newsView}>
            <View>
            <TouchableOpacity>
            <ImageBackground source={require('../assets/const/image/news.png')} 
            style={newsStyle.imageNews}>
                <Text style={newsStyle.textNews}>Вышла новая модель айфона 13. </Text>
                <Text style={newsStyle.textNews1}>Сколько будет стоить новый телефон? Какая в нем характеристика?</Text>
                <Text style={newsStyle.timeText}>08:37</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity>
                <ImageBackground source={require('../assets/const/image/reklama.png')}
                style={newsStyle.reklamaNews}>
                </ImageBackground>
            </TouchableOpacity>
            </View>
        </View>
    );
  }


  