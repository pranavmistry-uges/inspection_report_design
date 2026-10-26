import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { tableOfContents } from '../../data/reportData';

const contentsStyles = StyleSheet.create({
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderRadius: 2,
    overflow: 'hidden',
  },
  headerRow: {
    backgroundColor: '#dbeafe',
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    paddingVertical: 9,
    paddingHorizontal: 14,
  },
  headerText: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
  },
  row: {
    paddingVertical: 9,
    paddingHorizontal: 14,
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
  },
  rowText: {
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#1e293b',
  },
});

const PdfPage2Contents = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        <Text style={[pdfStyles.sectionTitle, { fontSize: 12, marginBottom: 8 }]}>CONTENTS:</Text>
        <View style={contentsStyles.table}>
          <View style={contentsStyles.headerRow}>
            <Text style={contentsStyles.headerText}>Section Title</Text>
          </View>
          {tableOfContents.map((item, index) => (
            <View
              key={item.id}
              style={[
                contentsStyles.row,
                {
                  backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                  borderBottomWidth: index === tableOfContents.length - 1 ? 0 : 0.5,
                },
              ]}
            >
              <Text style={contentsStyles.rowText}>
                {item.id}. {item.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default PdfPage2Contents;
