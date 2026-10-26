import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { tableOfContents } from '../../data/reportData';

const Page2Contents = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', pt: 1 }}>
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '14px',
            fontWeight: 800,
            color: '#134b8a',
            mb: 2,
            letterSpacing: '0.3px',
          }}
        >
          CONTENTS:
        </Typography>

        <Box
          sx={{
            width: '100%',
            border: '1.5px solid #94a3b8',
            borderRadius: '2px',
            overflow: 'hidden',
          }}
        >
          {/* Section Title Header */}
          <Box
            sx={{
              backgroundColor: '#dbeafe',
              borderBottom: '1.5px solid #94a3b8',
              py: 1.2,
              px: 2.5,
            }}
          >
            <Typography
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '13px',
                fontWeight: 800,
                color: '#134b8a',
              }}
            >
              Section Title
            </Typography>
          </Box>

          {/* Table of Content Rows */}
          {tableOfContents.map((item, index) => (
            <Box
              key={item.id}
              sx={{
                py: 1.2,
                px: 2.5,
                borderBottom:
                  index < tableOfContents.length - 1 ? '1px solid #cbd5e1' : 'none',
                backgroundColor: index % 2 === 0 ? '#ffffff' : '#f8fafc',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Inter", "Roboto", sans-serif',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: '#1e293b',
                  letterSpacing: '0.2px',
                }}
              >
                {item.id}. {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page2Contents;
