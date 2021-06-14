import {} from "antd";
export const ETHNICITY_OPTIONS = [
  {
    value: "asianOrAsianBritish",
    label: "Asian or Asian British",
    children: [
      { value: "bangladeshi", label: "Bangladeshi" },
      { value: "chinese", label: "Chinese" },
      { value: "indian", label: "Indian" },
      { value: "pakistani", label: "Pakistani" },
      { value: "anyOtherAsianBackground", label: "Any other Asian background" },
    ],
  },
  {
    value: "blackAfricanCaribbeanOrBlackBritish",
    label: "Black, African, Caribbean or Black British",
    children: [
      { value: "african", label: "African" },
      { value: "caribbean", label: "Caribbean" },
      {
        value: "anyOtherBlack,AfricanOrCaribbeanBackground",
        label: "Any other Black, African or Caribbean background",
      },
    ],
  },
  {
    value: "mixedOrMultipleEthnicGroups",
    label: "Mixed Or Multiple Ethnic Groups",
    children: [
      { value: "arab", label: "Arab" },
      { value: "anyOtherEthnicGroup", label: "Any other ethnic group" },
    ],
  },
  {
    value: "otherEthnicGroups",
    label: "Other Ethnic Groups",
    children: [
      { value: "White and Asian", label: "White and Asian" },
      { value: "White and Black African", label: "White and Black African" },
      {
        value: "White and Black Caribbean",
        label: "White and Black Caribbean",
      },
      {
        value: "anyOtherMixedOrMultipleEthnicBackground",
        label: "Any other Mixed or Multiple ethnic background",
      },
    ],
  },
  {
    value: "white",
    label: "White",
    children: [
      {
        value: "englishWelshScottishNorthernIrishOrBritish",
        label: "English, Welsh, Scottish, Northern Irish or British",
      },
      { value: "gypsyOrIrishTraveller", label: "Gypsy or Irish Traveller" },
      { value: "irish", label: "Irish" },
      {
        value: "anyOtherWhiteBackground",
        label: "Any other White background",
      },
    ],
  },
];

export const MILITARY_OPTIONS = [
  { label: "None", value: "none" },
  { label: "Army Reserves", value: "armyReserves" },
  { label: "British Army", value: "britishArmy" },
  { label: "Royal Air Force", value: "royalAirForce" },
  { label: "Royal Air Force Reserves", value: "royalAirForceReserves" },
  { label: "Royal Marines", value: "royalMarines" },
  { label: "Royal Marine Reserves", value: "royal MarineReserves" },
  { label: "Royal Navy", value: "royalNavy" },
  { label: "Royal Navy Reserves", value: "royalNavyReserves" },
];

export const GENDER_OPTIONS = [
  { label: "Female", value: "female" },
  { label: "Male", value: "male" },
  { label: "Other", value: "other" },
  { label: "Prefer not to say", value: "preferNotToSay" },
];

export const WEIGHT_OPTIONS = [
  { label: "kg", value: "kg" },
  { label: "lbs", value: "lbs" },
];
export const HEIGHT_OPTIONS = [
  { label: "cm", value: "cm" },
  { label: "in", value: "in" },
];

const LOWER_LIMB_AMPUTATIONS = [
  { label: "Through Foot", value: "thoughFoot" },
  { label: "Transtibial", value: "transTibial" },
  { label: "Through Knee", value: "throughKnee" },
  { label: "Transfemoral", value: "transfemoral" },
  { label: "Transpelvic", value: "transpevlic" },
];

const UPPER_LIMB_AMPUTATIONS = [
  { label: "Through Hand", value: "thoughHand" },
  { label: "Transradial", value: "transradial" },
  { label: "Through Elbow", value: "throughElbow" },
  { label: "Transhumeral", value: "transhumeral" },
];

export const AMPUTATION_LEVEL_OPTIONS = [
  {
    value: "leftLeg",
    label: "Left Leg",
    children: LOWER_LIMB_AMPUTATIONS,
  },
  {
    value: "rightLeg",
    label: "Right Leg",
    children: LOWER_LIMB_AMPUTATIONS,
  },
  {
    value: "leftArm",
    label: "Left Arm",
    children: UPPER_LIMB_AMPUTATIONS,
  },
  {
    value: "rightArm",
    label: "Right Arm",
    children: UPPER_LIMB_AMPUTATIONS,
  },
];

export const INJURY_LEVEL_OPTIONS = [
  {
    value: "leftFoot",
    label: "Left Foot",
  },
  {
    value: "leftAnkle",
    label: "Left Ankle",
  },
  {
    value: "leftKnee",
    label: "Left Knee",
  },
  {
    value: "leftHip",
    label: "Left Hip",
  },
  {
    value: "rightFoot",
    label: "Right Foot",
  },
  {
    value: "rightAnkle",
    label: "Right Ankle",
  },
  {
    value: "rightKnee",
    label: "Right Knee",
  },
  {
    value: "rightHip",
    label: "Right Hip",
  },
  {
    value: "leftHand",
    label: "Left Hand",
  },
  {
    value: "leftElbow",
    label: "Left Elbow",
  },
  {
    value: "leftShoulder",
    label: "Left Shoulder",
  },
  {
    value: "rightHand",
    label: "Right Hand",
  },
  {
    value: "rightElbow",
    label: "Right Elbow",
  },
  {
    value: "rightShoulder",
    label: "Right Shoulder",
  },
  {
    value: "back",
    label: "Back",
  },
  {
    value: "neck",
    label: "Beck",
  },
];

export const ACTIVITY_OPTIONS = [
  { label: "Running", value: "running" },
  { label: "Swimming", value: "male" },
  { label: "Rowing", value: "other" },
  { label: "Skiing", value: "preferNotToSay" },
];

export const PERCEIVED_EXERTION_DESCRIPTION: Record<number, string> = {
  1: "Test 1",
  2: "Test 2",
  3: "Test 3",
  4: "Test 4",
  5: "Test 5",
  6: "Test 6",
  7: "Test 7",
  8: "Test 8",
  9: "Test 9",
  10: "Test 10",
};
