export const DocumentContent = ({
  documentId,
}: {
  documentId: string | null;
}) => {
  if (documentId === null) {
    return (
      <div className="documentContent">
        <h1>Select the page in the sidebar</h1>
      </div>
    );
  }

  return null;
};
