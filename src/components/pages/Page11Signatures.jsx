import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { finalNotes, signatureDetails } from '../../data/reportData';

const Page11Signatures = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', pt: 1 }}>
        {/* Final Notes */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '12px',
            fontWeight: 800,
            color: '#0f172a',
            mb: 1,
          }}
        >
          Final Notes:
        </Typography>

        <Box sx={{ pl: 0.5, mb: 3 }}>
          {finalNotes.map((note, idx) => (
            <Typography
              key={idx}
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                color: '#334155',
                lineHeight: 1.6,
              }}
            >
              {idx + 1}. {note}
            </Typography>
          ))}
        </Box>

        {/* Instrument Details */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '12px',
            fontWeight: 800,
            color: '#0f172a',
            mb: 4,
          }}
        >
          Instrument Details:
        </Typography>

        {/* Signatures Heading */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '13px',
            fontWeight: 800,
            color: '#1a365d',
            mb: 4,
            letterSpacing: '0.4px',
          }}
        >
          SIGNATURES:
        </Typography>

        {/* Signatures Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 4,
            mt: 1,
          }}
        >
          {/* Demo Representative */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0f172a',
                mb: 4,
              }}
            >
              {signatureDetails.demoRep.title}
            </Typography>

            <Box
              sx={{
                borderBottom: '1.5px solid #0f172a',
                width: '90%',
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: '#1e293b',
                mb: 4,
              }}
            >
              {signatureDetails.demoRep.names[0]}
            </Typography>

            <Box
              sx={{
                borderBottom: '1.5px solid #0f172a',
                width: '90%',
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: '#1e293b',
              }}
            >
              {signatureDetails.demoRep.names[1]}
            </Typography>
          </Box>

          {/* OEM / OM Representative */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0f172a',
                mb: 4,
              }}
            >
              {signatureDetails.oemRep.title}
            </Typography>

            <Box
              sx={{
                borderBottom: '1.5px solid #0f172a',
                width: '90%',
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: '#1e293b',
              }}
            >
              {signatureDetails.oemRep.names[0]}
            </Typography>
          </Box>

          {/* Customer Representative */}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '12px',
                fontWeight: 700,
                color: '#0f172a',
                mb: 4,
              }}
            >
              {signatureDetails.customerRep.title}
            </Typography>

            <Box
              sx={{
                borderBottom: '1.5px solid #0f172a',
                width: '90%',
                mb: 1,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 500,
                color: '#1e293b',
              }}
            >
              {signatureDetails.customerRep.names[0]}
            </Typography>
          </Box>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page11Signatures;
