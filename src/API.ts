/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAmputationInput = {
  id?: string | null,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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


export type Amputation = {
  __typename: "Amputation",
  id: string,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateAmputationInput = {
  id: string,
  limb?: AmputationEnum | null,
  level?: AmputationLevelEnum | null,
  prosthesisWorn?: boolean | null,
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

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
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
  activity: string,
  duration: string,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion: string,
  feeling: string,
  _version?: number | null,
};

export type ModelActivityConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  activity?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  perceivedExertion?: ModelStringInput | null,
  feeling?: ModelStringInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type Activity = {
  __typename: "Activity",
  id: string,
  name?: string | null,
  date: string,
  activity: string,
  duration: string,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion: string,
  feeling: string,
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
  activity?: string | null,
  duration?: string | null,
  distance?: string | null,
  cardio?: boolean | null,
  flexibility?: boolean | null,
  strength?: boolean | null,
  perceivedExertion?: string | null,
  feeling?: string | null,
  _version?: number | null,
};

export type DeleteActivityInput = {
  id: string,
  _version?: number | null,
};

export type ModelAmputationFilterInput = {
  id?: ModelIDInput | null,
  limb?: ModelAmputationEnumInput | null,
  level?: ModelAmputationLevelEnumInput | null,
  prosthesisWorn?: ModelBooleanInput | null,
  and?: Array< ModelAmputationFilterInput | null > | null,
  or?: Array< ModelAmputationFilterInput | null > | null,
  not?: ModelAmputationFilterInput | null,
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
  activity?: ModelStringInput | null,
  duration?: ModelStringInput | null,
  distance?: ModelStringInput | null,
  cardio?: ModelBooleanInput | null,
  flexibility?: ModelBooleanInput | null,
  strength?: ModelBooleanInput | null,
  perceivedExertion?: ModelStringInput | null,
  feeling?: ModelStringInput | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
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
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
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
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
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
      activity: string,
      duration: string,
      distance?: string | null,
      cardio?: boolean | null,
      flexibility?: boolean | null,
      strength?: boolean | null,
      perceivedExertion: string,
      feeling: string,
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
      activity: string,
      duration: string,
      distance?: string | null,
      cardio?: boolean | null,
      flexibility?: boolean | null,
      strength?: boolean | null,
      perceivedExertion: string,
      feeling: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
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

export type OnCreateActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    id: string,
    name?: string | null,
    date: string,
    activity: string,
    duration: string,
    distance?: string | null,
    cardio?: boolean | null,
    flexibility?: boolean | null,
    strength?: boolean | null,
    perceivedExertion: string,
    feeling: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
