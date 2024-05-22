// there's no real content in our mock interview app
// we use this space to show debug info about mocked api calls
export const DevTools = () => {
  return (
    <div className="devTools">
      <div className="title">Log Info</div>
      {/* DOM node for popullating log entries with DOM API */}
      <div id="logInfoList"></div>
    </div>
  );
};
