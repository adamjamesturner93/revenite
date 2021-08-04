/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAmputation = /* GraphQL */ `
  query GetAmputation($id: ID!) {
    getAmputation(id: $id) {
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
export const listAmputations = /* GraphQL */ `
  query ListAmputations(
    $filter: ModelAmputationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAmputations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAmputations = /* GraphQL */ `
  query SyncAmputations(
    $filter: ModelAmputationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAmputations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncActivities = /* GraphQL */ `
  query SyncActivities(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
