import { useMutation, UseMutationOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActiveToken = {
  __typename?: 'ActiveToken';
  message: Scalars['String'];
  status: Scalars['Boolean'];
  tokens?: Maybe<Array<Maybe<Tokendata>>>;
};

export type Booleaninfo = {
  __typename?: 'Booleaninfo';
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Job = {
  __typename?: 'Job';
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  skills?: Maybe<Array<Maybe<Skills>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Jobinfo = {
  __typename?: 'Jobinfo';
  job?: Maybe<Job>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
};

export type Jobinfopaginate = {
  __typename?: 'Jobinfopaginate';
  jobs?: Maybe<Array<Maybe<Job>>>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
  totalCount?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createJob: Jobinfo;
  createSkill?: Maybe<Booleaninfo>;
  createUser?: Maybe<Booleaninfo>;
  deleteJob?: Maybe<Booleaninfo>;
  deleteToken?: Maybe<Booleaninfo>;
  deleteUser?: Maybe<Booleaninfo>;
  login: Token;
  logout?: Maybe<Booleaninfo>;
  updateJob?: Maybe<Booleaninfo>;
  updateUser: Userwithinfo;
};


export type MutationCreateJobArgs = {
  city: Scalars['String'];
  description: Scalars['String'];
  skills: Array<InputMaybe<Scalars['String']>>;
  title: Scalars['String'];
};


export type MutationCreateSkillArgs = {
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationDeleteJobArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationDeleteTokenArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLogoutArgs = {
  token: Scalars['String'];
};


export type MutationUpdateJobArgs = {
  city: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  skills: Array<InputMaybe<Scalars['String']>>;
  title: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  password: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  job?: Maybe<Jobinfo>;
  jobs?: Maybe<Jobinfopaginate>;
  searchJob?: Maybe<SearchJobInfo>;
  showtokens?: Maybe<ActiveToken>;
  skills?: Maybe<Skillinfo>;
  user?: Maybe<User>;
};


export type QueryJobArgs = {
  id?: InputMaybe<Scalars['Int']>;
};


export type QueryJobsArgs = {
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  sort: Scalars['String'];
};


export type QuerySearchJobArgs = {
  limit: Scalars['Int'];
  name: Scalars['String'];
  page: Scalars['Int'];
  sort: Scalars['String'];
};


export type QuerySkillsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  title: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Token = {
  __typename?: 'Token';
  message: Scalars['String'];
  status: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Tokendata = {
  __typename?: 'Tokendata';
  createdAt?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type Userwithinfo = {
  __typename?: 'Userwithinfo';
  message: Scalars['String'];
  status: Scalars['Boolean'];
  user?: Maybe<User>;
};

export type SearchJobInfo = {
  __typename?: 'searchJobInfo';
  jobs?: Maybe<Array<Maybe<Job>>>;
  message: Scalars['String'];
  status: Scalars['Boolean'];
  totalCount?: Maybe<Scalars['Int']>;
  totalPage?: Maybe<Scalars['Int']>;
};

export type Skillinfo = {
  __typename?: 'skillinfo';
  message: Scalars['String'];
  skills?: Maybe<Array<Maybe<Skills>>>;
  status: Scalars['Boolean'];
};

export type Skills = {
  __typename?: 'skills';
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'Token', token?: string | null, message: string, status: boolean, user?: { __typename?: 'User', id?: number | null, email?: string | null } | null } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'Booleaninfo', message: string, status: boolean } | null };


export const LoginDocument = `
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
    }
    message
    status
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>
    ) =>
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      ['login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, LoginDocument, variables)(),
      options
    );
export const RegisterDocument = `
    mutation register($email: String!, $password: String!) {
  createUser(email: $email, password: $password) {
    message
    status
  }
}
    `;
export const useRegisterMutation = <
      TError = unknown,
      TContext = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      options?: UseMutationOptions<RegisterMutation, TError, RegisterMutationVariables, TContext>
    ) =>
    useMutation<RegisterMutation, TError, RegisterMutationVariables, TContext>(
      ['register'],
      (variables?: RegisterMutationVariables) => fetcher<RegisterMutation, RegisterMutationVariables>(dataSource.endpoint, dataSource.fetchParams || {}, RegisterDocument, variables)(),
      options
    );