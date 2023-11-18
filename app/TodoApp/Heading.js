import {View, Text, StyleSheet} from "react-native";

import React from 'react'

const Heading = () => (
  <View styles={styles.header}>
    <Text style={styles.headerText}>todos</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  }
})

export default Heading;
