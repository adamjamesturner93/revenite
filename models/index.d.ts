import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AmputationLevelEnum {
  THROUGH_FOOT = "THROUGH_FOOT",
  TRANSTIBIAL = "TRANSTIBIAL",
  THROUGH_KNEE = "THROUGH_KNEE",
  TRANSFEMORAL = "TRANSFEMORAL",
  THROUGH_HAND = "THROUGH_HAND",
  TRANSRADIAL = "TRANSRADIAL",
  THROUGH_ELBOW = "THROUGH_ELBOW",
  TRANSHUMERAL = "TRANSHUMERAL"
}

export enum AmputationEnum {
  LEFT_LEG = "LEFT_LEG",
  RIGHT_LEG = "RIGHT_LEG",
  LEFT_ARM = "LEFT_ARM",
  RIGHT_ARM = "RIGHT_ARM"
}



export declare class StravaActivity {
  readonly id: string;
  readonly userId: string;
  readonly stravaActivity: string;
  constructor(init: ModelInit<StravaActivity>);
  static copyOf(source: StravaActivity, mutator: (draft: MutableModel<StravaActivity>) => MutableModel<StravaActivity> | void): StravaActivity;
}

export declare class StravaUser {
  readonly id: string;
  readonly access_token: string;
  readonly refresh_token: string;
  readonly expires_at: number;
  readonly athleteId: number;
  readonly scope_activity: boolean;
  readonly scope_read: boolean;
  readonly state?: string;
  readonly country?: string;
  readonly city?: string;
  readonly userId: string;
  constructor(init: ModelInit<StravaUser>);
  static copyOf(source: StravaUser, mutator: (draft: MutableModel<StravaUser>) => MutableModel<StravaUser> | void): StravaUser;
}

export declare class SocketCheck {
  readonly id: string;
  readonly healthcheckID?: string;
  readonly socketComfortScore: string;
  readonly blistered?: boolean;
  readonly bleeding?: boolean;
  readonly bruised?: boolean;
  readonly hot?: boolean;
  readonly painful?: boolean;
  readonly red?: boolean;
  readonly sore?: boolean;
  readonly sweaty?: boolean;
  readonly loose?: boolean;
  readonly tight?: boolean;
  readonly amputationID?: string;
  readonly phantomSensations: boolean;
  readonly pinsAndNeedles?: boolean;
  readonly pain?: boolean;
  readonly limbPresences?: boolean;
  readonly itching?: boolean;
  readonly other?: boolean;
  readonly otherComments?: string;
  constructor(init: ModelInit<SocketCheck>);
  static copyOf(source: SocketCheck, mutator: (draft: MutableModel<SocketCheck>) => MutableModel<SocketCheck> | void): SocketCheck;
}

export declare class HealthCheck {
  readonly id: string;
  readonly bodyScore: string;
  readonly aching?: boolean;
  readonly painful?: boolean;
  readonly sore?: boolean;
  readonly tight?: boolean;
  readonly tired?: boolean;
  readonly other?: boolean;
  readonly details?: string;
  readonly otherComments?: string;
  readonly SocketChecks?: (SocketCheck | null)[];
  readonly date: string;
  readonly sleepScore: string;
  constructor(init: ModelInit<HealthCheck>);
  static copyOf(source: HealthCheck, mutator: (draft: MutableModel<HealthCheck>) => MutableModel<HealthCheck> | void): HealthCheck;
}

export declare class Amputation {
  readonly id: string;
  readonly limb?: AmputationEnum | keyof typeof AmputationEnum;
  readonly level?: AmputationLevelEnum | keyof typeof AmputationLevelEnum;
  readonly prosthesisWorn?: boolean;
  readonly SocketChecks?: (SocketCheck | null)[];
  readonly scarring?: boolean;
  readonly grafting?: boolean;
  constructor(init: ModelInit<Amputation>);
  static copyOf(source: Amputation, mutator: (draft: MutableModel<Amputation>) => MutableModel<Amputation> | void): Amputation;
}

export declare class User {
  readonly id: string;
  readonly name?: string;
  readonly display_name?: string;
  readonly dateOfBirth?: string;
  readonly gender?: string;
  readonly weight?: string;
  readonly height?: string;
  readonly sex?: string;
  readonly ethnicGroup?: string;
  readonly ethnicIdentity?: string;
  readonly ethnicIdentityOther?: string;
  readonly hasMilitaryService?: string;
  readonly militaryService?: string;
  readonly militaryServiceOther?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Activity {
  readonly id: string;
  readonly name?: string;
  readonly date: string;
  readonly duration: string;
  readonly distance: string;
  readonly cardio?: boolean;
  readonly flexibility?: boolean;
  readonly strength?: boolean;
  readonly perceivedExertion: string;
  readonly feeling?: string;
  readonly activity?: string;
  readonly stravaId?: string;
  readonly userId: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}