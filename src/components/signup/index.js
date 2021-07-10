import React from 'react';
// will need to import countdown from footer folder
import { signup } from '../../assets/styles';
import image from '../../assets/svgs/sign-up/bg-pattern-side.svg';

const SignUp = () => {
  return (
    <article>
      <div id="signup" className={signup.bg}>
        <img src={image} alt="space ship lookin' ass background" className={signup.img} />
      </div>
      
    </article>
  )
};

export default SignUp;