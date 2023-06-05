import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button } from '@mui/material';
import { BoxProps } from '@mui/material';

import { useMutation, ApolloError } from '@apollo/client';
import { Mutation, MutationLoginArgs, login } from '../../../gql';
import { useSnackbar } from '../../../hooks/snackbar';

import TextInput from '../TextInput';
import { registerFormSchema } from '../validationSchemas';

import { StyledRegisterBlock } from './styled';

interface SendUserDataProps {
  email: string;
  password: string;
}

enum InputNames {
  password = 'password',
  email = 'email',
}

const RegisterBlock = (props: BoxProps) => {
  const { t } = useTranslation();
  const snackbar = useSnackbar();

  const [loginUser] = useMutation<Pick<Mutation, 'login'>, MutationLoginArgs>(login);

  const loginUserByData = async (email: string, password: string) => {
    try {
      await loginUser({
        variables: {
          auth: {
            email,
            password,
          },
        },
      }).then((data) => localStorage.setItem('token', data.data?.login.token || ''));
    } catch (error) {
      const { graphQLErrors, message: errorText } = error as ApolloError;
      const message = graphQLErrors && graphQLErrors.length ? graphQLErrors[0].message : errorText;
      if (error) {
        snackbar(message);
      }
    }
  };

  const formMethods = useForm<SendUserDataProps>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods;

  const handleSendUserData = ({ email, password }: SendUserDataProps) => {
    if (isValid) {
      loginUserByData(email, password);
    }
  };

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(handleSendUserData)}>
        <Box position="relative" {...props}>
          <StyledRegisterBlock>
            <TextInput name={InputNames.email} label="Email" />
            <TextInput type="password" name={InputNames.password} label="Password" />
            <Button type="submit">{t('header.signUp')}</Button>
          </StyledRegisterBlock>
        </Box>
      </form>
    </FormProvider>
  );
};

export default RegisterBlock;
