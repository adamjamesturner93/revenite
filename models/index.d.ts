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



export declare class Amputation {
  readonly id: string;
  readonly limb?: AmputationEnum | keyof typeof AmputationEnum;
  readonly level?: AmputationLevelEnum | keyof typeof AmputationLevelEnum;
  readonly prosthesisWorn?: boolean;
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
  readonly distance?: string;
  readonly cardio?: boolean;
  readonly flexibility?: boolean;
  readonly strength?: boolean;
  readonly perceivedExertion: string;
  readonly feeling: string;
  readonly activity?: string;
  constructor(init: ModelInit<Activity>);
  static copyOf(source: Activity, mutator: (draft: MutableModel<Activity>) => MutableModel<Activity> | void): Activity;
}