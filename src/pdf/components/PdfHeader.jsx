import React from 'react';
import { View, Text, Image } from '@react-pdf/renderer';
import { pdfStyles } from '../styles';
import repulseLogo from '../../assets/repulse.png';
import custLogo from '../../assets/cust_logo.png';

const PdfHeader = ({ pageNumber, totalPages }) => {
  return (
    <View style={pdfStyles.headerContainer} fixed>
      {/* Left: Repulse Logo */}
      <View style={pdfStyles.headerLeft}>
        <Image src={repulseLogo} style={pdfStyles.headerLogo} />
      </View>

      {/* Center: Title & Location */}
      <View style={pdfStyles.headerCenter}>
        <Text style={pdfStyles.headerTitle}>Wind Turbine Technical Inspection</Text>
        <Text style={pdfStyles.headerSubtitle}>Loc No: JGBPL-01 - Dhandalpur</Text>
      </View>

      {/* Right: Customer Logo & Page Number */}
      <View style={pdfStyles.headerRight}>
        <Image src={custLogo} style={pdfStyles.headerLogo} />
        {pageNumber !== undefined && totalPages !== undefined ? (
          <Text style={pdfStyles.headerPageNumber}>
            Page {pageNumber} of {totalPages}
          </Text>
        ) : (
          <Text
            style={pdfStyles.headerPageNumber}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`}
          />
        )}
      </View>
    </View>
  );
};

export default PdfHeader;
