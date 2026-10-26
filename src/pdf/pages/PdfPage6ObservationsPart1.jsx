import React from 'react';
import { Page, View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { observationRecords } from '../../data/reportData';
import { Image } from '@react-pdf/renderer';

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

const PdfPage6ObservationsPart1 = ({ pageNumber, totalPages }) => {
  const records = observationRecords.slice(0, 4);

  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        <Text style={pdfStyles.sectionTitle}>
          7. Observation and Photographs with Risk Category
        </Text>

        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[pdfStyles.thCell, { width: '9%' }]}>
              <Text style={pdfStyles.thTextCenter}>Ref. No.</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '45%' }]}>
              <Text style={pdfStyles.thText}>Observation / Way Forward</Text>
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
                { height: 165 },
              ]}
            >
              <View style={[pdfStyles.tdCell, { width: '9%' }]}>
                <Text style={pdfStyles.tdTextCenterBold}>{item.refNo}</Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '45%', paddingVertical: 4, paddingHorizontal: 6 }]}>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.35, marginBottom: 4 }]}>
                  {item.observation}
                </Text>
                <Text style={[pdfStyles.tdTextBold, { lineHeight: 1.3, marginBottom: 2 }]}>
                  Way Forward:
                </Text>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.35 }]}>
                  {item.wayForward}
                </Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '33%', padding: 4 }]}>
                <View style={pdfStyles.photoContainer}>
                  <Image src={item.photo} style={pdfStyles.photoImg} />
                </View>
              </View>
              <View style={[pdfStyles.tdCell, { width: '13%', borderRightWidth: 0, alignItems: 'center' }]}>
                {getRiskBadge(item.riskCategory)}
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default PdfPage6ObservationsPart1;
