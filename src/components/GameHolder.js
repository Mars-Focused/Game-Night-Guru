/*
`${GameName}: ${GameScore}`
passes props in for game score
needs props for update score function
passes in DeleteGame()
*/

import React from "react";
// import Axios from 'axios'

function GameHolder(props) {
  return (
    <div className="gameholder">
      <p className="textboy">
        {props.game.name}: {props.game.score}
      </p>
      <p className="buttonboy">
        {/* he holds the buttons */}
        <button onClick={() => props.upvoteGame(props.game.id)}>upvote</button>
        <button onClick={() => props.removeGame(props.game.id)}>delete</button>
      </p>
    </div>
  );
}

export default GameHolder;
