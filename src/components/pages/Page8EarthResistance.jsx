import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { earthResistanceRecords } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '12px',
  fontWeight: 800,
  color: '#1a365d',
  mb: '4px',
  letterSpacing: '0.2px',
};

const Page8EarthResistance = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={sectionTitleStyle}>
          8. EARTH RESISTANCE MEASUREMENT
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
              lineHeight: 1.2,
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
              <th style={{ width: '12%' }}>
                Measurement
                <br />
                Point / Method
              </th>
              <th style={{ width: '40%', textAlign: 'left', paddingLeft: '10px' }}>
                Measurement Reading
              </th>
              <th style={{ width: '36%' }}>Ref. Photos</th>
              <th style={{ width: '12%' }}>Risk Category</th>
            </tr>
          </thead>
          <tbody>
            {earthResistanceRecords.map((item, idx) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  height: '150px',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 700, fontSize: '11px' }}>
                  {item.point}
                </td>
                <td style={{ padding: '6px 10px' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '10.5px',
                      fontWeight: 600,
                      color: '#0f172a',
                      mb: '4px',
                    }}
                  >
                    {item.reading}
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
                      alt={`Earth Reading ${item.point}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#15803d',
                    }}
                  >
                    {item.riskCategory}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* Note at bottom */}
        <Box sx={{ mt: '2px', pl: 0.5 }}>
          <Typography
            sx={{
              fontFamily: '"Inter", "Roboto", sans-serif',
              fontSize: '10px',
              color: '#1e293b',
              fontWeight: 600,
            }}
          >
            <strong>Note:</strong> Risk assessment is based on the readings at the time of the
            measurement as above.
          </Typography>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page8EarthResistance;
