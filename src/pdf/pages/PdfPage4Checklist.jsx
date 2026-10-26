import React from 'react';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import PdfHeader from '../components/PdfHeader';
import { reportMetadata, checklistData } from '../../data/reportData';

const checklistStyles = StyleSheet.create({
  priorityBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priorityBox: {
    width: '32%',
    paddingVertical: 5.5,
    paddingHorizontal: 10,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginRight: 6,
  },
  priorityText: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
    letterSpacing: 0.2,
  },
  bannerContainer: {
    width: '100%',
    marginBottom: 8,
    display: 'flex',
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    maxHeight: 90,
    objectFit: 'contain',
  },
  subHeaderRow: {
    backgroundColor: '#bfdbfe',
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    paddingVertical: 3.5,
    paddingHorizontal: 6,
  },
  subHeaderText: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    letterSpacing: 0.2,
  },
  thCol: {
    paddingVertical: 4,
    paddingHorizontal: 2.5,
    borderRightWidth: 0.5,
    borderRightColor: '#94a3b8',
    borderRightStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thText: {
    fontSize: 7.2,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
    lineHeight: 1.15,
  },
  tdCol: {
    paddingVertical: 3.2,
    paddingHorizontal: 2.5,
    borderRightWidth: 0.5,
    borderRightColor: '#cbd5e1',
    borderRightStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tdText: {
    fontSize: 7.6,
    color: '#1e293b',
    textAlign: 'center',
  },
  tdTextDesc: {
    fontSize: 7.6,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    textAlign: 'left',
    paddingLeft: 4,
  },
  badgeFoundOk: {
    backgroundColor: '#dcfce7',
    borderWidth: 0.5,
    borderColor: '#86efac',
    borderRadius: 2,
    paddingVertical: 1.5,
    paddingHorizontal: 5,
  },
  badgeFoundOkText: {
    fontSize: 6.8,
    fontFamily: 'Helvetica-Bold',
    color: '#15803d',
  },
  badgeNotOk: {
    backgroundColor: '#fee2e2',
    borderWidth: 0.5,
    borderColor: '#f87171',
    borderRadius: 2,
    paddingVertical: 1.5,
    paddingHorizontal: 5,
  },
  badgeNotOkText: {
    fontSize: 6.8,
    fontFamily: 'Helvetica-Bold',
    color: '#b91c1c',
  },
});

const PdfPage4Checklist = ({ pageNumber, totalPages }) => {
  return (
    <Page size="A4" style={pdfStyles.page}>
      <PdfHeader pageNumber={pageNumber} totalPages={totalPages} />
      <View style={pdfStyles.contentArea}>
        {/* Three Priority Boxes */}
        <View style={checklistStyles.priorityBoxContainer}>
          {/* High Priority */}
          <View style={[checklistStyles.priorityBox, { backgroundColor: '#dc2626' }]}>
            <View style={checklistStyles.priorityDot} />
            <Text style={checklistStyles.priorityText}>High Priority</Text>
          </View>

          {/* Medium Priority */}
          <View style={[checklistStyles.priorityBox, { backgroundColor: '#ea580c' }]}>
            <View style={checklistStyles.priorityDot} />
            <Text style={checklistStyles.priorityText}>Medium Priority</Text>
          </View>

          {/* Low Priority */}
          <View style={[checklistStyles.priorityBox, { backgroundColor: '#facc15' }]}>
            <View style={checklistStyles.priorityDot} />
            <Text style={[checklistStyles.priorityText, { color: '#1e293b' }]}>Low Priority</Text>
          </View>
        </View>

        {/* Risk Classification Banner */}
        <View style={checklistStyles.bannerContainer}>
          <Image
            src={reportMetadata.riskClassificationBanner}
            style={checklistStyles.bannerImage}
          />
        </View>

        {/* Section Heading */}
        <Text style={[pdfStyles.sectionTitle, { fontSize: 11, marginBottom: 5 }]}>
          4. COMPONENT INSPECTION CHECKLIST:
        </Text>

        {/* Checklist Table */}
        <View style={pdfStyles.table}>
          {/* Table Header */}
          <View style={pdfStyles.tableRowHeader}>
            <View style={[checklistStyles.thCol, { width: '6%' }]}>
              <Text style={checklistStyles.thText}>SR No</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '20%', alignItems: 'flex-start', paddingLeft: 4 }]}>
              <Text style={[checklistStyles.thText, { textAlign: 'left' }]}>Description</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Paint Damage</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '8.5%' }]}>
              <Text style={checklistStyles.thText}>Physical Damage Dent Crack</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Corrosion</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Looseness</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Leakage</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '8%' }]}>
              <Text style={checklistStyles.thText}>Missing Or Not Available</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Function Issue</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Gap Or Not Sealed</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '6.5%' }]}>
              <Text style={checklistStyles.thText}>Not Sufficient</Text>
            </View>
            <View style={[checklistStyles.thCol, { width: '12%', borderRightWidth: 0 }]}>
              <Text style={checklistStyles.thText}>Overview</Text>
            </View>
          </View>

          {/* Table Body */}
          {checklistData.map((section, sIdx) => (
            <React.Fragment key={sIdx}>
              {/* Subheader Banner */}
              <View style={checklistStyles.subHeaderRow}>
                <Text style={checklistStyles.subHeaderText}>{section.sectionHeader}</Text>
              </View>

              {/* Section Rows */}
              {section.items.map((item, iIdx) => {
                const isCorrosionYellow = item.corrosionHighlight === 'yellow';
                const isFunctionIssueRed = item.functionIssueHighlight === 'red';
                const isFunctionIssueOrange = item.functionIssueHighlight === 'orange';
                const isNotSufficientRed = item.notSufficientHighlight === 'red';
                const isNotSufficientOrange = item.notSufficientHighlight === 'orange';
                const isNotOk = item.overview === 'Not ok';

                return (
                  <View
                    key={iIdx}
                    style={[
                      pdfStyles.tableRow,
                      iIdx % 2 === 0 ? pdfStyles.tableRowEven : pdfStyles.tableRowOdd,
                    ]}
                  >
                    <View style={[checklistStyles.tdCol, { width: '6%' }]}>
                      <Text style={checklistStyles.tdText}>{item.srNo}</Text>
                    </View>
                    <View style={[checklistStyles.tdCol, { width: '20%', alignItems: 'flex-start' }]}>
                      <Text style={checklistStyles.tdTextDesc}>{item.description}</Text>
                    </View>
                    <View style={[checklistStyles.tdCol, { width: '6.5%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>
                    <View style={[checklistStyles.tdCol, { width: '8.5%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    {/* Corrosion */}
                    <View
                      style={[
                        checklistStyles.tdCol,
                        {
                          width: '6.5%',
                          backgroundColor: isCorrosionYellow ? '#fef08a' : 'transparent',
                        },
                      ]}
                    >
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    <View style={[checklistStyles.tdCol, { width: '6.5%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>
                    <View style={[checklistStyles.tdCol, { width: '6.5%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>
                    <View style={[checklistStyles.tdCol, { width: '8%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    {/* Function Issue */}
                    <View
                      style={[
                        checklistStyles.tdCol,
                        {
                          width: '6.5%',
                          backgroundColor: isFunctionIssueRed
                            ? '#fca5a5'
                            : isFunctionIssueOrange
                            ? '#fdba74'
                            : 'transparent',
                        },
                      ]}
                    >
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    <View style={[checklistStyles.tdCol, { width: '6.5%' }]}>
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    {/* Not Sufficient */}
                    <View
                      style={[
                        checklistStyles.tdCol,
                        {
                          width: '6.5%',
                          backgroundColor: isNotSufficientRed
                            ? '#fca5a5'
                            : isNotSufficientOrange
                            ? '#fdba74'
                            : 'transparent',
                        },
                      ]}
                    >
                      <Text style={checklistStyles.tdText}>-</Text>
                    </View>

                    {/* Overview Badge */}
                    <View style={[checklistStyles.tdCol, { width: '12%', borderRightWidth: 0 }]}>
                      {isNotOk ? (
                        <View style={checklistStyles.badgeNotOk}>
                          <Text style={checklistStyles.badgeNotOkText}>Not ok</Text>
                        </View>
                      ) : (
                        <View style={checklistStyles.badgeFoundOk}>
                          <Text style={checklistStyles.badgeFoundOkText}>Found ok</Text>
                        </View>
                      )}
                    </View>
                  </View>
                );
              })}
            </React.Fragment>
          ))}
        </View>
      </View>
    </Page>
  );
};

export default PdfPage4Checklist;
