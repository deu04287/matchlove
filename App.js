// import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View ,Platform  } from 'react-native';
import { theme } from './colors';
import Header from './Header';
import Footer from './Footer';
import First from './Pages/First';


const HAS_LAUNCHED = 'hasLaunched';

function setAppLaunched() {
  AsyncStorage.setItem(HAS_LAUNCHED, 'truely');
}
const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('HAS_LAUNCHED', 'true')
  } catch (e) {
    // saving error
  }
}
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('HAS_LAUNCHED')
    if(value !== null) {
      // value previously stored
    }
  } catch(e) {
    // error reading value
  }
}

export default function App() {
  const [first, setFirst] = useState(true); //처음 설치시
  // AsyncStorage.setItem('HAS_LAUNCHED', 'sdfsasdf');
  storeData();
  // AsyncStorage.clear();
  // console.log("234");
  // console.log(setAppLaunched());
  // console.log(getData());
  // AsyncStorage.setItem('nickname','User2');

  AsyncStorage.getItem('HAS_LAUNCHED', (err, result) => {
    console.log(result); // User1 출력
  });


  if(first === true){
    return (
        <First/>
    );
  }
  else if(first === false){
    return(
      <View style={{flex: 1}}>
      <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
      
      <View style={styles.header}>
        <Header/>
      </View>

      <View style={styles.body}>
        <Text>Open{StatusBar.currentHeight} up App.js king on your app!</Text>
      </View>

      <View style={styles.footer}>
        <Footer/>
      </View>
    </View>
    );
  }

  else{
    return(
      <View>
        <Text>error</Text>        
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  body: {
    flex: 10 ,
    backgroundColor: "#bbb",
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex: 0.5 ,backgroundColor: theme.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 0.8 ,backgroundColor: "#fff"
    ,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
