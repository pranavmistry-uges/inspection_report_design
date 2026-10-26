import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { observationRecords } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '12px',
  fontWeight: 800,
  color: '#1a365d',
  mb: '4px',
  letterSpacing: '0.2px',
};

const getRiskBadge = (category) => {
  let bgcolor = '#fee2e2';
  let color = '#b91c1c';
  let border = '#f87171';

  if (category === 'Medium') {
    bgcolor = '#ffedd5';
    color = '#c2410c';
    border = '#fb923c';
  } else if (category === 'Low') {
    bgcolor = '#fef9c3';
    color = '#854d0e';
    border = '#facc15';
  }

  return (
    <Box
      sx={{
        display: 'inline-block',
        px: 1.2,
        py: '3px',
        borderRadius: '3px',
        fontSize: '10px',
        fontWeight: 700,
        backgroundColor: bgcolor,
        color: color,
        border: `1px solid ${border}`,
      }}
    >
      {category}
    </Box>
  );
};

const Page7ObservationsPart2 = ({ pageNumber, totalPages }) => {
  const records = observationRecords.slice(4, 8);

  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={sectionTitleStyle}>
          7. Observation and Photographs with Risk Category (Continued)
        </Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '9.5px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            mb: 1.5,
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#1e3a8a',
              fontWeight: 700,
              padding: '4px 6px',
              border: '1px solid #94a3b8',
              textAlign: 'center',
            },
            '& td': {
              padding: '4px 6px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              verticalAlign: 'middle',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: '8%' }}>Ref. No.</th>
              <th style={{ width: '44%', textAlign: 'left', paddingLeft: '10px' }}>
                Observation / Way Forward
              </th>
              <th style={{ width: '36%' }}>Ref. Photos</th>
              <th style={{ width: '12%' }}>Risk Category</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  height: '150px',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 700, fontSize: '10.5px' }}>
                  {item.refNo}
                </td>
                <td style={{ padding: '6px 10px' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '9.5px',
                      color: '#1e293b',
                      lineHeight: 1.35,
                      mb: '4px',
                    }}
                  >
                    {item.observation}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '9.5px',
                      fontWeight: 700,
                      color: '#0f172a',
                      lineHeight: 1.3,
                    }}
                  >
                    Way Forward:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '9.5px',
                      color: '#334155',
                      lineHeight: 1.35,
                    }}
                  >
                    {item.wayForward}
                  </Typography>
                </td>
                <td style={{ textAlign: 'center', padding: '4px' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '135px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: '2px',
                      border: '1px solid #cbd5e1',
                      backgroundColor: '#000',
                    }}
                  >
                    <img
                      src={item.photo}
                      alt={`Ref ${item.refNo}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </td>
                <td style={{ textAlign: 'center' }}>{getRiskBadge(item.riskCategory)}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* Note section */}
        <Box sx={{ mt: '2px', pl: 0.5 }}>
          <Typography
            sx={{
              fontFamily: '"Inter", "Roboto", sans-serif',
              fontSize: '11px',
              fontWeight: 800,
              color: '#0f172a',
              mb: '2px',
            }}
          >
            Note:
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Inter", "Roboto", sans-serif',
              fontSize: '10px',
              color: '#334155',
              lineHeight: 1.4,
            }}
          >
            1. Risk assessment is based on the observation at time of the inspection.
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page7ObservationsPart2;
