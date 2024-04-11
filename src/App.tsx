import React, { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  // return <div>TODO</div>;
  // NOTE: we want that none of the questions will be open at the beginning! => useState(null)
  const [selectedId, setSelectedId] = useState<null | number>(null);
  const [selectedAnswer, setselectedAnswer] = useState<null | string>(null);

  const handleSelectedId = (id: number | null, ans: string | null) => {
    setSelectedId(() => id);
    setselectedAnswer(() => ans);
  };
  console.log(selectedId);
  console.log(selectedAnswer);

  return (
    <>
      <div className="flashcards">
        {questions.map((q) => (
          <React.Fragment key={q.id}>
            {/* <div onClick={() => setselectedId(q.id)}>{q.question}</div> */}
            {/* ODER */}
            {/* <div onClick={() => handleSelectedId(q.id)}>{q.question}</div> */}
            {/* <div>{q.question}</div> */}
            {selectedId === 1297 ? (
              // <div className="selected">{selectedAnswer}</div>
              <div className={`${q.id === 1297 ? "selected" : ""}`}>
                {q.answer}
              </div>
            ) : (
              <div onClick={() => handleSelectedId(q.id, q.answer)}>
                {q.question}
              </div>
            )}
            {/* {selectedId === 9103 && <div>{q.answer}</div>} */}
            {/* {selectedId === 9103 && <div>{selectedAnswer}</div>} */}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
