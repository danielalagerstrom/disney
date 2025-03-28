import React, { useState } from "react";
import disney from "../assets/disney.jpeg";

const characterData = {
  Mulan: { fact: "Mulan took her father's place in the army." },
  Elsa: { fact: "Elsa was originally meant to be the villain in 'Frozen'!" },
  Aladdin: { fact: "Aladdin's look was inspired by Tom Cruise." },
  SnowWhite: { fact: "Snow White was Disney's first princess!" },
  Cinderella: { fact: "Cinderella's glass slipper is a size 4½." }
};

export default function ForwardChain() {
  const [facts, setFacts] = useState({
    brave: null,
    kind: null,
    mischievous: null,
    loves_adventure: null,
    talks_to_animals: null,
    has_superpowers: null,
    royal: null,
  });
  const [character, setCharacter] = useState(null);

  const askQuestion = (fact, question) => (
    <div key={fact}>
      <p>{question}</p>
      <button className="button" onClick={() => setFacts({ ...facts, [fact]: "Yes" })}>Yes</button>
      <button className="button" onClick={() => setFacts({ ...facts, [fact]: "No" })}>No</button>
    </div>
  );

  const forwardChain = () => {
    if (character) {
      return (
        <div>
          <h2>You are {character}!</h2>
          <p>{characterData[character].fact}</p>
          <img src={disney} alt="Disney" style={{ width: "250px", borderRadius: "10px", marginTop: "20px" }} />
        </div>
      );
    }

    if (facts.brave === null) return askQuestion('brave', 'Is the character brave?');
    if (facts.brave === "Yes") {
      if (facts.kind === null) return askQuestion('kind', 'Is the character kind?');
      if (facts.kind === "Yes") return setCharacter('Mulan');
      if (facts.has_superpowers === null) return askQuestion('has_superpowers', 'Does the character have superpowers?');
      if (facts.has_superpowers === "Yes") return setCharacter('Elsa');
    }
    if (facts.mischievous === null) return askQuestion('mischievous', 'Is the character mischievous?');
    if (facts.mischievous === "Yes" && facts.loves_adventure === null) return askQuestion('loves_adventure', 'Does the character love adventure?');
    if (facts.loves_adventure === "Yes") return setCharacter('Aladdin');
    if (facts.talks_to_animals === null) return askQuestion('talks_to_animals', 'Does the character talk to animals?');
    if (facts.talks_to_animals === "Yes" && facts.kind === null) return askQuestion('kind', 'Is the character kind?');
    if (facts.kind === "Yes") return setCharacter('SnowWhite');
    if (facts.royal === null) return askQuestion('royal', 'Is the character royal?');
    if (facts.royal === "Yes") return setCharacter('Cinderella');

    return <p>We couldn't determine the character. Try again!</p>;
  };

  return (
    <div className="container">
      <h1>Which Disney Character Are You?</h1>
      {forwardChain()}
    </div>
  );
}
