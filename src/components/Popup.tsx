import * as React from 'react';

import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import { useTranslation } from 'react-i18next';

import RegisterBlock from './Forms/RegisterForm/RegisterBlock';

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

const Popup = (props: SimpleDialogProps) => {
  const { onClose, open } = props;
  const { t } = useTranslation();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle sx={{ paddingBottom: 0 }}>{t('signUpPopup.title')}</DialogTitle>
      <RegisterBlock margin="30px" />
    </Dialog>
  );
};

export default Popup;
