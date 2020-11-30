import React from "react";
import "../App.css";

const HomePage = () => {

  return (
    <div className="App">
      <h2 className="hp-header">
        ← Click on links to get solution and answer!
      </h2>
      <div style={{ marginRight: "300px" }}>
        <p>Question: Why do coding problems?</p>
        <p>
          Answer: It is a great way to learn how to code or to learn a new
          language! And its fun!
        </p>
        <br />
        <p>Question: Why is that?</p>
        <p>
          Answer: Projects are nice and all, but it can be bit much. And while
          projects usually teaches you more in depth about a topic, since you
          are doing a bunch of problems you will come in contact with different
          parts of your languages. And sharpening your problem solving skills is
          always a good idea! But you should do both projects and coding
          problems!
        </p>
        <br />
        <p>Question: Which code problem sites can you recommend?</p>
        <p>Answer: Leetcode, Codewars, Project Euler and SPOJ</p>
        <br />
        <p>Question: What is the difference between them?</p>
        <p>
          Answer: Leetcode and Codewars are a bit more beginner friendly,
          because they give you a error message when your code dosent solve the
          problem. But you need to enter your code, and it can be a bit tricky
          to figure out how they want it. Project Euler and SPOJ just tells you
          if your answer is right or wrong But hard is good sometimes (=. But i
          Recommend starting out with LeetCode or Codewars. Click on the name of
          the coding sites to the left to learn more about them!
        </p>
        <br />
      </div>
    </div>
  );
};

export default HomePage;
