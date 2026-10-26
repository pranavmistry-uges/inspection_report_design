import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { criticalSensors, highRiskAssessments } from '../../data/reportData';

const sensorStyles = StyleSheet.create({
  subHeaderRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#dbeafe',
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
  },
  sensorThCol: {
    paddingVertical: 2.5,
    paddingHorizontal: 2,
    borderRightWidth: 0.5,
    borderRightColor: '#94a3b8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sensorThText: {
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
  },
  sensorTdCol: {
    paddingVertical: 3.5,
    paddingHorizontal: 3,
    borderRightWidth: 0.5,
    borderRightColor: '#cbd5e1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PdfPage5CriticalSensorAndRisk = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        {/* 5. WTG CRITICAL SENSOR INSPECTION CHECK */}
        <Text style={pdfStyles.sectionTitle}>5. WTG CRITICAL SENSOR INSPECTION CHECK:</Text>
        <View style={pdfStyles.table}>
          {/* Header Row 1 */}
          <View style={pdfStyles.tableRowHeader}>
            <View style={[sensorStyles.sensorThCol, { width: '6%' }]}>
              <Text style={sensorStyles.sensorThText}>Sr. No</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '31%', alignItems: 'flex-start', paddingLeft: 6 }]}>
              <Text style={[sensorStyles.sensorThText, { textAlign: 'left' }]}>
                WTG Critical Check Points
              </Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '21%' }]}>
              <Text style={sensorStyles.sensorThText}>Functional Check</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '21%' }]}>
              <Text style={sensorStyles.sensorThText}>SCADA Log Status</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '21%', borderRightWidth: 0 }]}>
              <Text style={sensorStyles.sensorThText}>Sensor Feedback</Text>
            </View>
          </View>

          {/* Header Row 2 */}
          <View style={sensorStyles.subHeaderRow}>
            <View style={[sensorStyles.sensorThCol, { width: '6%' }]}>
              <Text style={sensorStyles.sensorThText}></Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '31%' }]}>
              <Text style={sensorStyles.sensorThText}></Text>
            </View>
            {/* Functional Check Columns */}
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Not Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>N/A</Text>
            </View>
            {/* SCADA Log Columns */}
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Not Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>N/A</Text>
            </View>
            {/* Sensor Feedback Columns */}
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%' }]}>
              <Text style={sensorStyles.sensorThText}>Not Ok</Text>
            </View>
            <View style={[sensorStyles.sensorThCol, { width: '7%', borderRightWidth: 0 }]}>
              <Text style={sensorStyles.sensorThText}>N/A</Text>
            </View>
          </View>

          {/* Data Rows */}
          {criticalSensors.map((item, idx) => (
            <View key={idx} style={[pdfStyles.tableRow, pdfStyles.tableRowEven]}>
              <View style={[sensorStyles.sensorTdCol, { width: '6%' }]}>
                <Text style={pdfStyles.tdTextCenterBold}>{item.srNo}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '31%', alignItems: 'flex-start', paddingLeft: 6 }]}>
                <Text style={pdfStyles.tdTextBold}>{item.checkPoint}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.functional.ok || '-'}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={[pdfStyles.tdTextCenterBold, { color: '#dc2626' }]}>
                  {item.functional.notOk || '-'}
                </Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.functional.na || '-'}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={[pdfStyles.tdTextCenterBold, { color: '#16a34a' }]}>
                  {item.scada.ok || '-'}
                </Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.scada.notOk || '-'}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.scada.na || '-'}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.feedback.ok || '-'}</Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%' }]}>
                <Text style={[pdfStyles.tdTextCenterBold, { color: '#dc2626' }]}>
                  {item.feedback.notOk || '-'}
                </Text>
              </View>
              <View style={[sensorStyles.sensorTdCol, { width: '7%', borderRightWidth: 0 }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.feedback.na || '-'}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* 6. HIGH RISK ASSESSMENT TABLE */}
        <Text style={[pdfStyles.sectionTitle, { marginTop: 4 }]}>
          6. HIGH RISK ASSESSMENT TABLE:
        </Text>
        <View style={pdfStyles.table}>
          <View style={pdfStyles.tableRowHeader}>
            <View style={[pdfStyles.thCell, { width: '6%' }]}>
              <Text style={pdfStyles.thTextCenter}>S.No</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '32%' }]}>
              <Text style={pdfStyles.thText}>Observation Areas</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '12%' }]}>
              <Text style={pdfStyles.thTextCenter}>Risk Category</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '38%' }]}>
              <Text style={pdfStyles.thText}>Mitigation</Text>
            </View>
            <View style={[pdfStyles.thCell, { width: '12%', borderRightWidth: 0 }]}>
              <Text style={pdfStyles.thTextCenter}>Target Date</Text>
            </View>
          </View>
          {highRiskAssessments.map((item, idx) => (
            <View
              key={idx}
              style={[
                pdfStyles.tableRow,
                idx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
              ]}
            >
              <View style={[pdfStyles.tdCell, { width: '6%' }]}>
                <Text style={pdfStyles.tdTextCenterBold}>{item.sNo}</Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '32%', paddingVertical: 2.5 }]}>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.25 }]}>
                  {item.observationArea}
                </Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '12%', alignItems: 'center' }]}>
                <View style={pdfStyles.badgeHigh}>
                  <Text style={pdfStyles.badgeHighText}>{item.riskCategory}</Text>
                </View>
              </View>
              <View style={[pdfStyles.tdCell, { width: '38%', paddingVertical: 2.5 }]}>
                <Text style={[pdfStyles.tdText, { lineHeight: 1.25 }]}>
                  {item.mitigation}
                </Text>
              </View>
              <View style={[pdfStyles.tdCell, { width: '12%', borderRightWidth: 0 }]}>
                <Text style={pdfStyles.tdTextCenter}>{item.targetDate}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default PdfPage5CriticalSensorAndRisk;
