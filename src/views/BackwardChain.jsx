import { useState } from 'react';
import disney from "../assets/disney.jpeg";

export default function DisneyMovieQuiz() {
  // State for user preferences
  const [preferences, setPreferences] = useState({
    likes_magic: null,
    enjoys_happy_endings: null,
    loves_adventure: null,
    likes_singing: null,
    enjoys_talking_animals: null,
  });

  const [step, setStep] = useState(1); // To track the current step
  const [shouldWatch, setShouldWatch] = useState(null); // Result: Should the user watch a Disney movie?

  // Function to ask questions
  const askQuestion = (preference, question) => {
    return (
      <div key={preference}>
        <p>{question}</p>
        <button className="button" onClick={() => setPreferences({ ...preferences, [preference]: "Yes" })}>Yes</button>
        <button className="button" onClick={() => setPreferences({ ...preferences, [preference]: "No" })}>No</button>
      </div>
    );
  };

  // Backward Chaining Logic
  const backwardChain = () => {
    if (preferences.likes_magic === null) {
      return askQuestion('likes_magic', 'Do you like magic?');
    }
    if (preferences.enjoys_happy_endings === null) {
      return askQuestion('enjoys_happy_endings', 'Do you enjoy happy endings?');
    }
    if (preferences.loves_adventure === null) {
      return askQuestion('loves_adventure', 'Do you love adventure?');
    }
    if (preferences.likes_singing === null) {
      return askQuestion('likes_singing', 'Do you enjoy singing in movies?');
    }
    if (preferences.enjoys_talking_animals === null) {
      return askQuestion('enjoys_talking_animals', 'Do you like movies with talking animals?');
    }

    // Decision-making based on preferences
    if (
      preferences.likes_magic === "Yes" ||
      preferences.enjoys_happy_endings === "Yes" ||
      preferences.loves_adventure === "Yes"
    ) {
      setShouldWatch(true);
      setStep(2);
      return;
    } else {
      setShouldWatch(false);
      setStep(2);
      return;
    }
  };

  return (
    <div className="container">
      <h1>Should You Watch a Disney Movie?</h1>
      {step === 1 && backwardChain()}
      {step === 2 && (
        <p>
          {shouldWatch
            ? "Yes! A Disney movie is perfect for you!"
            : "Maybe try something else today!"}
        </p>
      )}
      <img src={disney} alt="Disney characters" style={{ marginTop: "25px", width: "250px" }} />
    </div>
  );
}