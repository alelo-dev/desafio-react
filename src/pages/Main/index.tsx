import React, { lazy, Suspense } from "react";

const LazyMain = lazy(() => import("./main"));

const MainPage = (
  props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
  <Suspense fallback={null}>
    <LazyMain {...props} />
  </Suspense>
);

export default MainPage;
