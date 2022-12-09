import { ScrollView, Text, View, StyleSheet, Image, Pressable, TextInput} from 'react-native';
import { articleStyle } from '../assets/const/style/styles';
import { EvilIcons, FontAwesome } from 'react-native-vector-icons';

export default function Article() {
    return (
      <ScrollView>
        <View style={articleStyle.view}>
        <Text style={articleStyle.text}>08:36 01.01.2022</Text>
        <Text style={articleStyle.iconView}>
          <EvilIcons name = 'eye' style={articleStyle.iconText}/>
        </Text>
        <Text style={articleStyle.viewingText}>32323</Text>
        </View>
        <View>
          <View>
            <Text style={articleStyle.titleText}>В Татарстане началось серийное производство внедорожника Aurus Komendant</Text>
          </View>
          <View>
            <Text style={articleStyle.articleSubtext}>Началось серийное производство российского люксового внедорожника Aurus Komendant</Text>
          </View>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('../assets/const/image/car.jpeg')} style={articleStyle.articleImage}/>
              <Text style={articleStyle.articleText}>МОСКВА, 28 ноя — ЧЕ Новости. На заводе в Елабуге, Татарстан, началось серийное производство российского внедорожника Aurus Komendant, сообщила</Text>
            </View>
            <Text style={articleStyle.articleText1}>компания-автопроизводитель.
            Доля отечественных компонентов достигла 70 процентов — это основные узлы автомобиля, силовая установка, коробка передач, 
            электроника, декоративные детали. Полноприводный внедорожник оснащают двигателем мощностью 598 лошадиных сил, а также 
            силовой электроустановкой. Доля отечественных компонентов достигла 70 процентов — это основные узлы автомобиля, 
            силовая установка, коробка передач, электроника, декоративные детали....</Text>
          </View>
          <View>
          <Text style={articleStyle.commText}>
            2 комментария
          </Text>
          
        </View>
        <View style={{flexDirection: 'row'}}>
          <Pressable>
            <Text style={articleStyle.commText1}>Новые</Text>
          </Pressable>
          <Pressable>
            <Text style={articleStyle.commText2}>Старые</Text>
          </Pressable>
        </View>
        <View style={articleStyle.commView}>
          <TextInput style = {articleStyle.commText3} placeholder="Введите комментарий...."></TextInput>
          <Pressable style={{flex: 1}}>
            <FontAwesome name='send' style={articleStyle.iconComm}/>
          </Pressable>
        </View>
        <View style={articleStyle.commView1}>
          <Text style={articleStyle.name}>Петр</Text>
          <Text style={articleStyle.commText4}>Машина просто огонь</Text>
          <Text style={articleStyle.timeText}>отправил минуту назад</Text>
        </View>
        </View>
      </ScrollView>
    );
  }