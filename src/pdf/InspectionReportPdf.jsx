import React from 'react';
import { Document } from '@react-pdf/renderer';
import PdfPage1Cover from './pages/PdfPage1Cover';
import PdfPage2Contents from './pages/PdfPage2Contents';
import PdfPage3Details from './pages/PdfPage3Details';
import PdfPage4Checklist from './pages/PdfPage4Checklist';
import PdfPage5CriticalSensorAndRisk from './pages/PdfPage5CriticalSensorAndRisk';
import PdfPage6ObservationsPart1 from './pages/PdfPage6ObservationsPart1';
import PdfPage7ObservationsPart2 from './pages/PdfPage7ObservationsPart2';
import PdfPage8EarthResistance from './pages/PdfPage8EarthResistance';
import PdfPage9GeneratorIR from './pages/PdfPage9GeneratorIR';
import PdfPage10BladeAndSignatures from './pages/PdfPage10BladeAndSignatures';

const InspectionReportPdf = () => {
  const totalPages = 10;

  return (
    <Document
      title="Wind Turbine Technical Inspection Report - Loc No: JGBPL-01"
      author="RE-Pulse"
      subject="Loc No: JGBPL-01 - Dhandalpur"
      creator="RE-Pulse Inspection System"
      producer="react-pdf"
    >
      <PdfPage1Cover pageNumber={1} totalPages={totalPages} />
      <PdfPage2Contents pageNumber={2} totalPages={totalPages} />
      <PdfPage3Details pageNumber={3} totalPages={totalPages} />
      <PdfPage4Checklist pageNumber={4} totalPages={totalPages} />
      <PdfPage5CriticalSensorAndRisk pageNumber={5} totalPages={totalPages} />
      <PdfPage6ObservationsPart1 pageNumber={6} totalPages={totalPages} />
      <PdfPage7ObservationsPart2 pageNumber={7} totalPages={totalPages} />
      <PdfPage8EarthResistance pageNumber={8} totalPages={totalPages} />
      <PdfPage9GeneratorIR pageNumber={9} totalPages={totalPages} />
      <PdfPage10BladeAndSignatures pageNumber={10} totalPages={totalPages} />
    </Document>
  );
};

export default InspectionReportPdf;
