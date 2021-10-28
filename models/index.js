// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AmputationLevelEnum = {
  "THROUGH_FOOT": "THROUGH_FOOT",
  "TRANSTIBIAL": "TRANSTIBIAL",
  "THROUGH_KNEE": "THROUGH_KNEE",
  "TRANSFEMORAL": "TRANSFEMORAL",
  "THROUGH_HAND": "THROUGH_HAND",
  "TRANSRADIAL": "TRANSRADIAL",
  "THROUGH_ELBOW": "THROUGH_ELBOW",
  "TRANSHUMERAL": "TRANSHUMERAL"
};

const AmputationEnum = {
  "LEFT_LEG": "LEFT_LEG",
  "RIGHT_LEG": "RIGHT_LEG",
  "LEFT_ARM": "LEFT_ARM",
  "RIGHT_ARM": "RIGHT_ARM"
};

const { StravaActivity, StravaUser, SocketCheck, HealthCheck, Amputation, User, Activity } = initSchema(schema);

export {
  StravaActivity,
  StravaUser,
  SocketCheck,
  HealthCheck,
  Amputation,
  User,
  Activity,
  AmputationLevelEnum,
  AmputationEnum
};