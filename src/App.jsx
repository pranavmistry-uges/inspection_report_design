import React from 'react';
import { Box } from '@mui/material';
import { PDFViewer } from '@react-pdf/renderer';
import InspectionReportPdf from './pdf/InspectionReportPdf';

function App() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        backgroundColor: '#525659',
      }}
    >
      <PDFViewer
        width="100%"
        height="100%"
        style={{
          border: 'none',
          width: '100vw',
          height: '100vh',
        }}
        showToolbar={true}
      >
        <InspectionReportPdf />
      </PDFViewer>
    </Box>
  );
}

export default App;
