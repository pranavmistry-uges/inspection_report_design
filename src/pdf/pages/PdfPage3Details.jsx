import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import {
  generalDetails,
  inspectionDetails,
  representatives,
  majorComponents,
} from '../../data/reportData';

const detailsStyles = StyleSheet.create({
  sectionTitle: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    marginBottom: 5,
    marginTop: 3,
    letterSpacing: 0.2,
  },
  sectionTitleWithMargin: {
    fontSize: 11.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    marginBottom: 5,
    marginTop: 8,
    letterSpacing: 0.2,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderStyle: 'solid',
    marginBottom: 4,
  },
  thCell: {
    paddingVertical: 4.5,
    paddingHorizontal: 4,
    borderRightWidth: 0.5,
    borderRightColor: '#94a3b8',
    borderRightStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
  },
  thText: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'left',
  },
  thTextCenter: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
  },
  tdCell: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    borderRightWidth: 0.5,
    borderRightColor: '#cbd5e1',
    borderRightStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
  },
  tdText: {
    fontSize: 8.5,
    color: '#1e293b',
  },
  tdTextBold: {
    fontSize: 7.8,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },
  tdTextCenterBold: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    textAlign: 'center',
  },
  tdTextMono: {
    fontSize: 8.5,
    fontFamily: 'Courier',
    color: '#1e293b',
  },
  repCell: {
    paddingVertical: 5.5,
    paddingHorizontal: 6,
    borderRightWidth: 0.5,
    borderRightColor: '#cbd5e1',
    borderRightStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
  },
  repText: {
    fontSize: 8.5,
    color: '#1e293b',
    lineHeight: 1.35,
  },
});

const PdfPage3Details = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        {/* 1. GENERAL DETAILS */}
        <Text style={detailsStyles.sectionTitle}>1.GENERAL DETAILS OF WIND TURBINE :</Text>
        <View style={detailsStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[detailsStyles.thCell, { width: '5%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '26%' }]}>
              <Text style={detailsStyles.thText}>Details</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '19%' }]}>
              <Text style={detailsStyles.thText}>Input</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '5%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '26%' }]}>
              <Text style={detailsStyles.thText}>Details</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '19%', borderRightWidth: 0 }]}>
              <Text style={detailsStyles.thText}>Input</Text>
            </View>
          </View>
          {generalDetails.map((row, idx) => (
            <View
              key={idx}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
              ]}
            >
              <View style={[detailsStyles.tdCell, { width: '5%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '26%' }]}>
                <Text style={detailsStyles.tdTextBold}>{row.details1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '19%' }]}>
                <Text style={detailsStyles.tdText}>{row.input1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '5%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo2}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '26%' }]}>
                <Text style={detailsStyles.tdTextBold}>{row.details2}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '19%', borderRightWidth: 0 }]}>
                <Text style={detailsStyles.tdText}>{row.input2}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* 2. INSPECTION DETAILS */}
        <Text style={detailsStyles.sectionTitleWithMargin}>2.INSPECTION DETAILS :</Text>
        <View style={detailsStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[detailsStyles.thCell, { width: '6%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '22%' }]}>
              <Text style={detailsStyles.thText}>Details</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '22%' }]}>
              <Text style={detailsStyles.thText}>Input</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '6%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '22%' }]}>
              <Text style={detailsStyles.thText}>Details</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '22%', borderRightWidth: 0 }]}>
              <Text style={detailsStyles.thText}>Input</Text>
            </View>
          </View>
          {inspectionDetails.map((row, idx) => (
            <View
              key={idx}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
              ]}
            >
              <View style={[detailsStyles.tdCell, { width: '6%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '22%' }]}>
                <Text style={detailsStyles.tdTextBold}>{row.details1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '22%' }]}>
                <Text style={detailsStyles.tdText}>{row.input1}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '6%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo2}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '22%' }]}>
                <Text style={detailsStyles.tdTextBold}>{row.details2}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '22%', borderRightWidth: 0 }]}>
                <Text style={detailsStyles.tdText}>{row.input2}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* REPRESENTATIVES */}
        <Text style={detailsStyles.sectionTitleWithMargin}>REPRESENTATIVES :</Text>
        <View style={detailsStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[detailsStyles.thCell, { width: '6%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '31%' }]}>
              <Text style={detailsStyles.thText}>Customer Representative</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '31%' }]}>
              <Text style={detailsStyles.thText}>Demo Representative</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '32%', borderRightWidth: 0 }]}>
              <Text style={detailsStyles.thText}>OEM/O&M Representatives</Text>
            </View>
          </View>
          {representatives.map((row, idx) => (
            <View key={idx} style={[pdfStyles.tableRow, pdfStyles.tableRowEven]}>
              <View style={[detailsStyles.repCell, { width: '6%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo}</Text>
              </View>
              <View style={[detailsStyles.repCell, { width: '31%' }]}>
                <Text style={detailsStyles.repText}>{row.customer}</Text>
              </View>
              <View style={[detailsStyles.repCell, { width: '31%' }]}>
                <Text style={detailsStyles.repText}>{row.demo}</Text>
              </View>
              <View style={[detailsStyles.repCell, { width: '32%', borderRightWidth: 0 }]}>
                <Text style={detailsStyles.repText}>{row.oem}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* 3. DETAILS OF MAJOR COMPONENTS */}
        <Text style={detailsStyles.sectionTitleWithMargin}>3. DETAILS OF MAJOR COMPONENTS:</Text>
        <View style={detailsStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[detailsStyles.thCell, { width: '6%' }]}>
              <Text style={detailsStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '31%' }]}>
              <Text style={detailsStyles.thText}>Component</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '31%' }]}>
              <Text style={detailsStyles.thText}>Manufacturer</Text>
            </View>
            <View style={[detailsStyles.thCell, { width: '32%', borderRightWidth: 0 }]}>
              <Text style={detailsStyles.thText}>Serial No</Text>
            </View>
          </View>
          {majorComponents.map((row, idx) => (
            <View
              key={idx}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
              ]}
            >
              <View style={[detailsStyles.tdCell, { width: '6%' }]}>
                <Text style={detailsStyles.tdTextCenterBold}>{row.sNo}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '31%' }]}>
                <Text style={detailsStyles.tdTextBold}>{row.component}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '31%' }]}>
                <Text style={detailsStyles.tdText}>{row.manufacturer}</Text>
              </View>
              <View style={[detailsStyles.tdCell, { width: '32%', borderRightWidth: 0 }]}>
                <Text style={detailsStyles.tdText}>{row.serialNo}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default PdfPage3Details;
