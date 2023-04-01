import { Text, View } from '@react-pdf/renderer';
import React from 'react';

function ItemHeader({
  title, institutionName, location, startDate, endDate,
}) {
  return (
    <View wrap={false}>
      <Text style={{
        textTransform: 'uppercase', fontSize: 9, letterSpacing: 1.5, fontWeight: '900',
      }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: 'row', marginBottom: 4, justifyContent: 'space-between' }}>
        <Text>
          {institutionName}
          {' '}
          /
          {' '}
          {location}
          {' '}
        </Text>
        <Text>
          {startDate}
          {' '}
          —
          {' '}
          {endDate}
          {' '}
        </Text>
      </View>
    </View>
  );
}

export default ItemHeader;
