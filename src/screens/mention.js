import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Mention = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Mention</Text>
    </View>
  );
}

export default Mention
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