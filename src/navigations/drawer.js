import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DrawerScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Drawer</Text>
    </View>
  );
};

export default DrawerScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
});
