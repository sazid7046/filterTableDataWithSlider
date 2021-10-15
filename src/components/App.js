import React from "react";
import "antd/dist/antd.css";
import ResultsTableContainer from "../containers/ResultsTableContainer";

const App = () => {
  return (
    <div>
      <h1>Redux Ant Design Filter Table Column with Slider</h1>
      <p>Instructions</p>
      <ol>
        <li>Click 'Fetch'</li>
        <li>Click the filter icon in the 'Population' column</li>
        <li>Filter the table by dragging the slider</li>
      </ol>
      <ResultsTableContainer />
    </div>
  );
};

export default App;
