/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSONObject: any;
};

export type UserEntity = {
  createAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updateAt: Scalars['DateTime'];
};

export type QueryGetOneUseryArgs = {
  id: Scalars['ID'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type MutationCreateUserInputArg = {
  createUser: CreateUserInput;
};

export type MutationUpdateUserInputArg = {
  updateUser: UpdateUserInput;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: UserEntity;
  removeUser: Scalars['ID'];
  updateUser: UserEntity;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<UserEntity>;
  getOneUser: UserEntity;
};
