import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.jpg';
import image6 from '../assets/image-6.jpg';
import image7 from '../assets/image-7.jpg';
import image8 from '../assets/image-8.jpg';
import image9 from '../assets/image-9.jpg';
import image10 from '../assets/image-10.jpg';

export const reportMetadata = {
  title: 'Wind Turbine Technical Inspection',
  locationNo: 'Loc No: JGBPL-01 - Dhandalpur',
  siteName: 'Dhandalpur',
  coverImage: image1,
  riskClassificationBanner: image2,
};

export const tableOfContents = [
  { id: 1, title: 'GENERAL DETAILS OF WIND TURBINE' },
  { id: 2, title: 'INSPECTION DETAILS OF WIND TURBINE' },
  { id: 3, title: 'MAJOR COMPONENTS OF WIND TURBINE' },
  { id: 4, title: 'INSPECTION CHECKLIST' },
  { id: 5, title: 'WTG CRITICAL SENSOR INSPECTION CHECK' },
  { id: 6, title: 'HIGH RISK ASSESSMENT TABLE' },
  { id: 7, title: 'OBSERVATIONS & PHOTOGRAPHS' },
  { id: 8, title: 'EARTH RESISTANCE MEASUREMENT' },
  { id: 9, title: 'GENERATOR IR MEASUREMENT' },
  { id: 10, title: 'BLADE INSPECTION' },
];

export const generalDetails = [
  {
    sNo1: 1,
    details1: 'PROJECT',
    input1: 'End of warranty inspection (Chotila)',
    sNo2: 2,
    details2: 'WINDFARM',
    input2: 'End of warranty inspection (Chotila)',
  },
  {
    sNo1: 3,
    details1: 'LOCATION NO',
    input1: 'JGBPL-01',
    sNo2: 4,
    details2: 'VILLAGE',
    input2: 'Adala /Dhandalpur',
  },
  {
    sNo1: 5,
    details1: 'DIST',
    input1: 'surendranagar',
    sNo2: 6,
    details2: 'TALUKA',
    input2: 'Chotila',
  },
  {
    sNo1: 7,
    details1: 'STATE',
    input1: 'Gujarat',
    sNo2: 8,
    details2: 'COUNTRY',
    input2: 'India',
  },
  {
    sNo1: 9,
    details1: 'WINDFARM CAPACITY',
    input1: '-',
    sNo2: 10,
    details2: 'TURBINE GPS COORDINATES',
    input2: '738749N, 2471993E (UTM)',
  },
  {
    sNo1: 11,
    details1: 'TURBINE MANUFACTURER',
    input1: 'Suzlon',
    sNo2: 12,
    details2: 'WTG MODEL',
    input2: 'S144',
  },
  {
    sNo1: 13,
    details1: 'WTG SERIAL NO',
    input1: 'JGBPL-01',
    sNo2: 14,
    details2: 'WTG LOCATION NO',
    input2: 'JGBPL-01',
  },
  {
    sNo1: 15,
    details1: 'WTG SCADA NO',
    input1: 'JGBPL-01',
    sNo2: 16,
    details2: 'WTG CAPACITY',
    input2: '3.15 (MW)',
  },
  {
    sNo1: 17,
    details1: 'ROTOR DIAMETER',
    input1: '144 (MTR)',
    sNo2: 18,
    details2: 'HUB HEIGHT',
    input2: '140 (MTR)',
  },
  {
    sNo1: 19,
    details1: 'LAST ACTIVITY',
    input1: '2026-03-20',
    sNo2: '',
    details2: '',
    input2: '',
  },
];

export const inspectionDetails = [
  {
    sNo1: 1,
    details1: 'DATE OF INSPECTION',
    input1: '20-03-2026',
    sNo2: 2,
    details2: 'OPERATING HOURS',
    input2: '-',
  },
  {
    sNo1: 3,
    details1: 'WTG STOP TIME',
    input1: '11:05',
    sNo2: 4,
    details2: 'TOTAL PRODUCTION',
    input2: '-',
  },
  {
    sNo1: 5,
    details1: 'WTG START TIME',
    input1: '19:02',
    sNo2: 6,
    details2: 'TEMPERATURE',
    input2: '34 °C',
  },
  {
    sNo1: 7,
    details1: 'WIND SPEED',
    input1: '4.2 (m/s)',
    sNo2: 8,
    details2: 'INSPECTION TYPE',
    input2: 'TURBINE',
  },
];

export const representatives = [
  {
    sNo: 1,
    customer: 'Mr. Lalatendu Sahoo',
    demo: 'Mr. Mallik Srinivas\nGanesh Chaudhari',
    oem: 'Mr. Manish',
  },
];

export const majorComponents = [
  { sNo: 1, component: 'Tower', manufacturer: 'Suzlon', serialNo: '140S144TPV0SE' },
  { sNo: 2, component: 'Generator', manufacturer: 'Suzlon', serialNo: 'MH5277A23012' },
  { sNo: 3, component: 'Gearbox', manufacturer: 'ZF', serialNo: 'EF0953A-001/CM0006' },
  { sNo: 4, component: 'Rotor Blade - 1', manufacturer: 'Suzlon', serialNo: '147037' },
  { sNo: 5, component: 'Rotor Blade - 2', manufacturer: 'Suzlon', serialNo: '147022' },
  { sNo: 6, component: 'Rotor Blade - 3', manufacturer: 'Suzlon', serialNo: '147021' },
  { sNo: 7, component: 'Nacelle', manufacturer: 'Suzlon', serialNo: 'HL5D5N0009S144IL2' },
  { sNo: 8, component: 'Hub', manufacturer: 'Suzlon', serialNo: 'HL5D5H0009S144IL2' },
];

export const checklistData = [
  {
    sectionHeader: 'FOUNDATION & TOWER (OUTSIDE)',
    items: [
      { srNo: '2.1', description: 'Foundation Surface', overview: 'Found ok' },
      { srNo: '2.2', description: 'Grouting', overview: 'Found ok' },
      { srNo: '2.3', description: 'Back Filling Area', overview: 'Found ok' },
      { srNo: '2.4', description: 'Anchor Bolts/Cap', overview: 'Found ok' },
      { srNo: '2.5', description: 'Stair Case Grouting', overview: 'Found ok' },
      {
        srNo: '2.6',
        description: 'Earthing Strips & Pit',
        overview: 'Not ok',
        corrosionHighlight: 'yellow',
      },
      { srNo: '2.7', description: 'Tower Structure', overview: 'Found ok' },
      { srNo: '2.8', description: 'Stair Case Structure', overview: 'Found ok' },
      { srNo: '2.9', description: 'Main Door Earthing', overview: 'Found ok' },
    ],
  },
  {
    sectionHeader: 'BASEMENT & BASE SEC.',
    items: [
      { srNo: '3.1', description: 'Tower Structure', overview: 'Found ok' },
      { srNo: '3.2', description: 'Tower Earthing', overview: 'Found ok' },
      {
        srNo: '3.14',
        description: 'Bottom Controller',
        overview: 'Not ok',
        functionIssueHighlight: 'red',
        notSufficientHighlight: 'red',
      },
      {
        srNo: '3.19',
        description: 'Fire Extinguisher',
        overview: 'Not ok',
        notSufficientHighlight: 'orange',
      },
      {
        srNo: '3.21',
        description: 'Safety Signs & Labels',
        overview: 'Not ok',
        corrosionHighlight: 'yellow',
      },
      {
        srNo: '3.23',
        description: 'Bottom lift control panel',
        overview: 'Not ok',
        functionIssueHighlight: 'orange',
      },
      {
        srNo: '3.24',
        description: 'Radiator',
        overview: 'Not ok',
        notSufficientHighlight: 'orange',
      },
    ],
  },
];

export const criticalSensors = [
  {
    srNo: 1,
    checkPoint: 'Protection Relay',
    functional: { ok: false, notOk: 'X', na: false },
    scada: { ok: 'Y', notOk: false, na: false },
    feedback: { ok: false, notOk: 'X', na: false },
  },
];

export const highRiskAssessments = [
  {
    sNo: 1,
    observationArea: 'Cotton waste material found on DP isolator pole.',
    riskCategory: 'High',
    mitigation:
      'Remove all cotton waste immediately, clean the area, and implement regular housekeeping checks to prevent recurrence.',
    targetDate: '-',
  },
  {
    sNo: 2,
    observationArea: 'Lift operating switch is damaged.',
    riskCategory: 'High',
    mitigation:
      'Replace or repair the lift operating switch immediately and conduct functional checks to ensure safe operation.',
    targetDate: '-',
  },
  {
    sNo: 3,
    observationArea: 'Aviation obstruction lights are not functioning.',
    riskCategory: 'High',
    mitigation:
      'Repair or replace the aviation lights immediately, check power supply and connections, and implement routine functional checks.',
    targetDate: '-',
  },
  {
    sNo: 4,
    observationArea:
      'The main bearing shrink disc was observed in a corroded condition, and grease leakage was also noted from the main bearing NDE (Non-Drive End) side.',
    riskCategory: 'High',
    mitigation:
      'Clean the affected area, remove corrosion, reapply proper protection, inspect for damage, and rectify source of grease leakage.',
    targetDate: '-',
  },
  {
    sNo: 5,
    observationArea: 'Fire extinguisher refilling due date has expired.',
    riskCategory: 'High',
    mitigation:
      'Refill or replace the fire extinguisher immediately and implement a tracking system for timely servicing.',
    targetDate: '-',
  },
  {
    sNo: 6,
    observationArea: 'First aid kit materials are insufficient.',
    riskCategory: 'High',
    mitigation:
      'Replenish the first aid kit with required materials as per standard checklist and conduct periodic inspections.',
    targetDate: '-',
  },
  {
    sNo: 7,
    observationArea: 'The gearbox radiator was observed in a dusty condition.',
    riskCategory: 'High',
    mitigation:
      'Clean the radiator thoroughly, ensure proper airflow, and schedule regular cleaning and inspection.',
    targetDate: '-',
  },
  {
    sNo: 8,
    observationArea:
      'In the power panel, the main ACB feedback cable was observed to be disconnected/outside from the terminal.',
    riskCategory: 'High',
    mitigation: 'Reconnect the feedback cable properly to the designated terminal.',
    targetDate: '-',
  },
  {
    sNo: 9,
    observationArea:
      'One (01) Surge Arrester was found in a defective condition in the control panel.',
    riskCategory: 'High',
    mitigation:
      'Replace the defective surge arrester with a new unit of the same rating and specification.',
    targetDate: '-',
  },
  {
    sNo: 10,
    observationArea:
      'The nacelle area housekeeping was observed to be not properly maintained.',
    riskCategory: 'High',
    mitigation: 'Remove dust, debris, and any loose items from the nacelle area',
    targetDate: '-',
  },
  {
    sNo: 11,
    observationArea:
      'The transformer MOG (Magnetic Oil Level Gauge) is showing the oil level in full condition.',
    riskCategory: 'High',
    mitigation:
      'The transformer MOG (Magnetic Oil Level Gauge) is indicating full oil level however, it needs to be verified whether this is an actual oil level condition or a possible MOG malfunction.',
    targetDate: '-',
  },
];

export const observationRecords = [
  {
    id: 1,
    refNo: '2.6',
    observation: 'Corrosion observed on earth cable hardware at tower foundation.',
    wayForward:
      'Clean or replace corroded hardware, ensure proper tightening, and verify earthing resistance is within acceptable limits.',
    photo: image3,
    riskCategory: 'Low',
  },
  {
    id: 2,
    refNo: '3.14',
    observation:
      'In the power panel, the main ACB feedback cable was observed to be disconnected/outside from the terminal.',
    wayForward: 'Reconnect the feedback cable properly to the designated terminal.',
    photo: image4,
    riskCategory: 'High',
  },
  {
    id: 3,
    refNo: '3.14',
    observation: 'One (01) Surge Arrester was found in a defective condition in the control panel.',
    wayForward:
      'Replace the defective surge arrester with a new unit of the same rating and specification.',
    photo: image5,
    riskCategory: 'High',
  },
  {
    id: 4,
    refNo: '3.19',
    observation: 'Bottom platform fire extinguisher is overdue for servicing.',
    wayForward:
      'Service or replace the fire extinguisher immediately and implement a schedule to track future maintenance dates.',
    photo: image6,
    riskCategory: 'Medium',
  },
  {
    id: 5,
    refNo: '3.21',
    observation: 'Electric shock safety chart board is not properly fixed.',
    wayForward:
      'Re-fix or secure the chart board in its designated position and include it in regular safety inspections.',
    photo: image7,
    riskCategory: 'Low',
  },
  {
    id: 6,
    refNo: '3.23',
    observation: 'Bottom lift control panel push button switches are open/exposed.',
    wayForward:
      'Close or cover the push button switches immediately, inspect for any damage, and implement regular panel inspections.',
    photo: image8,
    riskCategory: 'Medium',
  },
  {
    id: 7,
    refNo: '3.24',
    observation:
      'In the middle section radiator, the coolant pressure was observed to be below 2 bar.',
    wayForward:
      'After topping up and rectifying, monitor coolant pressure and system temperature during operation.',
    photo: image9,
    riskCategory: 'Medium',
  },
  {
    id: 8,
    refNo: '4.3',
    observation: 'Lift operating switch is damaged.',
    wayForward:
      'Replace or repair the lift operating switch immediately and conduct functional checks to ensure safe operation.',
    photo: image10,
    riskCategory: 'High',
  },
];

export const earthResistanceRecords = [
  {
    id: 1,
    point: '1',
    reading: 'E1- 1.30 Ohm',
    wayForward: 'Found ok',
    photo: image3,
    riskCategory: 'Acceptable',
  },
  {
    id: 2,
    point: '2',
    reading: 'E2-0.70 Ohm',
    wayForward: 'Found ok',
    photo: image4,
    riskCategory: 'Acceptable',
  },
  {
    id: 3,
    point: '3',
    reading: 'E3-0.69 Ohm',
    wayForward: 'Found ok',
    photo: image5,
    riskCategory: 'Acceptable',
  },
  {
    id: 4,
    point: '4',
    reading: 'E4- 0.72 Ohm',
    wayForward: 'Found ok',
    photo: image6,
    riskCategory: 'Acceptable',
  },
];

export const generatorIRRecords = [
  {
    id: 1,
    point: '1. Phase to Earth (P–E)',
    reading: 'U TO E - 10.5 G ohm',
    wayForward: 'Found ok',
    photo: image7,
    riskCategory: 'Acceptable',
  },
  {
    id: 2,
    point: '2. Phase to Earth (P–E)',
    reading: 'V TO E - 12.4 G ohm',
    wayForward: 'Found ok',
    photo: image8,
    riskCategory: 'Acceptable',
  },
  {
    id: 3,
    point: '3. Phase to Earth (P–E)',
    reading: 'W TO E - 15.3 G ohm',
    wayForward: 'Found ok',
    photo: image9,
    riskCategory: 'Acceptable',
  },
  {
    id: 4,
    point: '4. Phase to Phase (P–P)',
    reading: 'U TO V -13.5 G ohm',
    wayForward: 'Found ok',
    photo: image10,
    riskCategory: 'Acceptable',
  },
];

export const bladeInspectionRecords = [
  {
    id: 1,
    point: 'Blade 1 (Root Section)',
    reading: 'Blade surface observed to be covered with dust accumulation during visual inspection.',
    wayForward:
      'Schedule blade cleaning activity to remove accumulated dust and contaminants, in order to restore optimal aerodynamic performance.',
    photo: image7,
    riskCategory: 'Low',
  },
  {
    id: 2,
    point: 'Blade 1 (Middle Section)',
    reading: 'Vortex generators (VGs) were observed in a partially removed/damaged condition.',
    wayForward:
      'Inspect all vortex generators (VGs) for condition, alignment, and adhesion.\nRe-fix or replace missing/damaged VGs as per OEM specifications to maintain aerodynamic performance.',
    photo: image8,
    riskCategory: 'Medium',
  },
  {
    id: 3,
    point: 'Blade 1 (Tip Section)',
    reading: 'Blade surface observed to be covered with dust accumulation during visual inspection.',
    wayForward:
      'Schedule blade cleaning activity to remove accumulated dust and contaminants, in order to restore optimal aerodynamic performance.',
    photo: image9,
    riskCategory: 'Low',
  },
  {
    id: 4,
    point: 'Blade 2 (Root Section)',
    reading: 'Blade surface observed to be covered with dust accumulation during visual inspection.',
    wayForward:
      'Schedule blade cleaning activity to remove accumulated dust and contaminants, in order to restore optimal aerodynamic performance.',
    photo: image10,
    riskCategory: 'Low',
  },
];

export const finalNotes = [
  'Risk assessment is based on the readings at time of the measurement as above.:',
  'Above reading taken for generator IR at: 1000V DC',
];

export const signatureDetails = {
  demoRep: {
    title: 'Demo Representative:',
    names: ['Mr. Mallik Srinivas', 'Ganesh Chaudhari'],
  },
  oemRep: {
    title: 'OEM/O&M Representatives:',
    names: ['Mr. Manish'],
  },
  customerRep: {
    title: 'Customer Representative:',
    names: ['Mr. Lalatendu Sahoo'],
  },
};
