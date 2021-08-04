/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAmputation = /* GraphQL */ `
  mutation CreateAmputation(
    $input: CreateAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    createAmputation(input: $input, condition: $condition) {
      id
      limb
      level
      prosthesisWorn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAmputation = /* GraphQL */ `
  mutation UpdateAmputation(
    $input: UpdateAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    updateAmputation(input: $input, condition: $condition) {
      id
      limb
      level
      prosthesisWorn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAmputation = /* GraphQL */ `
  mutation DeleteAmputation(
    $input: DeleteAmputationInput!
    $condition: ModelAmputationConditionInput
  ) {
    deleteAmputation(input: $input, condition: $condition) {
      id
      limb
      level
      prosthesisWorn
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      display_name
      dateOfBirth
      gender
      weight
      height
      sex
      ethnicGroup
      ethnicIdentity
      ethnicIdentityOther
      hasMilitaryService
      militaryService
      militaryServiceOther
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      display_name
      dateOfBirth
      gender
      weight
      height
      sex
      ethnicGroup
      ethnicIdentity
      ethnicIdentityOther
      hasMilitaryService
      militaryService
      militaryServiceOther
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      display_name
      dateOfBirth
      gender
      weight
      height
      sex
      ethnicGroup
      ethnicIdentity
      ethnicIdentityOther
      hasMilitaryService
      militaryService
      militaryServiceOther
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      name
      date
      activity
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      name
      date
      activity
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      name
      date
      activity
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
