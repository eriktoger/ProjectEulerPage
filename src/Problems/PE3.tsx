import React from "react";
import ProblemName from "../Common/problemName";
import Question from "../Common/question";
import Hint from "../Common/hint";
import Solution from "../Common/solution";
const _ = require("underscore");

const PE2 = () => {
  const name = "Even Fibonacci numbers";
  const number = 2;
  const question = `The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
`;
  const hints = [
    "Create all primes up to square rot of 600851475143",
    "One way to create primes is to use sieve of eratosthenes",
    "Divide 600851475143 with you primes until you are left with 1"
  ];
  const answer = 6857;
  const code = `const answerPE3 = (): number => {
  const limit = Math.sqrt(600851475143);
  let numbers: number[] = _.range(2, limit);
  let tempPrime = 2;
  let primes: number[] = [];

  while (numbers.length > 0) {
    primes.push(numbers[0]);
    numbers = numbers.filter(number => number % tempPrime !== 0);
    tempPrime = numbers[0];
  }

  let target = limit;
  let largestPrimeFactorIndex = 0;
  while (target > 1) {
    tempPrime = primes[largestPrimeFactorIndex];
    if (target % tempPrime === 0) {
      target /= tempPrime;
    }
    largestPrimeFactorIndex++;
  }

  return tempPrime;
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
