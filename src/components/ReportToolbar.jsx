import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  Chip,
} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const ReportToolbar = ({
  totalPages,
  currentPage,
  onPageSelect,
  zoomLevel,
  setZoomLevel,
}) => {
  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 1.4));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, 0.6));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  return (
    <AppBar
      position="sticky"
      className="no-print"
      elevation={2}
      sx={{
        backgroundColor: '#1e293b',
        color: '#ffffff',
        top: 0,
        zIndex: 1100,
        borderBottom: '1px solid #334155',
      }}
    >
      <Toolbar
        variant="dense"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          py: 0.8,
          gap: 1.5,
        }}
      >
        {/* Left: Document info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <PictureAsPdfIcon sx={{ color: '#ef4444', fontSize: 24 }} />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, fontSize: '14px', lineHeight: 1.2 }}
            >
              Wind Turbine Inspection Report
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: '#94a3b8', fontSize: '11px', display: 'block' }}
            >
              Loc No: JGBPL-01 - Dhandalpur • A4 Standard Design
            </Typography>
          </Box>
          <Chip
            label={`${totalPages} Pages (Dynamic)`}
            size="small"
            sx={{
              backgroundColor: '#0f766e',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '11px',
              height: '22px',
            }}
          />
        </Box>

        {/* Center: Jump to page */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontSize: '12px', color: '#cbd5e1' }}>Go to:</Typography>
          <Select
            size="small"
            value={currentPage}
            onChange={(e) => onPageSelect(Number(e.target.value))}
            sx={{
              backgroundColor: '#334155',
              color: '#ffffff',
              fontSize: '12px',
              height: '30px',
              '.MuiSvgIcon-root': { color: '#ffffff' },
              borderRadius: '4px',
            }}
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <MenuItem key={pg} value={pg} sx={{ fontSize: '12px' }}>
                Page {pg}
              </MenuItem>
            ))}
          </Select>
        </Box>

        {/* Right: Zoom & Print controls */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#334155',
              borderRadius: '4px',
              px: 0.5,
            }}
          >
            <Tooltip title="Zoom Out">
              <span>
                <IconButton
                  size="small"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.6}
                  sx={{ color: '#ffffff' }}
                >
                  <ZoomOutIcon fontSize="small" />
                </IconButton>
              </span>
            </Tooltip>

            <Typography
              sx={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#e2e8f0',
                px: 1,
                minWidth: '40px',
                textAlign: 'center',
              }}
            >
              {Math.round(zoomLevel * 100)}%
            </Typography>

            <Tooltip title="Zoom In">
              <span>
                <IconButton
                  size="small"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 1.4}
                  sx={{ color: '#ffffff' }}
                >
                  <ZoomInIcon fontSize="small" />
                </IconButton>
              </span>
            </Tooltip>

            <Tooltip title="Reset Zoom (100%)">
              <IconButton size="small" onClick={handleResetZoom} sx={{ color: '#94a3b8' }}>
                <RestartAltIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<PrintIcon />}
            onClick={handlePrint}
            sx={{
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '12px',
              backgroundColor: '#2563eb',
              '&:hover': { backgroundColor: '#1d4ed8' },
              px: 1.8,
              height: '32px',
              borderRadius: '4px',
            }}
          >
            Print / Save as PDF
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ReportToolbar;
