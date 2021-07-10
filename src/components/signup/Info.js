import React from 'react';
import { info } from '../../assets/styles';

const Info = () => {
  return (
    <article className={info.content}>
      <h1 className={info.header}>Work smarter. Save time.</h1>

      <section>
        <p className={info.paragraph}>Easily manage your projects. Get on the list and receive in-app perks available only to 
        early subscribers. We are moving into final development and getting ready for official launch soon.</p>
      </section>
    </article>
  )
};

export default Info;