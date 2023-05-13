import { gql } from '@apollo/client';

export const createUser = gql`
  mutation createUser($user: CreateUserInput!) {
    createUser(createUser: $user) {
      id
      email
      name
      createAt
      updateAt
    }
  }
`;

export const updateUser = gql`
  mutation updateUser($user: UpdateUserInput!) {
    updateUser(updateUser: $user) {
      id
      email
      createAt
      updateAt
    }
  }
`;

export const removeUser = gql`
  mutation removeUser($id: number!) {
    removeUser(id: $id) {
      id
    }
  }
`;

export const getAllUsers = gql`
  query getAllUsers() {
    getAllUsers() {
      id
      email
    }
  }
`;

export const getOneUser = gql`
  query getOneUser($id: number!) {
    getOneUser(id: $id) {
      id
      email
      name
      createAt
      updateAt
    }
  }
`;
