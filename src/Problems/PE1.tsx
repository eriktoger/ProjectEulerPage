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
  const hints = [
    "Start by creating a list/array/range with all numbers 1-1000",
    "Go through the list and only accept/add the correct numbers",
    "Use modolus/% to see if a number is divisible with 3 or 5"
  ];
  const answer = answerPE1();

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
        return <Hint key={i} hint={hint} index={i + 1} />;
      })}
      <Solution answer={answer} code={code} />
    </div>
  );
};

export default PE1;
