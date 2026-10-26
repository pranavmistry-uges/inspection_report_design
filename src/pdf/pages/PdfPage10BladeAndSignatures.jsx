import React from 'react';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import {
  bladeInspectionRecords,
  finalNotes,
  signatureDetails,
} from '../../data/reportData';

const getRiskBadge = (category) => {
  if (category === 'High') {
    return (
      <View style={pdfStyles.badgeHigh}>
        <Text style={pdfStyles.badgeHighText}>{category}</Text>
      </View>
    );
  }
  if (category === 'Medium') {
    return (
      <View style={pdfStyles.badgeMedium}>
        <Text style={pdfStyles.badgeMediumText}>{category}</Text>
      </View>
    );
  }
  return (
    <View style={pdfStyles.badgeLow}>
      <Text style={pdfStyles.badgeLowText}>{category}</Text>
    </View>
  );
};

const sigStyles = StyleSheet.create({
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  column: {
    width: '31%',
    display: 'flex',
    flexDirection: 'column',
  },
  roleTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 26,
  },
  sigLine: {
    borderBottomWidth: 1,
    borderBottomColor: '#0f172a',
    width: '90%',
    marginBottom: 4,
  },
  nameText: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    marginBottom: 20,
  },
});

const PdfPage10BladeAndSignatures = ({ pageNumber, totalPages }) => {
  const records = bladeInspectionRecords.slice(0, 2);

  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        {/* 10. BLADE INSPECTION */}
        <Text style={pdfStyles.sectionTitle}>10. BLADE INSPECTION</Text>

        <View style={[pdfStyles.table, { marginBottom: 12 }]}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[pdfStyles.thCell, { width: '18%' }]}>
              <Text style={pdfStyles.thTextCenter}>Measurement Point / Method</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '36%' }]}>
              <Text style={pdfStyles.thText}>Measurement Reading</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '33%' }]}>
              <Text style={pdfStyles.thTextCenter}>Ref. Photos</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '13%', borderRightWidth: 0 }]}>
              <Text style={pdfStyles.thTextCenter}>Risk Category</Text>
            </View>
          </View>

          {records.map((item, idx) => (
            <View
              key={item.id}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
                { height: 140 },
              ]}
            >
              <View style={[pdfStyles.tdCell, { width: '18%' }]}>
                <Text style={pdfStyles.tdTextCenterBold}>{item.point}</Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '36%', paddingVertical: 4, paddingHorizontal: 6 }]}>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.35, marginBottom: 4 }]}>
                  {item.reading}
                </Text>
                <Text style={[pdfStyles.tdTextBold, { marginBottom: 2 }]}>Way Forward:</Text>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.35 }]}>
                  {item.wayForward}
                </Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '33%', padding: 4 }]}>
                <View style={[pdfStyles.photoContainer, { height: 125 }]}>
                  <Image src={item.photo} style={pdfStyles.photoImg} />
                </View>
              </View>
              <View style={[pdfStyles.tdCell, { width: '13%', borderRightWidth: 0, alignItems: 'center' }]}>
                {getRiskBadge(item.riskCategory)}
              </View>
            </View>
          ))}
        </View>

        {/* Final Notes */}
        <Text style={[pdfStyles.sectionTitle, { color: '#0f172a', marginBottom: 3 }]}>
          Final Notes:
        </Text>
        <View style={{ marginBottom: 8, paddingLeft: 2 }}>
          {finalNotes.map((note, idx) => (
            <Text key={idx} style={[pdfStyles.noteText, { marginBottom: 2 }]}>
              {idx + 1}. {note}
            </Text>
          ))}
        </View>

        {/* Instrument Details */}
        <Text style={[pdfStyles.sectionTitle, { color: '#0f172a', marginBottom: 14 }]}>
          Instrument Details:
        </Text>

        {/* SIGNATURES */}
        <Text style={[pdfStyles.sectionTitle, { color: '#134b8a', marginBottom: 4 }]}>
          SIGNATURES:
        </Text>

        <View style={sigStyles.grid}>
          {/* Demo Representative */}
          <View style={sigStyles.column}>
            <Text style={sigStyles.roleTitle}>{signatureDetails.demoRep.title}</Text>
            <View style={sigStyles.sigLine} />
            <Text style={sigStyles.nameText}>{signatureDetails.demoRep.names[0]}</Text>
            <View style={sigStyles.sigLine} />
            <Text style={[sigStyles.nameText, { marginBottom: 0 }]}>
              {signatureDetails.demoRep.names[1]}
            </Text>
          </View>

          {/* OEM/O&M Representatives */}
          <View style={sigStyles.column}>
            <Text style={sigStyles.roleTitle}>{signatureDetails.oemRep.title}</Text>
            <View style={sigStyles.sigLine} />
            <Text style={sigStyles.nameText}>{signatureDetails.oemRep.names[0]}</Text>
          </View>

          {/* Customer Representative */}
          <View style={sigStyles.column}>
            <Text style={sigStyles.roleTitle}>{signatureDetails.customerRep.title}</Text>
            <View style={sigStyles.sigLine} />
            <Text style={sigStyles.nameText}>{signatureDetails.customerRep.names[0]}</Text>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default PdfPage10BladeAndSignatures;
