// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StatusBar,SafeAreaView, StyleSheet, Text, View ,Platform  } from 'react-native';
import { theme } from './colors';
import Header from './Header';
import Footer from './Footer';
import First from './Pages/First';



export default function App() {

  
  const [first, setFirst] = useState(true); //처음 설치시

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
