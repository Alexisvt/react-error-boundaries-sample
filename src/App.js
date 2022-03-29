import ProblematicComponent from "./ProblematicComponent";
import "./styles.css";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <ProblematicComponent />
      </ErrorBoundary>
    </div>
  );
}
