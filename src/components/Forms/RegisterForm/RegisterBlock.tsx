import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { BoxProps } from '@mui/material';

import TextInput from '../TextInput';
import { registerFormSchema } from '../validationSchemas';
import { CheckboxText } from '../CustomCheckbox/styled';

import { StyledRegisterBlock } from './styled';

interface SendUserDataProps {
  email: string;
  password: string;
}

enum InputNames {
  password = 'name',
  email = 'email',
}

const RegisterBlock = (props: BoxProps) => {
  const { t } = useTranslation();

  const formProps = useForm<SendUserDataProps>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(registerFormSchema),
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = formProps;

  const handleSendUserData = ({ email, password }: SendUserDataProps) => {
    if (isValid) {
      localStorage.setItem('_email', email);
      localStorage.setItem('_password', password);
    }
  };

  return (
    <FormProvider {...formProps}>
      <form onSubmit={handleSubmit(handleSendUserData)}>
        <Box position="relative" {...props}>
          <StyledRegisterBlock>
            <TextInput name={InputNames.email} label="Email" />
            <TextInput type="password" name={InputNames.password} label="Password" />
            <Button type="submit">{t('header.signUp')}</Button>
          </StyledRegisterBlock>
          {/* <Box>
            <CheckboxText>
              {t('landingPage.registerBlock.checkbox')}
              <Typography>{t('footerText.privacyPolicy')}</Typography>
              {' & '}
              <Typography>{t('contactUsPage.form.termsAndConditions')}</Typography>
            </CheckboxText>
          </Box> */}
        </Box>
      </form>
    </FormProvider>
  );
};

export default RegisterBlock;
