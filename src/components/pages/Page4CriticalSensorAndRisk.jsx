import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { criticalSensors, highRiskAssessments } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '13px',
  fontWeight: 800,
  color: '#134b8a',
  mb: '6px',
  letterSpacing: '0.2px',
};

const Page4CriticalSensorAndRisk = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* 5. WTG CRITICAL SENSOR INSPECTION CHECK */}
        <Typography sx={sectionTitleStyle}>
          5. WTG CRITICAL SENSOR INSPECTION CHECK:
        </Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '11px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            mb: 2,
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#134b8a',
              fontWeight: 700,
              padding: '5px 4px',
              border: '1px solid #94a3b8',
              textAlign: 'center',
              lineHeight: 1.2,
              fontSize: '11px',
            },
            '& td': {
              padding: '6px 8px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontSize: '11px',
            },
          }}
        >
          <thead>
            <tr>
              <th rowSpan={2} style={{ width: '6%' }}>
                Sr. No
              </th>
              <th rowSpan={2} style={{ width: '31%', textAlign: 'left', paddingLeft: '8px' }}>
                WTG Critical Check Points
              </th>
              <th colSpan={3} style={{ width: '21%' }}>
                Functional Check
              </th>
              <th colSpan={3} style={{ width: '21%' }}>
                SCADA Log Status
              </th>
              <th colSpan={3} style={{ width: '21%' }}>
                Sensor Feedback
              </th>
            </tr>
            <tr>
              <th style={{ width: '7%' }}>Ok</th>
              <th style={{ width: '7%' }}>Not Ok</th>
              <th style={{ width: '7%' }}>Not Applicable</th>
              <th style={{ width: '7%' }}>Ok</th>
              <th style={{ width: '7%' }}>Not Ok</th>
              <th style={{ width: '7%' }}>Not Applicable</th>
              <th style={{ width: '7%' }}>Ok</th>
              <th style={{ width: '7%' }}>Not Ok</th>
              <th style={{ width: '7%' }}>Not Applicable</th>
            </tr>
          </thead>
          <tbody>
            {criticalSensors.map((item, idx) => (
              <tr key={idx} style={{ backgroundColor: '#ffffff' }}>
                <td style={{ fontWeight: 600 }}>{item.srNo}</td>
                <td style={{ textAlign: 'left', paddingLeft: '8px', fontWeight: 600 }}>
                  {item.checkPoint}
                </td>
                <td>{item.functional.ok || '-'}</td>
                <td style={{ fontWeight: 800, color: '#dc2626', fontSize: '12px' }}>
                  {item.functional.notOk || '-'}
                </td>
                <td>{item.functional.na || '-'}</td>
                <td style={{ fontWeight: 800, color: '#16a34a', fontSize: '12px' }}>
                  {item.scada.ok || '-'}
                </td>
                <td>{item.scada.notOk || '-'}</td>
                <td>{item.scada.na || '-'}</td>
                <td>{item.feedback.ok || '-'}</td>
                <td style={{ fontWeight: 800, color: '#dc2626', fontSize: '12px' }}>
                  {item.feedback.notOk || '-'}
                </td>
                <td>{item.feedback.na || '-'}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* 6. HIGH RISK ASSESSMENT TABLE */}
        <Typography sx={sectionTitleStyle}>6. HIGH RISK ASSESSMENT TABLE:</Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '11px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#134b8a',
              fontWeight: 700,
              padding: '6px 8px',
              border: '1px solid #94a3b8',
              textAlign: 'left',
              fontSize: '11px',
            },
            '& td': {
              padding: '4px 8px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              verticalAlign: 'top',
              lineHeight: 1.35,
              fontSize: '10.5px',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: '5%', textAlign: 'center' }}>S. No.</th>
              <th style={{ width: '38%' }}>Observation Areas</th>
              <th style={{ width: '12%', textAlign: 'center' }}>Risk Category</th>
              <th style={{ width: '38%' }}>Mitigation</th>
              <th style={{ width: '7%', textAlign: 'center' }}>Target Date</th>
            </tr>
          </thead>
          <tbody>
            {highRiskAssessments.map((item, idx) => (
              <tr
                key={idx}
                style={{
                  backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc',
                }}
              >
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{item.sNo}</td>
                <td>{item.observationArea}</td>
                <td style={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      px: 1.2,
                      py: '2px',
                      borderRadius: '2px',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      backgroundColor: '#fee2e2',
                      color: '#b91c1c',
                      border: '1px solid #f87171',
                    }}
                  >
                    {item.riskCategory}
                  </Box>
                </td>
                <td>{item.mitigation}</td>
                <td style={{ textAlign: 'center' }}>{item.targetDate}</td>
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page4CriticalSensorAndRisk;
