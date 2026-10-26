import React from 'react';
import { Box, Typography } from '@mui/material';
import A4Page from '../A4Page';
import { reportMetadata, checklistData } from '../../data/reportData';

const Page4Checklist = ({ pageNumber, totalPages }) => {
  return (
    <A4Page pageNumber={pageNumber} totalPages={totalPages}>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* 5) Three Priority Boxes */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 1.5,
            mb: 1,
          }}
        >
          {/* High Priority */}
          <Box
            sx={{
              backgroundColor: '#dc2626',
              border: '1.5px solid #b91c1c',
              borderRadius: '2px',
              py: 0.6,
              px: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
            <Typography
              sx={{
                color: '#ffffff',
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2px',
              }}
            >
              High Priority
            </Typography>
          </Box>

          {/* Medium Priority */}
          <Box
            sx={{
              backgroundColor: '#ea580c',
              border: '1.5px solid #c2410c',
              borderRadius: '2px',
              py: 0.6,
              px: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
            <Typography
              sx={{
                color: '#ffffff',
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2px',
              }}
            >
              Medium Priority
            </Typography>
          </Box>

          {/* Low Priority */}
          <Box
            sx={{
              backgroundColor: '#facc15',
              border: '1.5px solid #ca8a04',
              borderRadius: '2px',
              py: 0.6,
              px: 1.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: '#ffffff',
              }}
            />
            <Typography
              sx={{
                color: '#1e293b',
                fontFamily: '"Inter", "Roboto", sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.2px',
              }}
            >
              Low Priority
            </Typography>
          </Box>
        </Box>

        {/* 6) Risk Classification Image */}
        <Box
          sx={{
            width: '100%',
            mb: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={reportMetadata.riskClassificationBanner}
            alt="Risk Classification"
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '56px',
              objectFit: 'contain',
            }}
          />
        </Box>

        {/* 7) 4. COMPONENT INSPECTION CHECKLIST */}
        <Typography
          sx={{
            fontFamily: '"Inter", "Roboto", sans-serif',
            fontSize: '12px',
            fontWeight: 800,
            color: '#134b8a',
            mb: '4px',
            letterSpacing: '0.2px',
          }}
        >
          4. COMPONENT INSPECTION CHECKLIST:
        </Typography>

        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '10px',
            fontFamily: '"Inter", "Roboto", sans-serif',
            '& th': {
              backgroundColor: '#dbeafe',
              color: '#134b8a',
              fontWeight: 800,
              padding: '4px 3px',
              border: '1.5px solid #94a3b8',
              textAlign: 'center',
              lineHeight: 1.2,
              fontSize: '10px',
            },
            '& td': {
              padding: '3px 4px',
              border: '1px solid #cbd5e1',
              color: '#1e293b',
              textAlign: 'center',
              verticalAlign: 'middle',
              fontSize: '10px',
            },
          }}
        >
          <thead>
            <tr>
              <th style={{ width: '5%' }}>SR No</th>
              <th style={{ width: '20%', textAlign: 'left', paddingLeft: '6px' }}>
                Description
              </th>
              <th style={{ width: '6%' }}>Paint Damage</th>
              <th style={{ width: '8%' }}>Physical Damage Dent Crack</th>
              <th style={{ width: '6%' }}>Corrosion</th>
              <th style={{ width: '6%' }}>Looseness</th>
              <th style={{ width: '6%' }}>Leakage</th>
              <th style={{ width: '8%' }}>Missing Or Not Available</th>
              <th style={{ width: '6%' }}>Function Issue</th>
              <th style={{ width: '6%' }}>Gap Or Not Sealed</th>
              <th style={{ width: '6%' }}>Not Sufficient</th>
              <th style={{ width: '13%' }}>Overview</th>
            </tr>
          </thead>
          <tbody>
            {checklistData.map((section, sIdx) => (
              <React.Fragment key={sIdx}>
                {/* Section Subheader Banner */}
                <tr>
                  <td
                    colSpan={12}
                    style={{
                      backgroundColor: '#bfdbfe',
                      color: '#134b8a',
                      fontWeight: 800,
                      textAlign: 'left',
                      padding: '4px 8px',
                      fontSize: '10.5px',
                      letterSpacing: '0.3px',
                      borderTop: sIdx > 0 ? '1.5px solid #94a3b8' : '1px solid #cbd5e1',
                    }}
                  >
                    {section.sectionHeader}
                  </td>
                </tr>

                {/* Section Items */}
                {section.items.map((item, iIdx) => {
                  const isCorrosionYellow = item.corrosionHighlight === 'yellow';
                  const isFunctionIssueRed = item.functionIssueHighlight === 'red';
                  const isFunctionIssueOrange = item.functionIssueHighlight === 'orange';
                  const isNotSufficientRed = item.notSufficientHighlight === 'red';
                  const isNotSufficientOrange = item.notSufficientHighlight === 'orange';
                  const isNotOk = item.overview === 'Not ok';

                  return (
                    <tr
                      key={iIdx}
                      style={{
                        backgroundColor: iIdx % 2 === 0 ? '#ffffff' : '#f8fafc',
                      }}
                    >
                      <td style={{ fontWeight: 700 }}>{item.srNo}</td>
                      <td style={{ textAlign: 'left', paddingLeft: '6px', fontWeight: 600 }}>
                        {item.description}
                      </td>
                      <td>-</td>
                      <td>-</td>

                      {/* Corrosion */}
                      <td
                        style={{
                          backgroundColor: isCorrosionYellow ? '#fef08a' : 'inherit',
                          fontWeight: isCorrosionYellow ? 800 : 400,
                        }}
                      >
                        -
                      </td>

                      <td>-</td>
                      <td>-</td>
                      <td>-</td>

                      {/* Function Issue */}
                      <td
                        style={{
                          backgroundColor: isFunctionIssueRed
                            ? '#fca5a5'
                            : isFunctionIssueOrange
                            ? '#fdba74'
                            : 'inherit',
                          fontWeight:
                            isFunctionIssueRed || isFunctionIssueOrange ? 800 : 400,
                        }}
                      >
                        -
                      </td>

                      <td>-</td>

                      {/* Not Sufficient */}
                      <td
                        style={{
                          backgroundColor: isNotSufficientRed
                            ? '#fca5a5'
                            : isNotSufficientOrange
                            ? '#fdba74'
                            : 'inherit',
                          fontWeight:
                            isNotSufficientRed || isNotSufficientOrange ? 800 : 400,
                        }}
                      >
                        -
                      </td>

                      {/* Overview Badge */}
                      <td>
                        <Box
                          sx={{
                            display: 'inline-block',
                            px: 1.2,
                            py: '2px',
                            borderRadius: '2px',
                            fontSize: '9.5px',
                            fontWeight: 700,
                            backgroundColor: isNotOk ? '#fee2e2' : '#dcfce7',
                            color: isNotOk ? '#b91c1c' : '#15803d',
                            border: `1px solid ${isNotOk ? '#f87171' : '#86efac'}`,
                          }}
                        >
                          {item.overview}
                        </Box>
                      </td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ))}
          </tbody>
        </Box>
      </Box>
    </A4Page>
  );
};

export default Page4Checklist;
