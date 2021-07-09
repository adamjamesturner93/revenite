export type UserModel = {
  id?: string;
  name: string;
  display_name: string;
  dateOfBirth: Date;
  gender: string;
  weight: string;
  height: string;
  sex: string;
  ethnicGroup: string;
  ethnicIdentity: string;
  ethnicIdentityOther?: string;
  hasMilitaryService: string;
  militaryService?: string;
  militaryServiceOther?: string;
  createdAt?: string;
  updatedAt?: string;
  owner?: string;
};

export const CreateUser = {};
