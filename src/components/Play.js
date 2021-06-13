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
      <img src={Pentagon} alt="" className="triangle" />
      <div className="items">
        <Link to="/game">
          {allChoices.map(i => {
            return (
              <div
                key={i.id}
                data-id={`${i.name}`}
                onClick={setChoice}
                className={`icon icon--${i.name}`}
              ></div>
            )
          })}
        </Link>
      </div>
    </div>
  );
}

export default Play;
