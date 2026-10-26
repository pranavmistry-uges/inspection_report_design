import React from 'react';
import { Box, Typography } from '@mui/material';
import repulseLogo from '../assets/repulse.png';

const ReportHeader = ({ pageNumber, totalPages }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '64px',
        border: '1.5px solid #9bb7d4',
        borderRadius: '2px',
        display: 'flex',
        alignItems: 'stretch',
        backgroundColor: '#edf5fd',
        mb: '14px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Left: Repulse Logo */}
      <Box
        sx={{
          width: '23%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: 1.5,
          py: 0.5,
          borderRight: '1.5px solid #9bb7d4',
          backgroundColor: '#edf5fd',
        }}
      >
        <img
          src={repulseLogo}
          alt="RE-Pulse Logo"
          style={{
            maxHeight: '46px',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </Box>

      {/* Center: Title & Location */}
      <Box
        sx={{
          width: '57%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 1,
          borderRight: '1.5px solid #9bb7d4',
          textAlign: 'center',
          backgroundColor: '#edf5fd',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '16.5px',
            fontWeight: 800,
            color: '#134b8a',
            letterSpacing: '0.2px',
            lineHeight: 1.25,
          }}
        >
          Wind Turbine Technical Inspection
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '14px',
            fontWeight: 700,
            color: '#134b8a',
            lineHeight: 1.3,
            mt: '3px',
          }}
        >
          Loc No: JGBPL-01 - Dhandalpur
        </Typography>
      </Box>

      {/* Right: Icon & Dynamic Page Number */}
      <Box
        sx={{
          width: '20%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 1.5,
          py: 0.8,
          backgroundColor: '#edf5fd',
        }}
      >
        {/* Multi-colored 4-block icon matching reference header */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 6px)',
            gap: '2.5px',
            alignSelf: 'flex-end',
            mr: 0.5,
            mt: 0.2,
          }}
        >
          <Box sx={{ width: 6, height: 6, bgcolor: '#1e3a8a', borderRadius: '1px' }} />
          <Box sx={{ width: 6, height: 6, bgcolor: '#22c55e', borderRadius: '1px' }} />
          <Box sx={{ width: 6, height: 6, bgcolor: '#0284c7', borderRadius: '1px' }} />
          <Box sx={{ width: 6, height: 6, bgcolor: '#3b82f6', borderRadius: '1px' }} />
        </Box>

        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '12px',
            fontWeight: 700,
            color: '#134b8a',
            whiteSpace: 'nowrap',
          }}
        >
          Page {pageNumber} of {totalPages}
        </Typography>
      </Box>
    </Box>
  );
};

export default ReportHeader;
