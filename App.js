import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const envelopes = [
  {
    label: "Open when you’re sad",
    verse: "Psalm 34:18 — The Lord is close to the brokenhearted.",
    //messageImg: "sad.png"
  },
  {
    label: "Open when you’re happy",
    verse: "Psalm 118:24 — This is the day the Lord has made; let us rejoice.",
    //messageImg: "happy.png"
  },
  {
    label: "Open when you’re worried",
    verse: "Philippians 4:6 — Do not be anxious about anything...",
   // messageImg: "worried.png"
  },
  {
    label: "Open when you need strength",
    verse: "Isaiah 40:31 — Those who hope in the Lord will renew their strength.",
    //messageImg: "strength.png"
  },
  {
    label: "Open when you need hope",
    verse: "Jeremiah 29:11 — For I know the plans I have for you...",
    //messageImg: "hope.png"
  },
  {
    label: "Open when you feel alone",
    verse: "Deuteronomy 31:6 — Be strong and courageous. Do not be afraid...",
    //messageImg: "alone.png"
  },
  {
    label: "Open when you feel loved",
    verse: "Romans 8:38-39 — Nothing can separate us from the love of God.",
    //messageImg: "loved.png"
  }
];

function App() {
  const [openCard, setOpenCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const handleOpen = (index) => {
    setOpenCard(index);
    setFlipped(false);
  };

  return (
    <div className="container text-center py-4">
      <h1 className="title mb-4">💌 Read when you feel...</h1>

      <div className="row g-4 justify-content-center">
        {envelopes.map((env, index) => (
          <div key={index} className="col-md-3">
            <div
              className="envelope"
              onClick={() => handleOpen(index)}
            >
              <p>{env.label}</p>
              <span className="emoji">✉️</span>
            </div>
          </div>
        ))}
      </div>

      {openCard !== null && (
        <div className="overlay" onClick={() => setOpenCard(null)}>
          <div
            className={`card-container ${flipped ? "flipped" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setFlipped(!flipped);
            }}
          >
            <div className="card-front">
              <p className="verse">{envelopes[openCard].verse}</p>
            </div>
            <div className="card-back">
              <img
                src={envelopes[openCard].messageImg}
                alt="Message"
                className="message-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
