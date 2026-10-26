import React from 'react';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { reportMetadata } from '../../data/reportData';

const coverStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  imageBox: {
    width: '82%',
    height: 420,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 2,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8fafc',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  siteName: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    marginTop: 18,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
});

const PdfPage1Cover = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={coverStyles.container}>
        <View style={coverStyles.imageBox}>
          <Image src={reportMetadata.coverImage} style={coverStyles.image} />
        </View>
        <Text style={coverStyles.siteName}>Site Name : {reportMetadata.siteName}</Text>
      </View>
    </Page>
  );
};

export default PdfPage1Cover;
