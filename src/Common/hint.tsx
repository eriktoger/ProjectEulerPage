import React, { useState } from "react";

const toggleHint = (hint: boolean, setHint: any): void => {
  setHint(!hint);
};

interface Hint {
  hint: string;
  index: number;
}

const Hint = (props: Hint) => {
  const [hint, setHint] = useState(false);
  let buttonText = hint ? "Hide hint" : "Show hint";
  return (
    <div>
      <button onClick={() => toggleHint(hint, setHint)}>
        {" "}
        {buttonText} {props.index}{" "}
      </button>
      {hint && (
        <div>
          <p>{props.hint} </p>
        </div>
      )}
    </div>
  );
};

export default Hint;
