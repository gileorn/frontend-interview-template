import "./App.css";

import { Sidebar } from "./Sidebar";
import { DocumentContent } from "./DocumentContent";
import { DevTools } from "./DevTools";

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="contentWrapper">
        <DocumentContent />
        <DevTools />
      </div>
    </div>
  );
}

export default App;
