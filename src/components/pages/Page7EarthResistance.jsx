import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { earthResistanceRecords } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '14px',
  fontWeight: 800,
  color: '#134b8a',
  mb: '8px',
  letterSpacing: '0.2px',
};

const Page7EarthResistance = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography sx={sectionTitleStyle}>
          8. EARTH RESISTANCE MEASUREMENT
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
              lineHeight: 1.3,
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
              <th style={{ width: '14%' }}>
                Measurement
                <br />
                Point / Method
              </th>
              <th style={{ width: '40%', textAlign: 'left', paddingLeft: '14px' }}>
                Measurement Reading
              </th>
              <th style={{ width: '33%' }}>Ref. Photos</th>
              <th style={{ width: '13%' }}>Risk Category</th>
            </tr>
          </thead>
          <tbody>
            {earthResistanceRecords.map((item, idx) => (
              <tr
                key={item.id}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                  height: '200px',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 800, fontSize: '13px' }}>
                  {item.point}
                </td>
                <td style={{ padding: '10px 14px' }}>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", "Roboto", sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0f172a',
                      mb: '6px',
                    }}
                  >
                    {item.reading}
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
                      lineHeight: 1.4,
                    }}
                  >
                    {item.wayForward}
                  </Typography>
                </td>
                <td style={{ textAlign: 'center', padding: '6px' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '175px',
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
                      fontSize: '12px',
                      fontWeight: 700,
                      color: '#15803d',
                      backgroundColor: '#dcfce7',
                      border: '1px solid #86efac',
                      py: '5px',
                      px: 1.5,
                      borderRadius: '3px',
                      display: 'inline-block',
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
        <Box sx={{ mt: 1.5, pt: 1, borderTop: '1px solid #e2e8f0' }}>
          <Typography
            sx={{
              fontFamily: '"Inter", "Roboto", sans-serif',
              fontSize: '12px',
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

export default Page7EarthResistance;
