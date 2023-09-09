import { useState } from "react";
import "./App.scss";

function App() {
  return <AdviceBox />;
}

const AdviceBox = () => {
  const [advice, setAdvice] = useState({ id: 0, advice: "I LOVE YOU, MY PRECIOUS QUEEN" });
  const giveAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip);
  };
  return (
    <div className="advice">
      <div className="advice-header">ADVICE #{advice.id}</div>
      <div className="advice-body">&quot;{advice.advice}&quot;</div>
      <div className="divider">
        <div className="divider-icon">
          <img src="./pattern-divider-desktop.svg" />
        </div>
      </div>
      <div className="btn" onClick={giveAdvice}>
        <img src="./icon-dice.svg" />
      </div>
    </div>
  );
};

export default App;
