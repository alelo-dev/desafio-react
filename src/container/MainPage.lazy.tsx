import React, { lazy, Suspense } from 'react';

const LazyMainPage = lazy(() => import('./MainPage'));

const MainPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMainPage {...props} />
  </Suspense>
);

export default MainPage;
