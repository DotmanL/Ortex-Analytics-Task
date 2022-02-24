import React, { useState, useCallback } from 'react';
import { makeStyles, withStyles } from '@mui/styles';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MuiTextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { fieldToTextField, TextFieldProps } from 'formik-material-ui';

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
}));

type InputProps = TextFieldProps;

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      background: '#EEF2F6',
    },
  },
})(MuiTextField);

export const PasswordTextField: React.FC<InputProps> = ({ className, ...props }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = useCallback(() => {
    setValues({ ...values, showPassword: !values.showPassword });
  }, [values, setValues]);

  const handleMouseDownPassword = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }, []);

  return (
    <CssTextField
      {...fieldToTextField(props)}
      type={values.showPassword ? 'text' : 'password'}
      className={`${classes.styling} ${className}`}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
