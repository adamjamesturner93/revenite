import { CreateUserMutation, ListUsersQuery, UpdateUserMutation } from '../API';
import { GraphQLResult } from '@aws-amplify/api-graphql';

export type User = {
  id: string;
  name?: string | null;
  display_name?: string | null;
  dateOfBirth?: string | null;
  gender?: string | null;
  weight?: string | null;
  height?: string | null;
  sex?: string | null;
  ethnicGroup?: string | null;
  ethnicIdentity?: string | null;
  ethnicIdentityOther?: string | null;
  hasMilitaryService?: string | null;
  militaryService?: string | null;
  militaryServiceOther?: string | null;
  createdAt?: string;
  updatedAt?: string;
  owner?: string | null;
};

export function mapListUsersQuery(listUsersQuery: GraphQLResult<ListUsersQuery>): User | null {
  return (
    listUsersQuery.data?.listUsers?.items?.map(
      (user) =>
        ({
          id: user?.id,
          name: user?.name,
          display_name: user?.display_name,
          dateOfBirth: user?.dateOfBirth,
          gender: user?.gender,
          weight: user?.weight,
          height: user?.height,
          sex: user?.sex,
          ethnicGroup: user?.ethnicGroup,
          ethnicIdentity: user?.ethnicIdentity,
          ethnicIdentityOther: user?.ethnicIdentityOther,
          hasMilitaryService: user?.hasMilitaryService,
          militaryService: user?.militaryService,
          militaryServiceOther: user?.militaryServiceOther,
          createdAt: user?.createdAt,
          updatedAt: user?.updatedAt,
          owner: user?.owner,
        } as User),
    )[0] || null
  );
}

export function mapUpdateUser(
  updateUserMutation: GraphQLResult<UpdateUserMutation>,
  user: User,
): User {
  const updateUser = updateUserMutation?.data?.updateUser || null;

  if (!updateUser) return user;

  return {
    id: updateUser.id,
    name: updateUser?.name,
    display_name: updateUser?.display_name,
    dateOfBirth: updateUser?.dateOfBirth,
    gender: updateUser?.gender,
    weight: updateUser?.weight,
    height: updateUser?.height,
    sex: updateUser?.sex,
    ethnicGroup: updateUser?.ethnicGroup,
    ethnicIdentity: updateUser?.ethnicIdentity,
    ethnicIdentityOther: updateUser?.ethnicIdentityOther,
    hasMilitaryService: updateUser?.hasMilitaryService,
    militaryService: updateUser?.militaryService,
    militaryServiceOther: updateUser?.militaryServiceOther,
    createdAt: updateUser?.createdAt,
    updatedAt: updateUser?.updatedAt,
    owner: updateUser?.owner,
  };
}

export function mapCreateUser(createUserMutation: GraphQLResult<CreateUserMutation>): User {
  const createUser = createUserMutation?.data?.createUser || null;

  if (!createUser) throw new Error('No user found in API response');

  return {
    id: createUser.id,
    name: createUser?.name,
    display_name: createUser?.display_name,
    dateOfBirth: createUser?.dateOfBirth,
    gender: createUser?.gender,
    weight: createUser?.weight,
    height: createUser?.height,
    sex: createUser?.sex,
    ethnicGroup: createUser?.ethnicGroup,
    ethnicIdentity: createUser?.ethnicIdentity,
    ethnicIdentityOther: createUser?.ethnicIdentityOther,
    hasMilitaryService: createUser?.hasMilitaryService,
    militaryService: createUser?.militaryService,
    militaryServiceOther: createUser?.militaryServiceOther,
    createdAt: createUser?.createdAt,
    updatedAt: createUser?.updatedAt,
    owner: createUser?.owner,
  };
}
