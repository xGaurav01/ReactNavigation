import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnMenu} onPress={()=>navigation.openDrawer()}>
        <Ionicons name="menu" color="black" size={30} />
      </TouchableOpacity>
      <View style={{justifyContent:'center',flex:1}}>
        <Text style={styles.text}>Hello Home</Text>
      </View>
    </View>
  );
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  btnMenu:{
    marginTop:10,
    marginLeft:5,
    
  }
});