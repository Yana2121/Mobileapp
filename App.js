import Header from './title/Header';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import NewsDay from './component/NewsDay';
import News from './component/News';
import Article from './component/Article';
import Description from './component/Description';
import Profile from './component/Profile';
import Footer from './title/Footer';

export default function App() {
  return (
    <ScrollView>
      <Header/>
      <NewsDay/>
      <ScrollView>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
        <News/>
      </ScrollView>
      <Footer/>
    </ScrollView>
  );
}