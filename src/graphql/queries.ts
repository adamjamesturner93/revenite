/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncSocketChecks = /* GraphQL */ `
  query SyncSocketChecks(
    $filter: ModelSocketCheckFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSocketChecks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const getSocketCheck = /* GraphQL */ `
  query GetSocketCheck($id: ID!) {
    getSocketCheck(id: $id) {
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
export const listSocketChecks = /* GraphQL */ `
  query ListSocketChecks(
    $filter: ModelSocketCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSocketChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncHealthChecks = /* GraphQL */ `
  query SyncHealthChecks(
    $filter: ModelHealthCheckFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncHealthChecks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        SocketChecks {
          nextToken
          startedAt
        }
        date
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
export const getHealthCheck = /* GraphQL */ `
  query GetHealthCheck($id: ID!) {
    getHealthCheck(id: $id) {
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
      date
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listHealthChecks = /* GraphQL */ `
  query ListHealthChecks(
    $filter: ModelHealthCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHealthChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        SocketChecks {
          nextToken
          startedAt
        }
        date
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
        SocketChecks {
          nextToken
          startedAt
        }
        scarring
        grafting
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
export const getAmputation = /* GraphQL */ `
  query GetAmputation($id: ID!) {
    getAmputation(id: $id) {
      id
      limb
      level
      prosthesisWorn
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
      scarring
      grafting
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
        SocketChecks {
          nextToken
          startedAt
        }
        scarring
        grafting
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
export const getStravaActivity = /* GraphQL */ `
  query GetStravaActivity($id: ID!) {
    getStravaActivity(id: $id) {
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
export const listStravaActivitys = /* GraphQL */ `
  query ListStravaActivitys(
    $filter: ModelStravaActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStravaActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        stravaActivity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncStravaActivities = /* GraphQL */ `
  query SyncStravaActivities(
    $filter: ModelStravaActivityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStravaActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        stravaActivity
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStravaUser = /* GraphQL */ `
  query GetStravaUser($id: ID!) {
    getStravaUser(id: $id) {
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
export const listStravaUsers = /* GraphQL */ `
  query ListStravaUsers(
    $filter: ModelStravaUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStravaUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStravaUsers = /* GraphQL */ `
  query SyncStravaUsers(
    $filter: ModelStravaUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStravaUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
