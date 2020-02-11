import React from 'react';

import { Content, FormBox, Body } from './styles';

import { makeStyles, withStyles, fade } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';



const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
    '& label.Mui-focused': {
      color: '#81259d',
    }
  },
}));


const Login = () => {

  const classes = useStyles();



  return(
    <>
    <Body>
      <Content>
        <FormBox>
          <h2>Faça seu login</h2>
          <form className={classes.root} noValidate autoComplete="off">
            <div>
              <TextField
                id="standard-password-input"
                label="Senha"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </form>
        </FormBox>
      </Content>
    </Body>
  </>
  )
};

export default Login;
