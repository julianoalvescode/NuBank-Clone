import { createStore } from 'redux';

const INITIAL_STATE = {
    cpf: '457',
    password: ''
}

function reducer(state = INITIAL_STATE, action) {
  

  return state;
}


const store = createStore(reducer)

export default store;



