import React, { lazy, Suspense } from 'react';

const LazyWidget = lazy(() => import('./Widget'));

const Widget = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyWidget {...props} />
  </Suspense>
);

export default Widget;
