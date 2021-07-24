export const APP_ROUTES = {
  HOME: {
    url: '/',
    title: 'Home',
  },
  DASHBOARD: {
    url: '/dashboard',
    title: 'Dashboard',
  },
  SIGN_IN: {
    url: '/sign-in',
    title: 'Sign In',
  },
  PASSWORD_RESET: {
    url: '/password-reset',
    title: 'Password Reset',
  },
  REGISTER: {
    url: '/register',
    title: 'Register',
  },
  TERMS: {
    url: '/terms',
    title: 'Terms',
  },
  PROFILE: {
    url: '/profile',
    title: 'Profile',
  },
  ACTIVITIES: {
    url: '/activities',
    title: 'Activities',
  },
  HEALTH_CHECKS: {
    url: '/health-checks',
    title: 'Health Checks',
  },
};

// const percievedExertion = {
//   1: {}
// }

// INFO: Following guidelines from here: https://equalities.blog.gov.uk/2017/07/28/lgbtsurvey-asking-about-your-sex-and-gender-identity/
export const GenderIdentities = [
  { value: 'man', label: 'Man' },
  {
    value: 'non_binary',
    label: 'Non-Binary/Genderqueer/Agender/Gender Fluid',
  },
  { value: 'trans_woman', label: 'Trans-woman' },
  { value: 'trans_man', label: 'Trans-man' },
  { value: 'woman', label: 'Woman' },
  { value: 'unsure', label: 'Don’t Know' },

  { value: 'other', label: 'Other' },
];
export const Sex = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'unsure', label: 'Don’t Know' },
];

// INFO: Following guidelines from here: https://design-system.service.gov.uk/patterns/equality-information/

export const EthnicGroups = [
  { value: 'asian', label: 'Asian or Asian British' },
  { value: 'black', label: 'Black, African, Caribbean or Black British' },
  { value: 'mixed', label: 'Mixed or multiple ethnic groups' },
  { value: 'other', label: 'Other ethnic group' },
  { value: 'white', label: 'White' },
];

const AsianEthnicity = [
  { value: 'indian', label: 'Indian' },
  { value: 'pakistani', label: 'Pakistani' },
  { value: 'bangladeshi', label: 'Bangladeshi' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'other', label: 'Any other Asian background' },
];
const BlackEthnicity = [
  { value: 'african', label: 'African' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'other', label: 'Any other Black, African or Caribbean background' },
];
const MixedEthnicity = [
  { value: 'white_and_black_caribbean', label: 'White and Black Caribbean' },
  { value: 'white_and_black_african', label: 'White and Black African' },
  { value: 'white_and_black_asian', label: 'White and Asian' },
  { value: 'other', label: 'Any other Mixed or Multiple ethnic background' },
];
const OtherEthnicity = [
  { value: 'arab', label: 'Arab' },
  { value: 'other', label: 'Any other ethnic group' },
];
const WhiteEthnicity = [
  { value: 'british', label: 'English, Welsh, Scottish, Northern Irish or British' },
  { value: 'irish', label: 'Irish' },
  { value: 'gypsy_or_irish_traveller', label: 'Gypsy or Irish Traveller' },
  { value: 'other', label: 'Any other White background' },
];

export const Ethnicity: Record<string, { value: string; label: string }[]> = {
  asian: AsianEthnicity,
  black: BlackEthnicity,
  mixed: MixedEthnicity,
  other: OtherEthnicity,
  white: WhiteEthnicity,
};

export const MilitaryService = [
  { value: 'army_reserves', label: 'Army Reserves' },
  { value: 'british_army', label: 'British Army' },
  { value: 'raf', label: 'Royal Air Force' },
  { value: 'raf_reserves', label: 'Royal Air Force Reserves' },
  { value: 'marines', label: 'Royal Marines' },
  { value: 'marine_reserves', label: 'Royal Marine Reserves' },
  { value: 'royal_navy', label: 'Royal Navy' },
  { value: 'royal_navy_reserves', label: 'Royal Navy Reserves' },
  { value: 'other', label: 'Any other Military Service' },
];

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const ActivitiesOptions: Record<
  string,
  { label: string; flex: boolean; cardio: boolean; strength: boolean; distance: boolean }
> = {
  bandwork: { label: 'Bandwork', cardio: false, flex: true, strength: true, distance: false },
  canoeing: { label: 'Canoeing', cardio: true, flex: false, strength: false, distance: true },
  crossfit: { label: 'Crossfit', cardio: true, flex: false, strength: true, distance: false },
  cyclingIndoor: {
    label: 'Cycling (Indoor)',
    cardio: true,
    flex: false,
    strength: false,
    distance: true,
  },
  cyclingOutdoor: {
    label: 'Cycling (Outdoor)',
    cardio: true,
    flex: false,
    strength: false,
    distance: true,
  },
  elliptical: { label: 'Elliptical', cardio: true, flex: false, strength: false, distance: true },
  handcycle: { label: 'Handcycle', cardio: true, flex: false, strength: false, distance: true },
  hike: { label: 'Hike', cardio: true, flex: false, strength: false, distance: true },
  kayaking: { label: 'Kayaking', cardio: true, flex: false, strength: false, distance: true },
  pilates: { label: 'Pilates', cardio: false, flex: true, strength: true, distance: false },
  rockClimbing: {
    label: 'Rock Climbing',
    cardio: true,
    flex: false,
    strength: true,
    distance: false,
  },
  rowingIndoor: {
    label: 'Rowing (Indoor)',
    cardio: true,
    flex: false,
    strength: false,
    distance: true,
  },
  rowingOutdoor: {
    label: 'Rowing (Outdoor)',
    cardio: true,
    flex: false,
    strength: false,
    distance: true,
  },
  run: { label: 'Run', cardio: true, flex: false, strength: false, distance: true },
  ski: { label: 'Ski Ergometer', cardio: true, flex: false, strength: false, distance: true },
  stairStepper: {
    label: 'StairStepper',
    cardio: true,
    flex: false,
    strength: false,
    distance: false,
  },
  swim: { label: 'Swim', cardio: true, flex: false, strength: false, distance: true },
  treadmill: { label: 'Treadmill', cardio: true, flex: false, strength: false, distance: true },
  walk: { label: 'Walk', cardio: true, flex: false, strength: false, distance: true },
  weightTraining: {
    label: 'WeightTraining',
    cardio: false,
    flex: false,
    strength: true,
    distance: false,
  },
  workout: { label: 'Workout', cardio: true, flex: true, strength: true, distance: false },
  yoga: { label: 'Yoga', cardio: true, flex: true, strength: true, distance: false },
};

export const getActivityDropdownOptions = () =>
  Object.keys(ActivitiesOptions).map((key) => ({
    value: key,
    label: ActivitiesOptions[key].label,
  }));

export const ExertionOptions: Record<number, string> = {
  1: 'Extremely Light (e.g. light stretching)',
  2: 'Very Light (e.g. walking slowly)',
  3: 'Light (moving around, but breathing easy)',
  4: 'Moderate (light workout but can talk)',
  5: 'Considerable (heavier breathing, heart rate up)',
  6: 'Challenging (breathing hard, not talking much)',
  7: 'Hard (tough workout, hard to talk)',
  8: 'Very Hard (Breathing very hard, whole body tired)',
  9: 'Extremely Hard (almost maxed out, no talking)',
  10: 'Max Effort (hardest I can possibly work)',
};

export const FeelingScales: Record<number, string> = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
  10: '',
};
