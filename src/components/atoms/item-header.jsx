import { Text, View } from '@react-pdf/renderer';
import React from 'react';

function ItemHeader({
  title, institutionName, location, startDate, endDate,
}) {
  return (
    <View>
      <Text style={{
        textTransform: 'uppercase', fontSize: 9, color: '#454A4E',
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
