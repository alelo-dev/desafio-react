import { lazy, Suspense } from 'react';

const LazyWidget = lazy(() => import('./Widget'));

interface WidgetProps {
  widget: string;
}

const Widget = (props: WidgetProps) => (
  <Suspense fallback={null}>
    <LazyWidget widget={props.widget} />
  </Suspense>
);

export default Widget;