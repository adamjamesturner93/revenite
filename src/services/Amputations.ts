import { DataStore } from '@aws-amplify/datastore';
import { Amputation } from '../../models';

export const getAmputations = async () => await DataStore.query(Amputation);

export const saveAmputation = async (amputation: Amputation) =>
  await DataStore.save(new Amputation(amputation));

export const updateAmputation = async (initial: Amputation, amputation: Amputation) =>
  await DataStore.save(Amputation.copyOf(initial, (updated) => Object.assign(updated, amputation)));
