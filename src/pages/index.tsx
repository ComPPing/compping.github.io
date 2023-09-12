import React from 'react';
import clsx from 'clsx';

import styles from './index.module.css';
import { Redirect } from '@docusaurus/router';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"></h1>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Redirect to="/blog" />
  );
}
