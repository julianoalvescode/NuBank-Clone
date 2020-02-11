import React from 'react';
import Routes from './routes/Routes'
import { Provider } from 'react-redux'
import store from './store/store'
import { GlobalStyle } from './styles/global';
import { Helmet } from 'react-helmet'

function App() {

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"/>
      </Helmet>
      <GlobalStyle/>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </>
  );
}

export default App;
