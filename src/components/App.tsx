import { Sidebar } from "./Sidebar";
import { DocumentContent } from "./DocumentContent";
import React from "react";
import { DevTools } from "./DevTools";

function App() {
  const [selectedDocumentId, setSelectedDocumentId] = React.useState<
    string | null
  >(null);

  return (
    <div className="layout">
      <Sidebar />
      <div className="contentWrapper">
        <DocumentContent documentId={null} />
        <DevTools />
      </div>
    </div>
  );
}

export default App;
