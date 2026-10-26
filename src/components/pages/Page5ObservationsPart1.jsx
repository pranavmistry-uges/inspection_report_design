import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { observationRecords } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '14px',
  fontWeight: 800,
  color: '#134b8a',
  mb: '8px',
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
        px: 1.8,
        py: '5px',
        borderRadius: '3px',
        fontSize: '11.5px',
        fontWeight: 700,
        backgroundColor: bgcolor,
        color: color,
        border: `1.5px solid ${border}`,
        letterSpacing: '0.2px',
      }}
    >
      {category}
    </Box>
  );
};

const Page5ObservationsPart1 = ({ pageNumber, totalPages }) => {
  const records = observationRecords.slice(0, 4);

  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Title kept only here where the table starts */}
        <Typography sx={sectionTitleStyle}>
          7. Observation and Photographs with Risk Category
        </Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            flex: 1,
            borderCollapse: 'collapse',
            fontFamily: '"Inter", "Roboto", sans-serif',
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#134b8a',
              fontWeight: 800,
              padding: '8px 10px',
              border: '1.5px solid #94a3b8',
              textAlign: 'center',
              fontSize: '12px',
            },
            '& td': {
              padding: '8px 12px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              verticalAlign: 'middle',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: '9%' }}>Ref. No.</th>
              <th style={{ width: '45%', textAlign: 'left', paddingLeft: '14px' }}>
                Observation / Way Forward
              </th>
              <th style={{ width: '33%' }}>Ref. Photos</th>
              <th style={{ width: '13%' }}>Risk Category</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, idx) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  height: '210px',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 800, fontSize: '13px' }}>
                  {item.refNo}
                </td>
                <td style={{ padding: '10px 14px' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '12px',
                      color: '#1e293b',
                      lineHeight: 1.5,
                      mb: '6px',
                    }}
                  >
                    {item.observation}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '12px',
                      fontWeight: 800,
                      color: '#0f172a',
                      lineHeight: 1.35,
                      mb: '2px',
                    }}
                  >
                    Way Forward:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '12px',
                      color: '#334155',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.wayForward}
                  </Typography>
                </td>
                <td style={{ textAlign: 'center', padding: '6px' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '185px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      borderRadius: '3px',
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
      </Box>
    </A4Page>
  );
};

export default Page5ObservationsPart1;
