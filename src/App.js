import React from 'react';
import { home } from './assets/styles';
import SignUp from './components/signup';

const App = () => {
  return (
    <main className={home.main}>
      <SignUp />
    </main>
  )
};

export default App;