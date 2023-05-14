import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { useTranslation } from 'react-i18next';

import RegisterBlock from './Forms/RegisterForm/RegisterBlock';

import { useMutation, ApolloError } from '@apollo/client';
import { Mutation, MutationCreateUserArgs, createUser } from '../gql';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const Popup = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  const { t } = useTranslation();

  const [createUser1] = useMutation<Pick<Mutation, 'createUser'>, MutationCreateUserArgs>(createUser);

  const newUser = async (name: string, email: string) => {
    try {
      await createUser1({
        variables: {
          user: {
            name,
            email,
            password: '1234',
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
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ paddingBottom: 0 }}>{t('signUpPopup.title')}</DialogTitle>
      <RegisterBlock margin="30px" />
    </Dialog>
  );
};

export default Popup;
