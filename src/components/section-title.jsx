import { Text } from '@react-pdf/renderer';
import React from 'react';

function SectionTitle({ children, noMarginTop }) {
  return (
    <Text style={{
      marginTop: noMarginTop ? 0 : 20,
      marginBottom: 20,
      textAlign: 'center',
      textTransform: 'uppercase',
      fontSize: 10,
    }}
    >
      {children}
    </Text>
  );
}

export default SectionTitle;
