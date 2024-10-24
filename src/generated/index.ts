import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Mutation = {
  __typename?: 'Mutation'
  createUser?: Maybe<User>
  removeUser?: Maybe<User>
  updateUser?: Maybe<User>
}

export type MutationCreateUserArgs = {
  input: UserInput
}

export type MutationRemoveUserArgs = {
  id: Scalars['String']['input']
}

export type MutationUpdateUserArgs = {
  id: Scalars['String']['input']
  input: UserInput
}

export type Query = {
  __typename?: 'Query'
  user?: Maybe<User>
  users?: Maybe<Array<User>>
}

export type QueryUserArgs = {
  id: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  account: Scalars['String']['output']
  createTime: Scalars['String']['output']
  desc?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  name: Scalars['String']['output']
  password: Scalars['String']['output']
  tel?: Maybe<Scalars['String']['output']>
  updateTime: Scalars['String']['output']
}

export type UserInput = {
  account: Scalars['String']['input']
  desc?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
  tel?: InputMaybe<Scalars['String']['input']>
}

export type AllUserQueryVariables = Exact<{ [key: string]: never }>

export type AllUserQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id: string
    name: string
    password: string
    account: string
    desc?: string | null
    tel?: string | null
    createTime: string
    updateTime: string
  }> | null
}

export const AllUserDocument = gql`
  query AllUser {
    users {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`

/**
 * __useAllUserQuery__
 *
 * To run a query within a React component, call `useAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUserQuery(
  baseOptions?: Apollo.QueryHookOptions<AllUserQuery, AllUserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AllUserQuery, AllUserQueryVariables>(
    AllUserDocument,
    options,
  )
}
export function useAllUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllUserQuery,
    AllUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AllUserQuery, AllUserQueryVariables>(
    AllUserDocument,
    options,
  )
}
export function useAllUserSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<AllUserQuery, AllUserQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AllUserQuery, AllUserQueryVariables>(
    AllUserDocument,
    options,
  )
}
export type AllUserQueryHookResult = ReturnType<typeof useAllUserQuery>
export type AllUserLazyQueryHookResult = ReturnType<typeof useAllUserLazyQuery>
export type AllUserSuspenseQueryHookResult = ReturnType<
  typeof useAllUserSuspenseQuery
>
export type AllUserQueryResult = Apollo.QueryResult<
  AllUserQuery,
  AllUserQueryVariables
>
