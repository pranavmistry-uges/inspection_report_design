import React from 'react';
import { Box } from '@mui/material';
import ReportHeader from './ReportHeader';

const A4Page = ({ pageNumber, totalPages, children, noHeader = false }) => {
  return (
    <Box
      className="a4-page"
      sx={{
        width: '210mm',
        height: '297mm',
        minHeight: '297mm',
        maxHeight: '297mm',
        padding: '10mm 12mm 10mm 12mm',
        margin: '0 auto 28px auto',
        backgroundColor: '#ffffff',
        boxShadow: '0 8px 24px rgba(15, 23, 42, 0.12), 0 2px 6px rgba(15, 23, 42, 0.08)',
        borderRadius: '2px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        pageBreakAfter: 'always',
        breakAfter: 'page',
        '@media print': {
          width: '210mm !important',
          height: '297mm !important',
          minHeight: '297mm !important',
          maxHeight: '297mm !important',
          margin: '0 !important',
          padding: '8mm 10mm 8mm 10mm !important',
          boxShadow: 'none !important',
          borderRadius: '0 !important',
          pageBreakAfter: 'always !important',
          breakAfter: 'page !important',
        },
      }}
    >
      {!noHeader && <ReportHeader pageNumber={pageNumber} totalPages={totalPages} />}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default A4Page;
