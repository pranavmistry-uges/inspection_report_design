import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import {
  bladeInspectionRecords,
  finalNotes,
  signatureDetails,
} from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '14px',
  fontWeight: 800,
  color: '#134b8a',
  mb: '8px',
  letterSpacing: '0.2px',
};

const getRiskBadge = (category) => {
  let bgcolor = '#fef9c3';
  let color = '#854d0e';
  let border = '#facc15';

  if (category === 'Medium') {
    bgcolor = '#ffedd5';
    color = '#c2410c';
    border = '#fb923c';
  } else if (category === 'High') {
    bgcolor = '#fee2e2';
    color = '#b91c1c';
    border = '#f87171';
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

const Page9BladeAndSignatures = ({ pageNumber, totalPages }) => {
  const records = bladeInspectionRecords.slice(0, 2);

  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* 10. BLADE INSPECTION */}
        <Typography sx={sectionTitleStyle}>10. BLADE INSPECTION</Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontFamily: '"Inter", "Roboto", sans-serif',
            mb: 2.5,
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
              <th style={{ width: '18%' }}>
                Measurement
                <br />
                Point / Method
              </th>
              <th style={{ width: '36%', textAlign: 'left', paddingLeft: '14px' }}>
                Measurement Reading
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
                  height: '175px',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 700, fontSize: '12px' }}>
                  {item.point}
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
                      lineHeight: 1.5,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {item.wayForward}
                  </Typography>
                </td>
                <td style={{ textAlign: 'center', padding: '6px' }}>
                  <Box
                    sx={{
                      width: '100%',
                      height: '155px',
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
                      alt={item.point}
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

        {/* Final Notes */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '13px',
            fontWeight: 800,
            color: '#0f172a',
            mb: 1,
          }}
        >
          Final Notes:
        </Typography>

        <Box sx={{ pl: 0.5, mb: 2 }}>
          {finalNotes.map((note, idx) => (
            <Typography
              key={idx}
              sx={{
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '12px',
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
            fontSize: '13px',
            fontWeight: 800,
            color: '#0f172a',
            mb: 3,
          }}
        >
          Instrument Details:
        </Typography>

        {/* Signatures Heading */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '14px',
            fontWeight: 800,
            color: '#134b8a',
            mb: 3.5,
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
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#0f172a',
                mb: 3.5,
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
                fontSize: '12px',
                fontWeight: 600,
                color: '#1e293b',
                mb: 3.5,
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
                fontSize: '12px',
                fontWeight: 600,
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
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#0f172a',
                mb: 3.5,
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
                fontSize: '12px',
                fontWeight: 600,
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
                fontSize: '12.5px',
                fontWeight: 800,
                color: '#0f172a',
                mb: 3.5,
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
                fontSize: '12px',
                fontWeight: 600,
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

export default Page9BladeAndSignatures;
