import React, { useState } from "react";
import "../prism.css";
const renderHTML = require("react-render-html");
const Prism = require("prismjs");

const toggleSolution = (solution: boolean, setSolution: any): void => {
  setSolution(!solution);
};
interface Solution {
  answer: number;
  code: string;
}
const Solution = (props: Solution) => {
  const [solution, setSolution] = useState(false);
  let buttonText = solution ? "Hide solution" : "Show solution";
  const html = Prism.highlight(
    props.code,
    Prism.languages.javascript,
    "typescript"
  );

  return (
    <div>
      <h3>Solution</h3>
      <button onClick={() => toggleSolution(solution, setSolution)}>
        {" "}
        {buttonText}{" "}
      </button>
      {solution && (
        <div>
          <p>Answer: {props.answer}</p>
          <div style={{}}>
            <p> Code:</p>
            <pre
              style={{
                background: "black",
                textAlign: "left",
                padding: "25px 50px"
              }}
            >
              <code className="language-typescript">{renderHTML(html)}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Solution;
