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
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelectedId = (id: React.SetStateAction<number | null>) => {
    // setSelectedId(id);
    // NOTE: how to change the code in such a way that when i click again, the current flashcrad will be deselected!
    // This works so: when i click on the new flashcard, the q.id or here id would not be equal to the selectedId(selectedId was set already on the old q.id) => q.id or id from new flashcard would be set, otherwise when both of them are equal, nothing(null) would be set and only the current flashcard would be deselected!
    //RESULT: when i click on the current flashcard, it will deselected and when i click on the new flashcard it would be selected!
    setSelectedId(id !== selectedId ? id : null);
  };
  console.log(selectedId);

  return (
    <>
      <div className="flashcards">
        {questions.map((q) => (
          <div
            onClick={() => handleSelectedId(q.id)}
            key={q.id}
            className={q.id === selectedId ? "selected" : ""}
          >
            <p>{q.id === selectedId ? q.answer : q.question}</p>
          </div>
        ))}
      </div>
    </>
  );
}
