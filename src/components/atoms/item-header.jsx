import { Text, View, Link } from '@react-pdf/renderer';
import React from 'react';

function ItemHeader({
  title, institutionName, institutionLink, location, startDate, endDate,
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
          {institutionLink ?
            (
              <Link src={institutionLink} style={{
                color: '#454A4E', textDecoration: 'underline'
              }}>
                {institutionName}
              </Link>
            ) :
            institutionName
          }
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
