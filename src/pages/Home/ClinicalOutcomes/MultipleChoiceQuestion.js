import React, { useState } from "react";

const MultipleChoiceQuestion = ({
  question,
  options,
  scores,
  onScoreChange,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onScoreChange(scores[e.target.value]);
  };

  return (
    <div className="flex justify-between text-xl font-bold items-center ">
      <h3 className="text">{question}</h3>
      <div className="flex gap-10 items-center">
        {scores.map((option, index) => (
          <div key={index} className="flex gap-2 items-center">
            <input
              type="radio"
              id={`${question}_${index}`}
              name={question}
              value={index}
              checked={selectedOption === index.toString()}
              onChange={handleOptionChange}
            />
            <label htmlFor={`${question}_${index}`}>{option}</label>
          </div>
        ))}
      </div>
      {/* <p>Selected option: {options[selectedOption]}</p> */}
    </div>
  );
};

export default MultipleChoiceQuestion;
