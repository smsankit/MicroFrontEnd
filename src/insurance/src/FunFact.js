import React, {useState, useEffect } from "react";

const insuranceFacts = [
  "The first insurance contract was signed in 1347 in Genoa, Italy.",
  "The word 'insurance' comes from the French word 'ensurer' meaning 'to make sure'.",
  "Alien abduction insurance is a real thing you can buy.",
  "The most expensive life insurance policy ever sold was for $201 million.",
  "Starbucks provides health insurance to all employees who work at least 20 hours a week.",
  "Ben Turpin was the first celebrity to insure a body part; he insured his crossed eyes for $25,000.",
  "Lloyd's of London started as a coffee house in the 17th century.",
  "The Great Fire of London in 1666 led to the birth of property insurance.",
  "Astronauts on the Apollo 11 mission couldn't get life insurance, so they signed autographs to be sold if they didn't return.",
  "Taco Bell spends $2 million a year on insurance for their 'Steal a Base, Steal a Taco' promotion.",
  "Life insurance originated in ancient Rome, where burial clubs covered funeral costs.",
  "Insurance works on risk pooling — many people share the cost of a few claims.",
  "Term insurance offers high coverage at a relatively low premium.",
  "Health insurance helps protect against unexpected medical expenses.",
  "The first modern insurance company was established in London in 1706.",
  "Auto insurance became compulsory in many countries during the early 20th century.",
  "Insurance policies typically include premiums, coverage limits, and deductibles.",
  "Having insurance can significantly reduce financial risk during emergencies."
];

const FunFact = () => {
  const [message, setMessage] = useState("Loading...");

  const fetchMessage = () => {
    const randomIndex = Math.floor(Math.random() * insuranceFacts.length);
    setMessage("Did you know? " + insuranceFacts[randomIndex]);
  };

  useEffect(() => {
    fetchMessage();
    const intervalId = setInterval(fetchMessage, 5000);
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default FunFact;
