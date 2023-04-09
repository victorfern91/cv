import { Text, View } from '@react-pdf/renderer';
import React from 'react';

import ItemHeader from '../atoms/item-header.jsx';

function JobDescription({ job }) {
  return (
    <View>
      <ItemHeader
        title={job.position}
        location={job.location}
        institutionName={job.company}
        startDate={job.start_date}
        endDate={job.end_date}
      />
      <View style={{ marginTop: 4 }}>
        {job.highlights.map((highlight) => (
          <View>
            <Text>{highlight.summary}</Text>
            {highlight.competences && (
            <View style={{ flexDirection: 'column', marginBottom: 2, marginTop: 4 }}>
              {highlight.competences.map((competence) => (
                <View
                  key={competence}
                  style={{
                    display: 'flex', flexDirection: 'row', marginBottom: 1, marginHorizontal: 10,
                  }}
                >
                  <Text style={{
                    fontSize: 5, fontWeight: 800, marginRight: 7, marginTop: 2,
                  }}
                  >
                    o
                  </Text>
                  <Text>{competence}</Text>
                </View>
              ))}
            </View>
            )}
            {highlight.technologies && (
            <View style={{ display: 'flex', marginBottom: 2, marginTop: 4 }}>
              <Text style={{ marginBottom: 4 }}>Technologies:</Text>
              <View style={{
                display: 'flex', flexDirection: 'row', gap: 4, alignContent: 'flex-start',
              }}
              >
                {highlight.technologies.map((technology) => (
                  <Text
                    style={{
                      fontSize: 7,
                      display: 'flex',
                      backgroundColor: '#6F7474',
                      color: 'white',
                      padding: '2px 8px',
                      justifyContent: 'center',
                      borderRadius: 8,
                      alignItems: 'center',
                    }}
                  >
                    {technology}
                  </Text>
                ))}
              </View>
            </View>
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

export default JobDescription;
