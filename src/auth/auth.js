
import { connect } from 'react-redux'


const onLogin = (e, {info}) => {
  e.preventDefault()

  console.log('teste')

}

export default connect(state => ({info: state}))(onLogin);

