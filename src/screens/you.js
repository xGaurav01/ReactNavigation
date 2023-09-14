import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const You = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello You</Text>
    </View>
  );
};

export default You;
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
