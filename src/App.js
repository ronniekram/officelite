import React from 'react';
import SignUp from './components/signup';
import Landing from './components/landing/index';
import { app } from './assets/styles';

const App = () => {
  return (
    <main className={app.main}>
      <SignUp />
      {/* <Landing /> */}
    </main>
  )
};

export default App;