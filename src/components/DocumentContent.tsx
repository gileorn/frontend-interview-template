import { useEffect, useState } from "react";
import "./DocumentContent.css";
import { getDocumentContent } from "../actions/getItems";

export const DocumentContent = ({
  documentId,
}: {
  documentId: string | null;
}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("effect === ", documentId);
    if (!documentId) return;
    const result = getDocumentContent(documentId);
    console.log(result);
    // .then((response) => setData(response));
  }, [documentId]);

  if (documentId === null) {
    return (
      <div className="documentContent">
        <h1>Select the page in the sidebar</h1>
      </div>
    );
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="documentContent">
      <h1>{data.title}</h1>
    </div>
  );
};
