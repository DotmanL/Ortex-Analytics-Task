import React from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import { TextField, TextFieldProps } from 'formik-material-ui';
import { PasswordTextField } from './PasswordTextField';

const useStyles = makeStyles((theme) => ({
  styling: {
    width: '90%',
    height: '70px',
    marginTop: '30px',
    [theme.breakpoints.down('sm')]: {
      height: '50px',
      width: '100%',
    },

  },
  input: {},
}));

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      background: '#EEF2F6',
      // color: '#27AE60',
    },
  },
})(TextField);

type InputProps = TextFieldProps;

export const InputTextField: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = useStyles();
  const fieldProps = {
    ...props,
    className: `${classes.styling} ${className}`,
  };

  const passwordFieldProps = {
    ...props,
    className: ` ${classes.input}`,
  };

  if (props.type === 'password') {
    return <PasswordTextField {...passwordFieldProps} />;
  }

  return <CssTextField {...fieldProps} />;
};
