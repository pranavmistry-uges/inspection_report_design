import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { reportMetadata } from '../../data/reportData';

const Page1Cover = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 1,
          pb: 2,
        }}
      >
        {/* Main Inspection Image */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '570px',
            height: '730px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '2px',
            border: '1px solid #cbd5e1',
            backgroundColor: '#f8fafc',
          }}
        >
          <img
            src={reportMetadata.coverImage}
            alt="Wind Turbine Inspection"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>

        {/* Site Name Text */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '16.5px',
            fontWeight: 800,
            color: '#134b8a',
            mt: 3,
            textAlign: 'center',
            letterSpacing: '0.3px',
          }}
        >
          Site Name : {reportMetadata.siteName}
        </Typography>
      </Box>
    </A4Page>
  );
};

export default Page1Cover;
