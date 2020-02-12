import React, { useEffect, useState } from 'react';

import $ from 'jquery'
import 'jquery-mask-plugin/dist/jquery.mask'

import { Content, FormBox, Body } from './styles';
import { Container } from './../../styles/styles'

import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import  { onLogin }  from './../../auth/auth'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: 250,
      paddingBottom: 5
    },
    '& label.Mui-focused': {
      color: '#81259d',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#81259d',
    },
    '& .MuiInput-underline': {
      paddingTop: theme.spacing(1),
    }
  },
}));


const Login = ({info}) => {

  const classes = useStyles();

  const [cpf, setCPF] = useState(info.cpf)
  const [password, setPASS] = useState(info.password)

  const changeCPF = (e) => {
    setCPF(e.target.value)

    // console.log(cpf)
  }

  const changePASS = (e) => {
    setPASS(e.target.value)

    // console.log(password)
  }

  const inLogin = (e) => {
    e.preventDefault()

    onLogin(cpf, password)

  }

  $(document).ready(function(){
    $('#standard-cpf-input').mask('000.000.000-00', {reverse: true});
  });


  return(
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Login - Nubank</title>
    </Helmet>
    <Body>
      <Container>
        <Content>
          <FormBox>
            <div>
              <h2>Faça seu login</h2>
              <form className={classes.root} noValidate autoComplete="off">
                <div>
                  <TextField
                    onChange={changeCPF}
                    id="standard-cpf-input"
                    label="CPF"
                    type="text"
                    name="cpf"
                    autoComplete="current-cpf"
                  />
                </div>
                <div>
                  <TextField
                    onChange={changePASS}
                    name="password"
                    id="standard-password-input"
                    label="Senha"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <div className="btn-block">
                  <button onClick={inLogin} className="btn-submit" type="submit">Continuar</button>
                </div>
              </form>
              <div className="btn-block-password">
                <a className="btn-forgetPassword" href="./">Esqueci minha senha</a>
              </div>
            </div>
          </FormBox>
        </Content>
      </Container>
    </Body>
  </>
  )
};

export default connect(state => ({info: state}))(Login);
