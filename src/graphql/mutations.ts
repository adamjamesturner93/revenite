/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createStravaActivity = /* GraphQL */ `
  mutation CreateStravaActivity(
    $input: CreateStravaActivityInput!
    $condition: ModelStravaActivityConditionInput
  ) {
    createStravaActivity(input: $input, condition: $condition) {
      id
      userId
      stravaActivity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateStravaActivity = /* GraphQL */ `
  mutation UpdateStravaActivity(
    $input: UpdateStravaActivityInput!
    $condition: ModelStravaActivityConditionInput
  ) {
    updateStravaActivity(input: $input, condition: $condition) {
      id
      userId
      stravaActivity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteStravaActivity = /* GraphQL */ `
  mutation DeleteStravaActivity(
    $input: DeleteStravaActivityInput!
    $condition: ModelStravaActivityConditionInput
  ) {
    deleteStravaActivity(input: $input, condition: $condition) {
      id
      userId
      stravaActivity
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createStravaUser = /* GraphQL */ `
  mutation CreateStravaUser(
    $input: CreateStravaUserInput!
    $condition: ModelStravaUserConditionInput
  ) {
    createStravaUser(input: $input, condition: $condition) {
      id
      access_token
      refresh_token
      expires_at
      athleteId
      scope_activity
      scope_read
      state
      country
      city
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateStravaUser = /* GraphQL */ `
  mutation UpdateStravaUser(
    $input: UpdateStravaUserInput!
    $condition: ModelStravaUserConditionInput
  ) {
    updateStravaUser(input: $input, condition: $condition) {
      id
      access_token
      refresh_token
      expires_at
      athleteId
      scope_activity
      scope_read
      state
      country
      city
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteStravaUser = /* GraphQL */ `
  mutation DeleteStravaUser(
    $input: DeleteStravaUserInput!
    $condition: ModelStravaUserConditionInput
  ) {
    deleteStravaUser(input: $input, condition: $condition) {
      id
      access_token
      refresh_token
      expires_at
      athleteId
      scope_activity
      scope_read
      state
      country
      city
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createSocketCheck = /* GraphQL */ `
  mutation CreateSocketCheck(
    $input: CreateSocketCheckInput!
    $condition: ModelSocketCheckConditionInput
  ) {
    createSocketCheck(input: $input, condition: $condition) {
      id
      healthcheckID
      socketComfortScore
      blistered
      bleeding
      bruised
      hot
      painful
      red
      sore
      sweaty
      loose
      tight
      amputationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateSocketCheck = /* GraphQL */ `
  mutation UpdateSocketCheck(
    $input: UpdateSocketCheckInput!
    $condition: ModelSocketCheckConditionInput
  ) {
    updateSocketCheck(input: $input, condition: $condition) {
      id
      healthcheckID
      socketComfortScore
      blistered
      bleeding
      bruised
      hot
      painful
      red
      sore
      sweaty
      loose
      tight
      amputationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSocketCheck = /* GraphQL */ `
  mutation DeleteSocketCheck(
    $input: DeleteSocketCheckInput!
    $condition: ModelSocketCheckConditionInput
  ) {
    deleteSocketCheck(input: $input, condition: $condition) {
      id
      healthcheckID
      socketComfortScore
      blistered
      bleeding
      bruised
      hot
      painful
      red
      sore
      sweaty
      loose
      tight
      amputationID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createHealthCheck = /* GraphQL */ `
  mutation CreateHealthCheck(
    $input: CreateHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    createHealthCheck(input: $input, condition: $condition) {
      id
      bodyScore
      aching
      painful
      sore
      tight
      tired
      other
      details
      otherComments
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      owner
    }
  }
`;
export const updateHealthCheck = /* GraphQL */ `
  mutation UpdateHealthCheck(
    $input: UpdateHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    updateHealthCheck(input: $input, condition: $condition) {
      id
      bodyScore
      aching
      painful
      sore
      tight
      tired
      other
      details
      otherComments
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      owner
    }
  }
`;
export const deleteHealthCheck = /* GraphQL */ `
  mutation DeleteHealthCheck(
    $input: DeleteHealthCheckInput!
    $condition: ModelHealthCheckConditionInput
  ) {
    deleteHealthCheck(input: $input, condition: $condition) {
      id
      bodyScore
      aching
      painful
      sore
      tight
      tired
      other
      details
      otherComments
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      owner
    }
  }
`;
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
      scarring
      grafting
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      scarring
      grafting
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      scarring
      grafting
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      SocketChecks {
        items {
          id
          healthcheckID
          socketComfortScore
          blistered
          bleeding
          bruised
          hot
          painful
          red
          sore
          sweaty
          loose
          tight
          amputationID
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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      activity
      stravaId
      userId
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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      activity
      stravaId
      userId
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
      duration
      distance
      cardio
      flexibility
      strength
      perceivedExertion
      feeling
      activity
      stravaId
      userId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
