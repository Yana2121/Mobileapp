import { Pressable, Text, View, StyleSheet, TouchableOpacity, ImageBackground, Touchable, Image } from 'react-native';
import {Entypo, FontAwesome5} from 'react-native-vector-icons';
import Svg, {Circle, Ellipse, G, TSpan, TextPath, Path, Polygon, Polyline, Line, Rect, Use, Symbol, Defs, LinearGradient, RadialGradient, Stop, ClipPath, Pattern, Mask,} from 'react-native-svg';

export default function Description() {
    return (
        <View>
            <View style={{width: '101%', height: 215, left: -1, backgroundColor: '#FF5C5C', borderBottomRightRadius: 30,}}>
                <Text style={{width: 100, height: 45, left: '3%', fontWeight: 'bold', fontSize: 36, lineHeight: 53, textAlign: 'center', color: '#FFFFFF',}}>О нас</Text>
                <Text style={{width: 345, height: 20, left: '5%', top: '3%', fontWeight: 'bold', fontSize: 14,lineHeight: 21, color: '#ffffff'}}>Наш сайт работает с 2022 года.</Text>
                <Text style={{width: 340, height: 128, left: '5%', top: '8%', fontWeight: 'bold', fontSize: 14,lineHeight: 21, color: '#ffffff'}}> Мы дорожим каждым клиентом, поэтому высокое качество сервиса - приоритет для нас. Вы всегда можете задать интересующие вас вопросы в онлайн-режиме или по телефону и получить подробную консультанцию.</Text>
            </View>
            <View style={[styles.box, {transform: [{ rotate: "45deg" }]}]}>
                
            </View>
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    scrollContentContainer: {
      alignItems: "center",
      paddingBottom: 60
    },
    box: {
      height: 100,
      width: 100,
      borderRadius: 5,
      marginVertical: 40,
      backgroundColor: "#61dafb",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 14,
      fontWeight: "bold",
      margin: 8,
      color: "#000",
      textAlign: "center"
    }
  });
  
  export default App;