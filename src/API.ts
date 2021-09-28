/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateStravaActivityInput = {
  id?: string | null,
  userId: string,
  stravaActivity: string,
  _version?: number | null,
};

export type ModelStravaActivityConditionInput = {
  userId?: ModelIDInput | null,
  stravaActivity?: ModelStringInput | null,
  and?: Array< ModelStravaActivityConditionInput | null > | null,
  or?: Array< ModelStravaActivityConditionInput | null > | null,
  not?: ModelStravaActivityConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type StravaActivity = {
  __typename: "StravaActivity",
  id: string,
  userId: string,
  stravaActivity: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStravaActivityInput = {
  id: string,
  userId?: string | null,
  stravaActivity?: string | null,
  _version?: number | null,
};

export type DeleteStravaActivityInput = {
  id: string,
  _version?: number | null,
};

export type CreateStravaUserInput = {
  id?: string | null,
  access_token: string,
  refresh_token: string,
  expires_at: number,
  athleteId: number,
  scope_activity: boolean,
  scope_read: boolean,
  state?: string | null,
  country?: string | null,
  city?: string | null,
  userId: string,
  _version?: number | null,
};

export type ModelStravaUserConditionInput = {
  access_token?: ModelStringInput | null,
  refresh_token?: ModelStringInput | null,
  expires_at?: ModelIntInput | null,
  athleteId?: ModelIntInput | null,
  scope_activity?: ModelBooleanInput | null,
  scope_read?: ModelBooleanInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelStravaUserConditionInput | null > | null,
  or?: Array< ModelStravaUserConditionInput | null > | null,
  not?: ModelStravaUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type StravaUser = {
  __typename: "StravaUser",
  id: string,
  access_token: string,
  refresh_token: string,
  expires_at: number,
  athleteId: number,
  scope_activity: boolean,
  scope_read: boolean,
  state?: string | null,
  country?: string | null,
  city?: string | null,
  userId: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStravaUserInput = {
  id: string,
  access_token?: string | null,
  refresh_token?: string | null,
  expires_at?: number | null,
  athleteId?: number | null,
  scope_activity?: boolean | null,
  scope_read?: boolean | null,
  state?: string | null,
  country?: string | null,
  city?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteStravaUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateSocketCheckInput = {
  id?: string | null,
  healthcheckID?: string | null,
  socketComfortScore: string,
  blistered?: boolean | null,
  bleeding?: boolean | null,
  bruised?: boolean | null,
  hot?: boolean | null,
  painful?: boolean | null,
  red?: boolean | null,
  sore?: boolean | null,
  sweaty?: boolean | null,
  loose?: boolean | null,
  tight?: boolean | null,
  amputationID?: string | null,
  _version?: number | null,
};

export type ModelSocketCheckConditionInput = {
  healthcheckID?: ModelIDInput | null,
  socketComfortScore?: ModelStringInput | null,
  blistered?: ModelBooleanInput | null,
  bleeding?: ModelBooleanInput | null,
  bruised?: ModelBooleanInput | null,
  hot?: ModelBooleanInput | null,
  painful?: ModelBooleanInput | null,
  red?: ModelBooleanInput | null,
  sore?: ModelBooleanInput | null,
  sweaty?: ModelBooleanInput | null,
  loose?: ModelBooleanInput | null,
  tight?: ModelBooleanInput | null,
  amputationID?: ModelIDInput | null,
  and?: Array< ModelSocketCheckConditionInput | null > | null,
  or?: Array< ModelSocketCheckConditionInput | null > | null,
  not?: ModelSocketCheckConditionInput | null,
};

export type SocketCheck = {
  __typename: "SocketCheck",
  id: string,
  healthcheckID?: string | null,
  socketComfortScore: string,
  blistered?: boolean | null,
  bleeding?: boolean | null,
  bruised?: boolean | null,
  hot?: boolean | null,
  painful?: boolean | null,
  red?: boolean | null,
  sore?: boolean | null,
  sweaty?: boolean | null,
  loose?: boolean | null,
  tight?: boolean | null,
  amputationID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateSocketCheckInput = {
  id: string,
  healthcheckID?: string | null,
  socketComfortScore?: string | null,
  blistered?: boolean | null,
  bleeding?: boolean | null,
  bruised?: boolean | null,
  hot?: boolean | null,
  painful?: boolean | null,
  red?: boolean | null,
  sore?: boolean | null,
  sweaty?: boolean | null,
  loose?: boolean | null,
  tight?: boolean | null,
  amputationID?: string | null,
  _version?: number | null,
};

export type DeleteSocketCheckInput = {
  id: string,
  _version?: number | null,
};

export type CreateHealthCheckInput = {
  id?: string | null,
  bodyScore: string,
  aching?: boolean | null,
  painful?: boolean | null,
  sore?: boolean | null,
  tight?: boolean | null,
  tired?: boolean | null,
  other?: boolean | null,
  details?: string | null,
  otherComments?: string | null,
  date: string,
  _version?: number | null,
};

export type ModelHealthCheckConditionInput = {
  bodyScore?: ModelStringInput | null,
  aching?: ModelBooleanInput | null,
  painful?: ModelBooleanInput | null,
  sore?: ModelBooleanInput | null,
  tight?: ModelBooleanInput | null,
  tired?: ModelBooleanInput | null,
  other?: ModelBooleanInput | null,
  details?: ModelStringInput | null,
  otherComments?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelHealthCheckConditionInput | null > | null,
  or?: Array< ModelHealthCheckConditionInput | null > | null,
  not?: ModelHealthCheckConditionInput | null,
};

export type HealthCheck = {
  __typename: "HealthCheck",
  id: string,
  bodyScore: string,
  aching?: boolean | null,
  painful?: boolean | null,
  sore?: boolean | null,
  tight?: boolean | null,
  tired?: boolean | null,
  other?: boolean | null,
  details?: string | null,
  otherComments?: string | null,
  date: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  SocketChecks?: ModelSocketCheckConnection | null,
  owner?: string | null,
};

export type ModelSocketCheckConnection = {
  __typename: "ModelSocketCheckConnection",
  items?:  Array<SocketCheck | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateHealthCheckInput = {
  id: string,
  bodyScore?: string | null,
  aching?: boolean | null,
  painful?: boolean | null,
  sore?: boolean | null,
  tight?: boolean | null,
  tired?: boolean | null,
  other?: boolean | null,
  details?: string | null,
  otherComments?: string | null,
  date?: string | null,
  _version?: number | null,
};

export type DeleteHealthCheckInput = {
  id: string,
  _version?: number | null,
};

export type CreateAmputationInput = {
  id?: string | null,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
  scarring?: boolean | null,
  grafting?: boolean | null,
  _version?: number | null,
};

export enum AmputationEnum {
  LEFT_LEG = "LEFT_LEG",
  RIGHT_LEG = "RIGHT_LEG",
  LEFT_ARM = "LEFT_ARM",
  RIGHT_ARM = "RIGHT_ARM",
}


export enum AmputationLevelEnum {
  THROUGH_FOOT = "THROUGH_FOOT",
  TRANSTIBIAL = "TRANSTIBIAL",
  THROUGH_KNEE = "THROUGH_KNEE",
  TRANSFEMORAL = "TRANSFEMORAL",
  THROUGH_HAND = "THROUGH_HAND",
  TRANSRADIAL = "TRANSRADIAL",
  THROUGH_ELBOW = "THROUGH_ELBOW",
  TRANSHUMERAL = "TRANSHUMERAL",
}


export type ModelAmputationConditionInput = {
  limb?: ModelAmputationEnumInput | null,
  level?: ModelAmputationLevelEnumInput | null,
  prosthesisWorn?: ModelBooleanInput | null,
  scarring?: ModelBooleanInput | null,
  grafting?: ModelBooleanInput | null,
  and?: Array< ModelAmputationConditionInput | null > | null,
  or?: Array< ModelAmputationConditionInput | null > | null,
  not?: ModelAmputationConditionInput | null,
};

export type ModelAmputationEnumInput = {
  eq?: AmputationEnum | null,
  ne?: AmputationEnum | null,
};

export type ModelAmputationLevelEnumInput = {
  eq?: AmputationLevelEnum | null,
  ne?: AmputationLevelEnum | null,
};

export type Amputation = {
  __typename: "Amputation",
  id: string,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
  scarring?: boolean | null,
  grafting?: boolean | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  SocketChecks?: ModelSocketCheckConnection | null,
  owner?: string | null,
};

export type UpdateAmputationInput = {
  id: string,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
  scarring?: boolean | null,
  grafting?: boolean | null,
  _version?: number | null,
};

export type DeleteAmputationInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  display_name?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  weight?: string | null,
  height?: string | null,
  sex?: string | null,
  ethnicGroup?: string | null,
  ethnicIdentity?: string | null,
  ethnicIdentityOther?: string | null,
  hasMilitaryService?: string | null,
  militaryService?: string | null,
  militaryServiceOther?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  height?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  ethnicGroup?: ModelStringInput | null,
  ethnicIdentity?: ModelStringInput | null,
  ethnicIdentityOther?: ModelStringInput | null,
  hasMilitaryService?: ModelStringInput | null,
  militaryService?: ModelStringInput | null,
  militaryServiceOther?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  display_name?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  weight?: string | null,
  height?: string | null,
  sex?: string | null,
  ethnicGroup?: string | null,
  ethnicIdentity?: string | null,
  ethnicIdentityOther?: string | null,
  hasMilitaryService?: string | null,
  militaryService?: string | null,
  militaryServiceOther?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  display_name?: string | null,
  dateOfBirth?: string | null,
  gender?: string | null,
  weight?: string | null,
  height?: string | null,
  sex?: string | null,
  ethnicGroup?: string | null,
  ethnicIdentity?: string | null,
  ethnicIdentityOther?: string | null,
  hasMilitaryService?: string | null,
  militaryService?: string | null,
  militaryServiceOther?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateActivityInput = {
  id?: string | null,
  name?: string | null,
  date: string,
  duration: string,
  distance: string,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion: string,
  feeling?: string | null,
  activity?: string | null,
  stravaId?: string | null,
  userId: string,
  _version?: number | null,
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  perceivedExertion?: ModelStringInput | null,
  feeling?: ModelStringInput | null,
  activity?: ModelStringInput | null,
  stravaId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  name?: string | null,
  date: string,
  duration: string,
  distance: string,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion: string,
  feeling?: string | null,
  activity?: string | null,
  stravaId?: string | null,
  userId: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateActivityInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  duration?: string | null,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion?: string | null,
  feeling?: string | null,
  activity?: string | null,
  stravaId?: string | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteActivityInput = {
  id: string,
  _version?: number | null,
};

export type ModelStravaActivityFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  stravaActivity?: ModelStringInput | null,
  and?: Array< ModelStravaActivityFilterInput | null > | null,
  or?: Array< ModelStravaActivityFilterInput | null > | null,
  not?: ModelStravaActivityFilterInput | null,
};

export type ModelStravaActivityConnection = {
  __typename: "ModelStravaActivityConnection",
  items?:  Array<StravaActivity | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStravaUserFilterInput = {
  id?: ModelIDInput | null,
  access_token?: ModelStringInput | null,
  refresh_token?: ModelStringInput | null,
  expires_at?: ModelIntInput | null,
  athleteId?: ModelIntInput | null,
  scope_activity?: ModelBooleanInput | null,
  scope_read?: ModelBooleanInput | null,
  state?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelStravaUserFilterInput | null > | null,
  or?: Array< ModelStravaUserFilterInput | null > | null,
  not?: ModelStravaUserFilterInput | null,
};

export type ModelStravaUserConnection = {
  __typename: "ModelStravaUserConnection",
  items?:  Array<StravaUser | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSocketCheckFilterInput = {
  id?: ModelIDInput | null,
  healthcheckID?: ModelIDInput | null,
  socketComfortScore?: ModelStringInput | null,
  blistered?: ModelBooleanInput | null,
  bleeding?: ModelBooleanInput | null,
  bruised?: ModelBooleanInput | null,
  hot?: ModelBooleanInput | null,
  painful?: ModelBooleanInput | null,
  red?: ModelBooleanInput | null,
  sore?: ModelBooleanInput | null,
  sweaty?: ModelBooleanInput | null,
  loose?: ModelBooleanInput | null,
  tight?: ModelBooleanInput | null,
  amputationID?: ModelIDInput | null,
  and?: Array< ModelSocketCheckFilterInput | null > | null,
  or?: Array< ModelSocketCheckFilterInput | null > | null,
  not?: ModelSocketCheckFilterInput | null,
};

export type ModelHealthCheckFilterInput = {
  id?: ModelIDInput | null,
  bodyScore?: ModelStringInput | null,
  aching?: ModelBooleanInput | null,
  painful?: ModelBooleanInput | null,
  sore?: ModelBooleanInput | null,
  tight?: ModelBooleanInput | null,
  tired?: ModelBooleanInput | null,
  other?: ModelBooleanInput | null,
  details?: ModelStringInput | null,
  otherComments?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelHealthCheckFilterInput | null > | null,
  or?: Array< ModelHealthCheckFilterInput | null > | null,
  not?: ModelHealthCheckFilterInput | null,
};

export type ModelHealthCheckConnection = {
  __typename: "ModelHealthCheckConnection",
  items?:  Array<HealthCheck | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAmputationFilterInput = {
  id?: ModelIDInput | null,
  limb?: ModelAmputationEnumInput | null,
  level?: ModelAmputationLevelEnumInput | null,
  prosthesisWorn?: ModelBooleanInput | null,
  scarring?: ModelBooleanInput | null,
  grafting?: ModelBooleanInput | null,
  and?: Array< ModelAmputationFilterInput | null > | null,
  or?: Array< ModelAmputationFilterInput | null > | null,
  not?: ModelAmputationFilterInput | null,
};

export type ModelAmputationConnection = {
  __typename: "ModelAmputationConnection",
  items?:  Array<Amputation | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  display_name?: ModelStringInput | null,
  dateOfBirth?: ModelStringInput | null,
  gender?: ModelStringInput | null,
  weight?: ModelStringInput | null,
  height?: ModelStringInput | null,
  sex?: ModelStringInput | null,
  ethnicGroup?: ModelStringInput | null,
  ethnicIdentity?: ModelStringInput | null,
  ethnicIdentityOther?: ModelStringInput | null,
  hasMilitaryService?: ModelStringInput | null,
  militaryService?: ModelStringInput | null,
  militaryServiceOther?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  perceivedExertion?: ModelStringInput | null,
  feeling?: ModelStringInput | null,
  activity?: ModelStringInput | null,
  stravaId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items?:  Array<Activity | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateStravaActivityMutationVariables = {
  input: CreateStravaActivityInput,
  condition?: ModelStravaActivityConditionInput | null,
};

export type CreateStravaActivityMutation = {
  createStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStravaActivityMutationVariables = {
  input: UpdateStravaActivityInput,
  condition?: ModelStravaActivityConditionInput | null,
};

export type UpdateStravaActivityMutation = {
  updateStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStravaActivityMutationVariables = {
  input: DeleteStravaActivityInput,
  condition?: ModelStravaActivityConditionInput | null,
};

export type DeleteStravaActivityMutation = {
  deleteStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStravaUserMutationVariables = {
  input: CreateStravaUserInput,
  condition?: ModelStravaUserConditionInput | null,
};

export type CreateStravaUserMutation = {
  createStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStravaUserMutationVariables = {
  input: UpdateStravaUserInput,
  condition?: ModelStravaUserConditionInput | null,
};

export type UpdateStravaUserMutation = {
  updateStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStravaUserMutationVariables = {
  input: DeleteStravaUserInput,
  condition?: ModelStravaUserConditionInput | null,
};

export type DeleteStravaUserMutation = {
  deleteStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSocketCheckMutationVariables = {
  input: CreateSocketCheckInput,
  condition?: ModelSocketCheckConditionInput | null,
};

export type CreateSocketCheckMutation = {
  createSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateSocketCheckMutationVariables = {
  input: UpdateSocketCheckInput,
  condition?: ModelSocketCheckConditionInput | null,
};

export type UpdateSocketCheckMutation = {
  updateSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteSocketCheckMutationVariables = {
  input: DeleteSocketCheckInput,
  condition?: ModelSocketCheckConditionInput | null,
};

export type DeleteSocketCheckMutation = {
  deleteSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateHealthCheckMutationVariables = {
  input: CreateHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type CreateHealthCheckMutation = {
  createHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateHealthCheckMutationVariables = {
  input: UpdateHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type UpdateHealthCheckMutation = {
  updateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteHealthCheckMutationVariables = {
  input: DeleteHealthCheckInput,
  condition?: ModelHealthCheckConditionInput | null,
};

export type DeleteHealthCheckMutation = {
  deleteHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateAmputationMutationVariables = {
  input: CreateAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type CreateAmputationMutation = {
  createAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type UpdateAmputationMutationVariables = {
  input: UpdateAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type UpdateAmputationMutation = {
  updateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type DeleteAmputationMutationVariables = {
  input: DeleteAmputationInput,
  condition?: ModelAmputationConditionInput | null,
};

export type DeleteAmputationMutation = {
  deleteAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetStravaActivityQueryVariables = {
  id: string,
};

export type GetStravaActivityQuery = {
  getStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStravaActivitysQueryVariables = {
  filter?: ModelStravaActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStravaActivitysQuery = {
  listStravaActivitys?:  {
    __typename: "ModelStravaActivityConnection",
    items?:  Array< {
      __typename: "StravaActivity",
      id: string,
      userId: string,
      stravaActivity: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStravaActivitiesQueryVariables = {
  filter?: ModelStravaActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStravaActivitiesQuery = {
  syncStravaActivities?:  {
    __typename: "ModelStravaActivityConnection",
    items?:  Array< {
      __typename: "StravaActivity",
      id: string,
      userId: string,
      stravaActivity: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStravaUserQueryVariables = {
  id: string,
};

export type GetStravaUserQuery = {
  getStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStravaUsersQueryVariables = {
  filter?: ModelStravaUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStravaUsersQuery = {
  listStravaUsers?:  {
    __typename: "ModelStravaUserConnection",
    items?:  Array< {
      __typename: "StravaUser",
      id: string,
      access_token: string,
      refresh_token: string,
      expires_at: number,
      athleteId: number,
      scope_activity: boolean,
      scope_read: boolean,
      state?: string | null,
      country?: string | null,
      city?: string | null,
      userId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStravaUsersQueryVariables = {
  filter?: ModelStravaUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStravaUsersQuery = {
  syncStravaUsers?:  {
    __typename: "ModelStravaUserConnection",
    items?:  Array< {
      __typename: "StravaUser",
      id: string,
      access_token: string,
      refresh_token: string,
      expires_at: number,
      athleteId: number,
      scope_activity: boolean,
      scope_read: boolean,
      state?: string | null,
      country?: string | null,
      city?: string | null,
      userId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetSocketCheckQueryVariables = {
  id: string,
};

export type GetSocketCheckQuery = {
  getSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListSocketChecksQueryVariables = {
  filter?: ModelSocketCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSocketChecksQuery = {
  listSocketChecks?:  {
    __typename: "ModelSocketCheckConnection",
    items?:  Array< {
      __typename: "SocketCheck",
      id: string,
      healthcheckID?: string | null,
      socketComfortScore: string,
      blistered?: boolean | null,
      bleeding?: boolean | null,
      bruised?: boolean | null,
      hot?: boolean | null,
      painful?: boolean | null,
      red?: boolean | null,
      sore?: boolean | null,
      sweaty?: boolean | null,
      loose?: boolean | null,
      tight?: boolean | null,
      amputationID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncSocketChecksQueryVariables = {
  filter?: ModelSocketCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSocketChecksQuery = {
  syncSocketChecks?:  {
    __typename: "ModelSocketCheckConnection",
    items?:  Array< {
      __typename: "SocketCheck",
      id: string,
      healthcheckID?: string | null,
      socketComfortScore: string,
      blistered?: boolean | null,
      bleeding?: boolean | null,
      bruised?: boolean | null,
      hot?: boolean | null,
      painful?: boolean | null,
      red?: boolean | null,
      sore?: boolean | null,
      sweaty?: boolean | null,
      loose?: boolean | null,
      tight?: boolean | null,
      amputationID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetHealthCheckQueryVariables = {
  id: string,
};

export type GetHealthCheckQuery = {
  getHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListHealthChecksQueryVariables = {
  filter?: ModelHealthCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHealthChecksQuery = {
  listHealthChecks?:  {
    __typename: "ModelHealthCheckConnection",
    items?:  Array< {
      __typename: "HealthCheck",
      id: string,
      bodyScore: string,
      aching?: boolean | null,
      painful?: boolean | null,
      sore?: boolean | null,
      tight?: boolean | null,
      tired?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
      date: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      SocketChecks?:  {
        __typename: "ModelSocketCheckConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncHealthChecksQueryVariables = {
  filter?: ModelHealthCheckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncHealthChecksQuery = {
  syncHealthChecks?:  {
    __typename: "ModelHealthCheckConnection",
    items?:  Array< {
      __typename: "HealthCheck",
      id: string,
      bodyScore: string,
      aching?: boolean | null,
      painful?: boolean | null,
      sore?: boolean | null,
      tight?: boolean | null,
      tired?: boolean | null,
      other?: boolean | null,
      details?: string | null,
      otherComments?: string | null,
      date: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      SocketChecks?:  {
        __typename: "ModelSocketCheckConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAmputationQueryVariables = {
  id: string,
};

export type GetAmputationQuery = {
  getAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type ListAmputationsQueryVariables = {
  filter?: ModelAmputationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAmputationsQuery = {
  listAmputations?:  {
    __typename: "ModelAmputationConnection",
    items?:  Array< {
      __typename: "Amputation",
      id: string,
      limb?: AmputationEnum | null,
      level?: AmputationLevelEnum | null,
      prosthesisWorn?: boolean | null,
      scarring?: boolean | null,
      grafting?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      SocketChecks?:  {
        __typename: "ModelSocketCheckConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAmputationsQueryVariables = {
  filter?: ModelAmputationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAmputationsQuery = {
  syncAmputations?:  {
    __typename: "ModelAmputationConnection",
    items?:  Array< {
      __typename: "Amputation",
      id: string,
      limb?: AmputationEnum | null,
      level?: AmputationLevelEnum | null,
      prosthesisWorn?: boolean | null,
      scarring?: boolean | null,
      grafting?: boolean | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      SocketChecks?:  {
        __typename: "ModelSocketCheckConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      display_name?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      weight?: string | null,
      height?: string | null,
      sex?: string | null,
      ethnicGroup?: string | null,
      ethnicIdentity?: string | null,
      ethnicIdentityOther?: string | null,
      hasMilitaryService?: string | null,
      militaryService?: string | null,
      militaryServiceOther?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      display_name?: string | null,
      dateOfBirth?: string | null,
      gender?: string | null,
      weight?: string | null,
      height?: string | null,
      sex?: string | null,
      ethnicGroup?: string | null,
      ethnicIdentity?: string | null,
      ethnicIdentityOther?: string | null,
      hasMilitaryService?: string | null,
      militaryService?: string | null,
      militaryServiceOther?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys?:  {
    __typename: "ModelActivityConnection",
    items?:  Array< {
      __typename: "Activity",
      id: string,
      name?: string | null,
      date: string,
      duration: string,
      distance: string,
      cardio?: boolean | null,
      flexibility?: boolean | null,
      strength?: boolean | null,
      perceivedExertion: string,
      feeling?: string | null,
      activity?: string | null,
      stravaId?: string | null,
      userId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncActivitiesQuery = {
  syncActivities?:  {
    __typename: "ModelActivityConnection",
    items?:  Array< {
      __typename: "Activity",
      id: string,
      name?: string | null,
      date: string,
      duration: string,
      distance: string,
      cardio?: boolean | null,
      flexibility?: boolean | null,
      strength?: boolean | null,
      perceivedExertion: string,
      feeling?: string | null,
      activity?: string | null,
      stravaId?: string | null,
      userId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateStravaActivitySubscription = {
  onCreateStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStravaActivitySubscription = {
  onUpdateStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStravaActivitySubscription = {
  onDeleteStravaActivity?:  {
    __typename: "StravaActivity",
    id: string,
    userId: string,
    stravaActivity: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStravaUserSubscription = {
  onCreateStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStravaUserSubscription = {
  onUpdateStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStravaUserSubscription = {
  onDeleteStravaUser?:  {
    __typename: "StravaUser",
    id: string,
    access_token: string,
    refresh_token: string,
    expires_at: number,
    athleteId: number,
    scope_activity: boolean,
    scope_read: boolean,
    state?: string | null,
    country?: string | null,
    city?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSocketCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateSocketCheckSubscription = {
  onCreateSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateSocketCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateSocketCheckSubscription = {
  onUpdateSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteSocketCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteSocketCheckSubscription = {
  onDeleteSocketCheck?:  {
    __typename: "SocketCheck",
    id: string,
    healthcheckID?: string | null,
    socketComfortScore: string,
    blistered?: boolean | null,
    bleeding?: boolean | null,
    bruised?: boolean | null,
    hot?: boolean | null,
    painful?: boolean | null,
    red?: boolean | null,
    sore?: boolean | null,
    sweaty?: boolean | null,
    loose?: boolean | null,
    tight?: boolean | null,
    amputationID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateHealthCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateHealthCheckSubscription = {
  onCreateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateHealthCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateHealthCheckSubscription = {
  onUpdateHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteHealthCheckSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteHealthCheckSubscription = {
  onDeleteHealthCheck?:  {
    __typename: "HealthCheck",
    id: string,
    bodyScore: string,
    aching?: boolean | null,
    painful?: boolean | null,
    sore?: boolean | null,
    tight?: boolean | null,
    tired?: boolean | null,
    other?: boolean | null,
    details?: string | null,
    otherComments?: string | null,
    date: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateAmputationSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateAmputationSubscription = {
  onCreateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnUpdateAmputationSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateAmputationSubscription = {
  onUpdateAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnDeleteAmputationSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteAmputationSubscription = {
  onDeleteAmputation?:  {
    __typename: "Amputation",
    id: string,
    limb?: AmputationEnum | null,
    level?: AmputationLevelEnum | null,
    prosthesisWorn?: boolean | null,
    scarring?: boolean | null,
    grafting?: boolean | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    SocketChecks?:  {
      __typename: "ModelSocketCheckConnection",
      items?:  Array< {
        __typename: "SocketCheck",
        id: string,
        healthcheckID?: string | null,
        socketComfortScore: string,
        blistered?: boolean | null,
        bleeding?: boolean | null,
        bruised?: boolean | null,
        hot?: boolean | null,
        painful?: boolean | null,
        red?: boolean | null,
        sore?: boolean | null,
        sweaty?: boolean | null,
        loose?: boolean | null,
        tight?: boolean | null,
        amputationID?: string | null,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    display_name?: string | null,
    dateOfBirth?: string | null,
    gender?: string | null,
    weight?: string | null,
    height?: string | null,
    sex?: string | null,
    ethnicGroup?: string | null,
    ethnicIdentity?: string | null,
    ethnicIdentityOther?: string | null,
    hasMilitaryService?: string | null,
    militaryService?: string | null,
    militaryServiceOther?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    duration: string,
    distance: string,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling?: string | null,
    activity?: string | null,
    stravaId?: string | null,
    userId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
