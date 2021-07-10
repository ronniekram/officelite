import React from 'react';
import UserForm from './UserForm';
import Info from './Info';
import Countdown from '../counter/Countdown';
import image from '../../assets/svgs/sign-up/bg-pattern-side.svg';

const SignUp = () => {
  return (
    <div id="signup">
      <div>
        <div> <Info /> </div>
        <div> <Countdown /> </div>
      </div>

      <div> <UserForm /> </div>
    </div>
  )
};

export default SignUp;