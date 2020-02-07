import React from "react";
import ProblemName from "../Common/problemName";
import Question from "../Common/question";
import Hint from "../Common/hint";
import Solution from "../Common/solution";
const _ = require("underscore");

const answerPE1 = (): number => {
  return _.range(1, 1000).reduce((accumulator: number, n: number) => {
    return n % 3 === 0 || n % 5 === 0 ? accumulator + n : accumulator;
  }, 0);
};

const PE1 = () => {
  const name = "Multiples of 3 and 5";
  const number = 1;
  const question = `If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
                      The sum of these multiples is 23.
                      Find the sum of all the multiples of 3 or 5 below 1000.`;
  const hints = ["Hint 1", "Hint2"];
  const answer = answerPE1();
  const htmlCode = `<div style="background: #000000; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #cdcd00">const</span> <span style="color: #cccccc">answerPE1</span> <span style="color: #3399cc">=</span> <span style="color: #cccccc">()</span><span style="color: #3399cc">:</span> <span style="color: #00cd00">number</span> <span style="color: #3399cc">=&gt;</span> <span style="color: #cccccc">{</span>
      <span style="color: #cdcd00">return</span> <span style="color: #cccccc">_.range(</span><span style="color: #cd00cd">1</span><span style="color: #cccccc">,</span> <span style="color: #cd00cd">1000</span><span style="color: #cccccc">).reduce((accumulator</span>: <span style="color: #00cd00">number</span><span style="color: #cccccc">,</span> <span style="color: #cccccc">n</span>: <span style="color: #00cd00">number</span><span style="color: #cccccc">)</span> <span style="color: #3399cc">=&gt;</span> <span style="color: #cccccc">{</span>
      <span style="color: #cdcd00">return</span> <span style="color: #cccccc">n</span> <span style="color: #3399cc">%</span> <span style="color: #cd00cd">3</span> <span style="color: #3399cc">===</span> <span style="color: #cd00cd">0</span> <span style="color: #3399cc">||</span> <span style="color: #cccccc">n</span> <span style="color: #3399cc">%</span> <span style="color: #cd00cd">5</span> <span style="color: #3399cc">===</span> <span style="color: #cd00cd">0</span> <span style="color: #3399cc">?</span> <span style="color: #cccccc">accumulator</span> <span style="color: #3399cc">+</span> <span style="color: #cccccc">n</span> : <span style="color: #00cd00">accumulator</span><span style="color: #cccccc">;</span>
      <span style="color: #cccccc">},</span> <span style="color: #cd00cd">0</span><span style="color: #cccccc">);</span>
      <span style="color: #cccccc">};</span>
      </pre></div>`;
  const code = `const answerPE1 = (): number => { 
        return _.range(1, 1000). 
            reduce((accumulator: number, n: number) => { 
                return n % 3 === 0 || n % 5 === 0 ? accumulator + n : accumulator;
            }, 0); 
         };`;
  return (
    <div>
      <ProblemName name={name} number={number} />
      <Question question={question} />
      {hints.map((hint, i) => {
        return <Hint hint={hint} index={i + 1} />;
      })}
      <Solution answer={answer} code={code} htmlCode={htmlCode} />
    </div>
  );
};

export default PE1;
