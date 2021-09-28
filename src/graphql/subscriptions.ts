/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateStravaActivity = /* GraphQL */ `
  subscription OnCreateStravaActivity {
    onCreateStravaActivity {
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
export const onUpdateStravaActivity = /* GraphQL */ `
  subscription OnUpdateStravaActivity {
    onUpdateStravaActivity {
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
export const onDeleteStravaActivity = /* GraphQL */ `
  subscription OnDeleteStravaActivity {
    onDeleteStravaActivity {
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
export const onCreateStravaUser = /* GraphQL */ `
  subscription OnCreateStravaUser {
    onCreateStravaUser {
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
export const onUpdateStravaUser = /* GraphQL */ `
  subscription OnUpdateStravaUser {
    onUpdateStravaUser {
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
export const onDeleteStravaUser = /* GraphQL */ `
  subscription OnDeleteStravaUser {
    onDeleteStravaUser {
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
export const onCreateSocketCheck = /* GraphQL */ `
  subscription OnCreateSocketCheck($owner: String) {
    onCreateSocketCheck(owner: $owner) {
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
export const onUpdateSocketCheck = /* GraphQL */ `
  subscription OnUpdateSocketCheck($owner: String) {
    onUpdateSocketCheck(owner: $owner) {
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
export const onDeleteSocketCheck = /* GraphQL */ `
  subscription OnDeleteSocketCheck($owner: String) {
    onDeleteSocketCheck(owner: $owner) {
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
export const onCreateHealthCheck = /* GraphQL */ `
  subscription OnCreateHealthCheck($owner: String) {
    onCreateHealthCheck(owner: $owner) {
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
export const onUpdateHealthCheck = /* GraphQL */ `
  subscription OnUpdateHealthCheck($owner: String) {
    onUpdateHealthCheck(owner: $owner) {
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
export const onDeleteHealthCheck = /* GraphQL */ `
  subscription OnDeleteHealthCheck($owner: String) {
    onDeleteHealthCheck(owner: $owner) {
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
export const onCreateAmputation = /* GraphQL */ `
  subscription OnCreateAmputation($owner: String) {
    onCreateAmputation(owner: $owner) {
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
export const onUpdateAmputation = /* GraphQL */ `
  subscription OnUpdateAmputation($owner: String) {
    onUpdateAmputation(owner: $owner) {
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
export const onDeleteAmputation = /* GraphQL */ `
  subscription OnDeleteAmputation($owner: String) {
    onDeleteAmputation(owner: $owner) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity {
    onCreateActivity {
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
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity {
    onUpdateActivity {
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
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity {
    onDeleteActivity {
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
