import React, { useState } from "react";
import MultipleChoiceQuestion from "./MultipleChoiceQuestion";

const ClinicalOutcomes = () => {
  const [open, setOpen] = useState(false);
  const questions = [
    {
      question: "1. How much do you enjoy programming?",
      scores: [0, 1, 2, 3, 4], // Assign scores corresponding to each option
    },
    {
      question: "2. How often do you exercise?",
      scores: [4, 3, 2, 1, 0],
    },
    {
      question: "3. How often do you exercise?",
      scores: [4, 3, 2, 1, 0],
    },
    {
      question: "4. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
    {
      question: "5. How often do you exercise?",
      scores: [4, 3, 2, 1, 0],
    },
    {
      question: "6. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
    {
      question: "7. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
    {
      question: "8. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
    {
      question: "9. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
    {
      question: "10. How often do you exercise?",
      scores: [0, 1, 2, 3, 4],
    },
  ];

  const [totalScore, setTotalScore] = useState(0);

  const handleScoreChange = (score) => {
    setTotalScore((prevScore) => prevScore + score);
  };

  return (
    <div className="container mx-auto my-20 p-10">
      <h1 className="text-4xl font-bold">
        CLINICAL <br /> OUTCOMES in <br /> ROUTINE <br /> EVALUATION
      </h1>
      <br />
      <h1 className="text-4xl font-bold">CORE-10</h1>
      <p className="text-2xl">Screening Measure</p>
      <br />
      <div className="flex justify-between">
        <h1 className="text-3xl">Continue from one Year....</h1>
        <div className="flex gap-7">
          <span>Never</span>
          <span>Never</span>
          <span>Never</span>
          <span>Never</span>
          <span>Never</span>
        </div>
      </div>
      {questions.map((q, index) => (
        <MultipleChoiceQuestion
          key={index}
          question={q.question}
          scores={q.scores}
          options={q.options}
          onScoreChange={handleScoreChange}
        />
      ))}

      {/* <div className="form-control flex justify-center mt-10 align-middle items-center text-center">
        <label className="input-group w-[120px]">
          <span>Total Score</span>
          <input
            type="text"
            placeholder={totalScore}
            className="input input-bordered"
          />
        </label>
      </div> */}
      <div className="flex items-center justify-center">
        <button className="btn" onClick={() => setOpen(true)}>
          Submit
        </button>
      </div>
      {open && (
        <div className="form-control flex justify-center mt-10 align-middle items-center text-center">
          <label className="input-group w-[120px]">
            <span>Total Score</span>
            <input
              type="text"
              placeholder={totalScore}
              className="input input-bordered"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default ClinicalOutcomes;
