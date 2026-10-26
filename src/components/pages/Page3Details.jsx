import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import {
  generalDetails,
  inspectionDetails,
  representatives,
  majorComponents,
} from '../../data/reportData';

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '11px',
  fontFamily: '"Inter", "Roboto", sans-serif',
  mb: '10px',
  '& th': {
    backgroundColor: '#dbeafe',
    color: '#134b8a',
    fontWeight: 700,
    padding: '4px 6px',
    border: '1px solid #94a3b8',
    textAlign: 'left',
    fontSize: '11px',
  },
  '& td': {
    padding: '3px 6px',
    border: '1px solid #cbd5e1',
    color: '#1e293b',
    verticalAlign: 'middle',
    fontSize: '11px',
  },
  '& tr:nth-of-type(even)': {
    backgroundColor: '#f8fafc',
  },
};

const sectionTitleStyle = {
  fontFamily: '"Inter", "Roboto", sans-serif',
  fontSize: '12.5px',
  fontWeight: 800,
  color: '#134b8a',
  mb: '4px',
  letterSpacing: '0.2px',
};

const Page3Details = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* 1. GENERAL DETAILS OF WIND TURBINE */}
        <Typography sx={sectionTitleStyle}>
          1.GENERAL DETAILS OF WIND TURBINE :
        </Typography>
        <Box component="table" sx={tableStyles}>
          <thead>
            <tr>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '22%' }}>Details</th>
              <th style={{ width: '22%' }}>Input</th>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '22%' }}>Details</th>
              <th style={{ width: '22%' }}>Input</th>
            </tr>
          </thead>
          <tbody>
            {generalDetails.map((row, idx) => (
              <tr key={idx}>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo1}</td>
                <td style={{ fontWeight: 600, color: '#334155' }}>{row.details1}</td>
                <td>{row.input1}</td>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo2}</td>
                <td style={{ fontWeight: 600, color: '#334155' }}>{row.details2}</td>
                <td>{row.input2}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* 2. INSPECTION DETAILS */}
        <Typography sx={sectionTitleStyle}>2.INSPECTION DETAILS :</Typography>
        <Box component="table" sx={tableStyles}>
          <thead>
            <tr>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '22%' }}>Details</th>
              <th style={{ width: '22%' }}>Input</th>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '22%' }}>Details</th>
              <th style={{ width: '22%' }}>Input</th>
            </tr>
          </thead>
          <tbody>
            {inspectionDetails.map((row, idx) => (
              <tr key={idx}>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo1}</td>
                <td style={{ fontWeight: 600, color: '#334155' }}>{row.details1}</td>
                <td>{row.input1}</td>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo2}</td>
                <td style={{ fontWeight: 600, color: '#334155' }}>{row.details2}</td>
                <td>{row.input2}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* REPRESENTATIVES */}
        <Typography sx={sectionTitleStyle}>REPRESENTATIVES :</Typography>
        <Box component="table" sx={tableStyles}>
          <thead>
            <tr>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '31%' }}>Customer Representative</th>
              <th style={{ width: '31%' }}>Demo Representative</th>
              <th style={{ width: '32%' }}>OEM / OM Representative</th>
            </tr>
          </thead>
          <tbody>
            {representatives.map((row, idx) => (
              <tr key={idx}>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo}</td>
                <td>{row.customer}</td>
                <td style={{ whiteSpace: 'pre-line' }}>{row.demo}</td>
                <td>{row.oem}</td>
              </tr>
            ))}
          </tbody>
        </Box>

        {/* 3. DETAILS OF MAJOR COMPONENTS */}
        <Typography sx={sectionTitleStyle}>3. DETAILS OF MAJOR COMPONENTS:</Typography>
        <Box component="table" sx={{ ...tableStyles, mb: '2px' }}>
          <thead>
            <tr>
              <th style={{ width: '6%', textAlign: 'center' }}>S.No</th>
              <th style={{ width: '31%' }}>Component</th>
              <th style={{ width: '31%' }}>Manufacturer</th>
              <th style={{ width: '32%' }}>Serial No</th>
            </tr>
          </thead>
          <tbody>
            {majorComponents.map((row, idx) => (
              <tr key={idx}>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{row.sNo}</td>
                <td style={{ fontWeight: 600, color: '#334155' }}>{row.component}</td>
                <td>{row.manufacturer}</td>
                <td style={{ fontFamily: 'monospace', fontSize: '10.5px' }}>
                  {row.serialNo}
                </td>
              </tr>
            ))}
          </tbody>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page3Details;
