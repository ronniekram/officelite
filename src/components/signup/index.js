import React from 'react';
import UserForm from './UserForm';
import Info from './Info';
import Countdown from '../counter/Countdown';
import image from '../../assets/svgs/sign-up/bg-pattern-side.svg';
import { formPage } from '../../assets/styles';

const SignUp = () => {
  return (
    <>
    <div className={formPage.blue} id="signup"></div>

    <div className="fixed flex flex-row w-3/4 z-10 top-40 right-32">
      <div className="flex flex-col px-2 m-2">
        <div className={formPage.info}> <Info /> </div>
        <div className={formPage.countdown}> <Countdown /> </div>
      </div>

      <div className={formPage.form}> <UserForm /> </div>

    </div>
    </>
  )
};

export default SignUp;