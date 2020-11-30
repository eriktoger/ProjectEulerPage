import React from "react";
import recursion from "./recursion.jpg"
import styled from "styled-components";


const QAdiv = styled.div`
  float: left;
  max-width: 50%;
  @media (max-width:1000px) {
    max-width: 100%;
  }
`;
const Question = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: bold;
  `;

const Answer = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  
  `;

const Image = styled.img`
  float:right;
  max-width: 40%;
  @media (max-width:1000px) {
    max-width: 0;
    display: none;
  }
  `;


export const About = () => {

    return (
        <div>
            <QAdiv>
                <Question>
                    Why should I spend time on Code problems?
                </Question>
                <Answer>
                    It is a great way to learn how to code or to learn a new
                    language! And its fun!
                </Answer>

                <Question>
                    Why is that?
                </Question>
                <Answer>
                    Projects are nice and all, but it can be bit much to start with. And while
                    projects usually teaches you more in depth about a topic, problems on the other hand lets you will
                    come
                    in
                    contact with different parts of your languages. And sharpening your problem solving skills is
                    always a good idea! But you should of course do both projects and code
                    problems!
                </Answer>

                <Question>
                    Which code problem sites can you recommend?
                </Question>
                <Answer>
                    Leetcode, Codewars, Project Euler and SPOJ.
                </Answer>

                <Question>
                    What is the difference between them?
                </Question>
                <Answer>
                    Leetcode and Codewars are a bit more beginner friendly,
                    because they give you a error message when your code dosent solve the
                    problem. But you need to enter your code, and it can be a bit tricky
                    to figure out how they want it. Project Euler and SPOJ just tells you
                    if your answer is right or wrong. But I recommend starting out with LeetCode or Codewars.
                </Answer>

                <Question>
                    Why are there only Project Euler problems on your page?
                </Question>
                <Answer>
                    I had to start somewhere, but maybe I will add problems from different pages later on.
                </Answer>
            </QAdiv>
            <div>
                <Image src={recursion} alt="Recursion"/>
            </div>
        </div>
    );
};


