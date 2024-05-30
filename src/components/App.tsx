import React from "react";

import "./App.css";

import { Sidebar } from "./Sidebar";
import { DocumentContent } from "./DocumentContent";
import { DevTools } from "./DevTools";
import { Item } from "../types";

function App() {
  const [selectedDocumentId, setSelectedDocumentId] = React.useState<
    string | null
  >(null);

  const handleDocumentIdSelected = (id: Item["id"]) =>
    setSelectedDocumentId(id);

  return (
    <div className="layout">
      <Sidebar onDocumentSelected={handleDocumentIdSelected} />
      <div className="contentWrapper">
        <DocumentContent documentId={selectedDocumentId} />
        <DevTools />
      </div>
    </div>
  );
}

export default App;
