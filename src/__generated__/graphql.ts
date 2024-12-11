/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Timestamp: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Department = {
  __typename?: 'Department';
  faculty: Faculty;
  facultyId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  users?: Maybe<Array<Maybe<User>>>;
};

export type Faculty = {
  __typename?: 'Faculty';
  departments: Array<Department>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadFile: SharedFile;
};


export type MutationUploadFileArgs = {
  newSharedFile: NewSharedFile;
};

export type NewSharedFile = {
  file: Scalars['Upload']['input'];
  name: Scalars['String']['input'];
  status: Status;
  userId: Scalars['ID']['input'];
};

export type Query = {
  __typename?: 'Query';
  departments: Array<Department>;
  faculties: Array<Faculty>;
  getDepartment?: Maybe<Department>;
  getFaculty?: Maybe<Faculty>;
  getSharedFile?: Maybe<SharedFile>;
  getUser?: Maybe<User>;
  sharedFiles: Array<SharedFile>;
  users: Array<User>;
};


export type QueryGetDepartmentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFacultyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetSharedFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};

export enum Role {
  Admin = 'Admin',
  User = 'User'
}

export type SharedFile = {
  __typename?: 'SharedFile';
  createdAt: Scalars['Timestamp']['output'];
  createdBy: User;
  fileUrl: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['Timestamp']['output'];
};

export enum Status {
  AdminOnly = 'AdminOnly',
  DepartmentOnly = 'DepartmentOnly',
  Private = 'Private',
  Public = 'Public'
}

export type User = {
  __typename?: 'User';
  department: Department;
  departmentId: Scalars['ID']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mobile: Scalars['String']['output'];
  name: Scalars['String']['output'];
  role: Role;
  sharedFiles?: Maybe<Array<Maybe<SharedFile>>>;
  surname: Scalars['String']['output'];
};

export type SharedFilesQueryVariables = Exact<{ [key: string]: never; }>;


export type SharedFilesQuery = { __typename?: 'Query', sharedFiles: Array<{ __typename?: 'SharedFile', id: string, name: string, fileUrl: string, createdAt: any, updatedAt: any }> };


export const SharedFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SharedFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sharedFiles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"fileUrl"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<SharedFilesQuery, SharedFilesQueryVariables>;