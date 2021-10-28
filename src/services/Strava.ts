import { DataStore } from '@aws-amplify/datastore';
import { StravaUser } from '../../models';

export const getStravaConnection = async (userId: string) =>
  await DataStore.query(StravaUser, (user) => user.userId('eq', userId));
