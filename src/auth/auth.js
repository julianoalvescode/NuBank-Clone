
import { connect } from 'react-redux'


export const onLogin = (cpf, password) => {


  localStorage.setItem('token', 'QpwL5tke4Pnpja7X4')

}

export default connect(state => ({info: state}))(onLogin);

