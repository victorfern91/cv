import {
  Document, Font, Page, PDFViewer, StyleSheet, Text, View,
} from '@react-pdf/renderer';
import React from 'react';

import info from './assets/info.json';
import loraFont from './assets/Lora-VariableFont_wght.ttf';
import openSansFont from './assets/OpenSans-VariableFont_wdth,wght.ttf';
import ItemHeader from './components/atoms/item-header.jsx';
import Header from './components/header';
import JobDescription from './components/molecules/job-description.jsx';
import SectionTitle from './components/section-title.jsx';
import { renderWithDividers } from './utils/render.jsx';

// Register font
Font.register({ family: 'Lora', src: loraFont });
Font.register({ family: 'Open Sans', src: openSansFont });

const styles = StyleSheet.create({
  root: {
    fontFamily: 'Open Sans',
    display: 'flex',
    color: '#6F7474',
    fontSize: 8,
    letterSpacing: 1,
    lineHeight: 1.6,
    textAlign: 'justify',
  },
  page: {
    padding: 60,
  },
});

function App() {
  return (
    <div>
      <PDFViewer height={1000} width={1800}>
        <Document style={styles.root}>
          <Page style={styles.page} size="A4" wrap>
            <Header />
            <Text>{info.welcoming_text}</Text>
            <SectionTitle>Work Experience</SectionTitle>
            {info.work.map((job, index, array) => renderWithDividers(
              <JobDescription key={job.start_date} job={job} />,
              index,
              array,
            ))}
            <View wrap={false}>
              <SectionTitle>Education</SectionTitle>
              {info.education.map((course, index, array) => renderWithDividers(<ItemHeader
                key={course.name}
                title={course.name}
                location={course.location}
                institutionName={course.school}
                startDate={course.start_date}
                endDate={course.end_date}
              />, index, array))}
            </View>
            <View>
              <SectionTitle>Extracurricular activities</SectionTitle>
              <Text>{info.extracurricular_activities}</Text>
            </View>
            <SectionTitle>Skills</SectionTitle>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default App;
