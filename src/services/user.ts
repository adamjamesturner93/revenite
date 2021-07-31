import { DataStore } from '@aws-amplify/datastore';
import { User } from '../../models';

export const getUser = async () => (await DataStore.query(User))[0];

export const saveUser = async (user: User) => await DataStore.save(new User(user));

export const updateUser = async (initial: User, user: User) =>
  await DataStore.save(User.copyOf(initial, (updated) => Object.assign(updated, user)));
