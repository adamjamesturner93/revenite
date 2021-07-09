import { API } from 'aws-amplify';

import {
  GraphQLAPIClass,
  graphqlOperation,
  GRAPHQL_AUTH_MODE,
  GraphQLResult,
} from '@aws-amplify/api-graphql';

export interface GraphQLOptions {
  input?: Record<string, unknown>;
  variables?: Record<string, unknown>;
  authMode?: GRAPHQL_AUTH_MODE;
}

export async function callGraphQL<T>(
  query: any,
  ssrAPI?: GraphQLAPIClass,
  options?: GraphQLOptions,
): Promise<GraphQLResult<T>> {
  if (ssrAPI) {
    return (await ssrAPI.graphql(graphqlOperation(query, options))) as GraphQLResult<T>;
  }
  return (await API.graphql(graphqlOperation(query, options))) as GraphQLResult<T>;
}
export async function getGraphQL<T>(
  query: any,
  ssrAPI?: GraphQLAPIClass,
  variables?: Record<string, unknown>,
): Promise<GraphQLResult<T>> {
  if (ssrAPI) {
    return (await ssrAPI.graphql(graphqlOperation(query, variables))) as GraphQLResult<T>;
  }
  return (await API.graphql(graphqlOperation(query, variables))) as GraphQLResult<T>;
}
