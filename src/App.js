import React from 'react';
import { home } from './assets/styles';
import SignUp from './components/signup';
import Countdown from './components/counter/Countdown';

const App = () => {
  return (
    <main className={home.main}>
      <Countdown />
    </main>
  )
};

export default App;