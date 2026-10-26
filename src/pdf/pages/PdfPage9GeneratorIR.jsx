import React from 'react';
import { Page, View, Text, Image } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { generatorIRRecords } from '../../data/reportData';

const PdfPage9GeneratorIR = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        <Text style={pdfStyles.sectionTitle}>9. GENERATOR INSULATION RESISTANCE</Text>

        <View style={pdfStyles.table}>
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

          {generatorIRRecords.map((item, idx) => (
            <View
              key={item.id}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
                { height: 160 },
              ]}
            >
              <View style={[pdfStyles.tdCell, { width: '18%' }]}>
                <Text style={pdfStyles.tdTextCenterBold}>{item.point}</Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '36%', paddingVertical: 4, paddingHorizontal: 6 }]}>
                <Text style={[pdfStyles.tdTextBold, { fontSize: 8.5, marginBottom: 4 }]}>
                  {item.reading}
                </Text>
                <Text style={[pdfStyles.tdTextBold, { marginBottom: 2 }]}>Way Forward:</Text>
                <Text style={pdfStyles.tdText}>{item.wayForward}</Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '33%', padding: 4 }]}>
                <View style={pdfStyles.photoContainer}>
                  <Image src={item.photo} style={pdfStyles.photoImg} />
                </View>
              </View>
              <View style={[pdfStyles.tdCell, { width: '13%', borderRightWidth: 0, alignItems: 'center' }]}>
                <View style={pdfStyles.badgeOk}>
                  <Text style={pdfStyles.badgeOkText}>{item.riskCategory}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={pdfStyles.noteContainer}>
          <Text style={pdfStyles.noteText}>
            Note: Risk assessment is based on the IR readings recorded at the time of measurement.
          </Text>
        </View>
      </View>
    </Page>
  );
};

export default PdfPage9GeneratorIR;
