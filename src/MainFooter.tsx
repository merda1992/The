import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';
import { useLazyQuery, useMutation, ApolloError } from '@apollo/client';
import { Query, QueryGetOneUseryArgs, getOneUser, Mutation, MutationCreateUserInputArg, createUser } from './gql';

const FooterBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.common.black,
  maxHeight: '42px',
  height: '100%',
  justifyContent: 'space-between',
}));

const MainFooter = () => {
  const [loadGreeting, { called, loading, data }] = useLazyQuery<Pick<Query, 'getOneUser'>, QueryGetOneUseryArgs>(
    getOneUser,
    {
      fetchPolicy: 'cache-first',
      variables: {
        id: 2,
      },
    },
  );

  const [createUser1] = useMutation<Pick<Mutation, 'createUser'>, MutationCreateUserInputArg>(createUser);

  const newUser = async (name: string, email: string) => {
    try {
      await createUser1({
        variables: {
          user: {
            name,
            email,
          },
        },
      });
    } catch (error) {
      const { graphQLErrors, message: errorText } = error as ApolloError;
      const message = graphQLErrors && graphQLErrors.length ? graphQLErrors[0].message : errorText;
      if (error) {
        console.log(message);
      }
    }
  };

  return (
    <FooterBox onClick={(e) => newUser(String(e.currentTarget.clientWidth), String(e.currentTarget.clientHeight))}>
      <Box pl="20px">
        <Typography fontFamily="fantasy" fontSize="15px" fontWeight="400" color="primary.main">
          copyright © 2023 Coverstar, Inc.
        </Typography>
      </Box>
      <Box pr="20px">
        <Link
          href="mailto:merda@tut.by"
          sx={{ textDecoration: 'none', fontFamily: 'fantasy', fontSize: '15px', fontWeight: 400 }}
          color="primary.main"
        >
          contact us
        </Link>
      </Box>
    </FooterBox>
  );
};

export default MainFooter;
