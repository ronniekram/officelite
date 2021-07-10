import React from 'react';
import UserForm from './UserForm';
import Info from './Info';
import Countdown from '../counter/Countdown';
import { signup } from '../../assets/styles';
import image from '../../assets/svgs/sign-up/bg-pattern-side.svg';

const SignUp = () => {
  return (
    <>
      <div id="signup" className={signup.bg}>
        <img src={image} alt="space ship lookin' ass background" className={signup.img} />
      </div>

      <article className={signup.house}>
        <section>
          <div>
            <Info />
          </div>
          
          <div>
            <Countdown />
          </div>
        </section>

        <section>
          <UserForm />
        </section>
      </article>
    </>
  )
};

export default SignUp;