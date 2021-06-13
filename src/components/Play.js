import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pentagon from "../images/bg-pentagon.svg";
import { choices } from "../services/game.service";


const Play = ({ setMyChoice }) => {
  const [allChoices, setAllChoices] = useState([])
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  }

  useEffect(() => {
    async function getChoices() {
      const options = await choices()
      setAllChoices(options.data)
    }
    getChoices()
  }, [])

  return (
    <div className="play">
      {console.log(allChoices)}
      <img src={Pentagon} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          <div
            data-id="paper"
            onClick={setChoice}
            className="icon icon--paper"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="scissors"
            onClick={setChoice}
            className="icon icon--scissors"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="rock"
            onClick={setChoice}
            className="icon icon--rock"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="lizard"
            onClick={setChoice}
            className="icon icon--lizard"
          ></div>
        </Link>
        <Link to="/game">
          <div
            data-id="spock"
            onClick={setChoice}
            className="icon icon--spock"
          ></div>
        </Link>
      </div>
    </div>
  );
}

export default Play;
