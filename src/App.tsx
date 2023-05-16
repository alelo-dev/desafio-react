import { ReactNode } from "react";
import "./styles/main.scss";

function App({ children }: { children?: ReactNode }) {
  return (
    <div className="container">
      <div className="container-content">{children}</div>
    </div>
  );
}

export default App;
