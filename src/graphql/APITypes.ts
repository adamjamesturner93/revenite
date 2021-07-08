import { DeepOmit } from './DeepOmit';
import { GetUserQuery } from '../API';

export type UserType = DeepOmit<Exclude<GetUserQuery['getUser'], null>, '__typename'>;
