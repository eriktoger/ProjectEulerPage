import React from "react";
import ProblemName from "../Common/problemName";
import Question from "../Common/question";
import Hint from "../Common/hint";
import Solution from "../Common/solution";

const answerPE2 = (): number => {
  let fib1 = 1;
  let fib2 = 2;
  let fib3 = 3;

  const limit = 4000000;
  let evenSum: number = 2;

  while (fib3 < limit) {
    fib3 = fib1 + fib2;
    if (fib3 % 2 === 0) {
      evenSum += fib3;
    }

    fib1 = fib2;
    fib2 = fib3;
  }

  return evenSum;
};

const PE2 = () => {
  const name = "Even Fibonacci numbers";
  const number = 2;
  const question = `Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
`;
  const hints = [
    "Use a while-loop that stops when you hit 4 million",
    "In the while-loop, check if the new number is even",
    `Update your numbers: \n 
    fib(n-2) = fib(n-1) \n
    fib(n-1) = fib(n)`
  ];
  const answer = answerPE2();
  const code = `const answerPE2 = (): number => {
  let fib1 = 1;
  let fib2 = 2;
  let fib3 = 3;
  const limit = 4000000;
  let evenSum: number = 2;

  while (fib3 < limit) {
    fib3 = fib1 + fib2;
    if (fib3 % 2 === 0) {
      evenSum += fib3;
    }

    fib1 = fib2;
    fib2 = fib3;
  }

  return evenSum;
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

export default PE2;