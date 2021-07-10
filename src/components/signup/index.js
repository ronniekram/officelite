import React from 'react';
import UserForm from './UserForm';
// will need to import countdown from footer folder
import { signup } from '../../assets/styles';
import image from '../../assets/svgs/sign-up/bg-pattern-side.svg';

const SignUp = () => {
  return (
    <>
      <div id="signup" className={signup.bg}>
        <img src={image} alt="space ship lookin' ass background" className={signup.img} />
      </div>

      <article>
        <section>
          <UserForm />
        </section>
      </article>
    </>
  )
};

export default SignUp;