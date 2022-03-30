import './styles.css';

import { ErrorBoundary } from 'react-error-boundary';

import ErrorFallback from './ErrorFallback';
import Farewell from './Farewell';
import ProblematicComponent from './ProblematicComponent';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Farewell />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ProblematicComponent />
      </ErrorBoundary>
    </div>
  );
}
