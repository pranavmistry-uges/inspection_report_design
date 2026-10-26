import { StyleSheet } from '@react-pdf/renderer';

export const pdfStyles = StyleSheet.create({
  // Page container
  page: {
    size: 'A4',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 28,
    paddingRight: 28,
    fontFamily: 'Helvetica',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
  },

  // Standard Header
  headerContainer: {
    height: 50,
    borderWidth: 1,
    borderColor: '#9bb7d4',
    borderStyle: 'solid',
    backgroundColor: '#edf5fd',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  headerLeft: {
    width: '23%',
    borderRightWidth: 1,
    borderRightColor: '#9bb7d4',
    borderRightStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  headerLogo: {
    maxHeight: 38,
    maxWidth: '92%',
    objectFit: 'contain',
  },
  headerCenter: {
    width: '57%',
    borderRightWidth: 1,
    borderRightColor: '#9bb7d4',
    borderRightStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  headerTitle: {
    fontSize: 12.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
    marginTop: 2,
  },
  headerRight: {
    width: '20%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingHorizontal: 4,
  },
  headerIconRow: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerIconBlock: {
    width: 4,
    height: 4,
    marginHorizontal: 1,
  },
  headerPageNumber: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
  },

  // Content Area
  contentArea: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },

  // Section Headings
  sectionTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    marginBottom: 4,
    letterSpacing: 0.2,
  },

  // General Table Styles
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#94a3b8',
    borderStyle: 'solid',
    marginBottom: 7,
  },
  tableRowHeader: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#dbeafe',
    borderBottomWidth: 1,
    borderBottomColor: '#94a3b8',
    borderBottomStyle: 'solid',
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cbd5e1',
    borderBottomStyle: 'solid',
  },
  tableRowEven: {
    backgroundColor: '#ffffff',
  },
  tableRowOdd: {
    backgroundColor: '#f8fafc',
  },

  thCell: {
    paddingVertical: 3,
    paddingHorizontal: 4,
    borderRightWidth: 0.5,
    borderRightColor: '#94a3b8',
    borderRightStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
  },
  thText: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'left',
  },
  thTextCenter: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: '#134b8a',
    textAlign: 'center',
  },

  tdCell: {
    paddingVertical: 2.5,
    paddingHorizontal: 4,
    borderRightWidth: 0.5,
    borderRightColor: '#cbd5e1',
    borderRightStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
  },
  tdText: {
    fontSize: 7.5,
    color: '#1e293b',
  },
  tdTextBold: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
  },
  tdTextCenter: {
    fontSize: 7.5,
    color: '#1e293b',
    textAlign: 'center',
  },
  tdTextCenterBold: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#1e293b',
    textAlign: 'center',
  },

  // Badges
  badgeOk: {
    backgroundColor: '#dcfce7',
    borderWidth: 0.5,
    borderColor: '#86efac',
    borderRadius: 2,
    paddingVertical: 1,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  badgeOkText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: '#15803d',
  },
  badgeNotOk: {
    backgroundColor: '#fee2e2',
    borderWidth: 0.5,
    borderColor: '#f87171',
    borderRadius: 2,
    paddingVertical: 1,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  badgeNotOkText: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: '#b91c1c',
  },

  badgeHigh: {
    backgroundColor: '#fee2e2',
    borderWidth: 0.5,
    borderColor: '#f87171',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  badgeHighText: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#b91c1c',
  },
  badgeMedium: {
    backgroundColor: '#ffedd5',
    borderWidth: 0.5,
    borderColor: '#fb923c',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  badgeMediumText: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#c2410c',
  },
  badgeLow: {
    backgroundColor: '#fef9c3',
    borderWidth: 0.5,
    borderColor: '#facc15',
    borderRadius: 2,
    paddingVertical: 2,
    paddingHorizontal: 6,
    alignSelf: 'center',
  },
  badgeLowText: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: '#854d0e',
  },

  // Priority Boxes
  priorityBoxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 7,
  },
  priorityBox: {
    width: '32%',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  priorityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffffff',
    marginRight: 5,
  },
  priorityText: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#ffffff',
  },

  // Image Row for Observations & Measurements
  photoContainer: {
    width: '100%',
    height: 125,
    borderWidth: 0.5,
    borderColor: '#cbd5e1',
    borderRadius: 2,
    backgroundColor: '#000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  photoImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },

  // Notes
  noteContainer: {
    marginTop: 5,
    paddingTop: 3,
    borderTopWidth: 0.5,
    borderTopColor: '#e2e8f0',
  },
  noteTitle: {
    fontSize: 8.5,
    fontFamily: 'Helvetica-Bold',
    color: '#0f172a',
    marginBottom: 2,
  },
  noteText: {
    fontSize: 8,
    color: '#334155',
    lineHeight: 1.3,
  },
});
