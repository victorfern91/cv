import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

import info from '../assets/info.json';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: '20px 0 30px 0',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  logo: {
    fontFamily: 'Lora',
    fontSize: 16,
    color: '#454A4E',
    letterSpacing: 3,
    fontWeight: 'bold',
  },
  text: {
    padding: 4,
  },
});

function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>{info.name}</Text>
      <Text style={styles.text}>
        {info.location}
        {' '}
        •
        {' '}
        {info.phone}
        {' '}
        •
        {' '}
        {info.email}
      </Text>
    </View>
  );
}

export default Header;
