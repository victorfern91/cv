import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  container: {
    margin: '40px 0 20px',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 10,
  },
});

function SectionTitle({ children }) {
  return <Text style={styles.container}>{children}</Text>;
}

export default SectionTitle;
