import { Text, View, Link, Image } from '@react-pdf/renderer';
import React from 'react';

function ItemHeader({
  title, institutionName, institutionLink, location, startDate, endDate, logo
}) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', gap: 4, marginBottom: 0 }}>
      {logo && (<Image source={`./${logo}`} width={20} height={20} style={{ borderRadius: 4, width: 20, margin: 3 }} />)}
      <View style={{ flex: 1 }}>
        <Text style={{
          textTransform: 'uppercase', fontSize: 9, color: '#454A4E',
        }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
      {/*<Text style={{
            textTransform: 'uppercase', fontSize: 9, color: '#454A4E',
          }}
          >
            {title}
          </Text>
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
            </Text>*/}
      {/*<Text style={{
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
      </View>*/}
    </View>
  );
}

export default ItemHeader;
