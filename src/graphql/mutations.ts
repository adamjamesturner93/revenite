/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      createdAt
      updatedAt
      owner
    }
  }
`;
