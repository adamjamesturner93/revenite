/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
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
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String!) {
    onCreateActivity(owner: $owner) {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String!) {
    onUpdateActivity(owner: $owner) {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String!) {
    onDeleteActivity(owner: $owner) {
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
