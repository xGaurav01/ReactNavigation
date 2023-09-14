import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const DirectMessages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello DM</Text>
    </View>
  );
}

export default DirectMessages
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