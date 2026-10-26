import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { criticalSensors, highRiskAssessments } from '../../data/reportData';

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '12px',
  fontWeight: 800,
  color: '#1a365d',
  mb: '4px',
  letterSpacing: '0.2px',
};

const Page5CriticalSensorAndRisk = ({ pageNumber, totalPages }) => {
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
            fontSize: '10px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            mb: 1.5,
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#1e3a8a',
              fontWeight: 700,
              padding: '3px 4px',
              border: '1px solid #94a3b8',
              textAlign: 'center',
              lineHeight: 1.15,
            },
            '& td': {
              padding: '4px 6px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              textAlign: 'center',
              verticalAlign: 'middle',
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
                <td style={{ fontWeight: 700, color: '#dc2626' }}>
                  {item.functional.notOk || '-'}
                </td>
                <td>{item.functional.na || '-'}</td>
                <td style={{ fontWeight: 700, color: '#16a34a' }}>
                  {item.scada.ok || '-'}
                </td>
                <td>{item.scada.notOk || '-'}</td>
                <td>{item.scada.na || '-'}</td>
                <td>{item.feedback.ok || '-'}</td>
                <td style={{ fontWeight: 700, color: '#dc2626' }}>
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
            fontSize: '9.5px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#1e3a8a',
              fontWeight: 700,
              padding: '4px 6px',
              border: '1px solid #94a3b8',
              textAlign: 'left',
            },
            '& td': {
              padding: '3px 6px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              verticalAlign: 'top',
              lineHeight: 1.25,
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
                      px: 1,
                      py: '1px',
                      borderRadius: '2px',
                      fontSize: '9.5px',
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

export default Page5CriticalSensorAndRisk;
