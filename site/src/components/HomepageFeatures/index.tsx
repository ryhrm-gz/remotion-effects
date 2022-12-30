import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simple and easy to use',
    description: (
      <>
        Remotion Effects is a library of simple and easy to use effects for
        Remotion. Set up the effect with props.
      </>
    ),
  },
  {
    title: 'Customizable effects',
    description: (
      <>
        The effect can be changed by setting options such as duration, effect
        intensity, etc.
      </>
    ),
  },
  {
    title: 'Reduce time spent editing CSS',
    description: (
      <>
        Remotion Effects eliminates the need to write tedious CSS. You can
        concentrate on your creative work.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
