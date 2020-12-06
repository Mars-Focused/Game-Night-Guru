/*
props goes here so it can make a new game
post goes here
State here is User input
*/

import React from "react";

//every time you make a functional component make sure you pass in props
function AddGame(props) {
  console.log(props);
  return (
    <div className="addgame">
      <input type="text" name="gameinput"></input>
      {/* <button onClick={() => props.addGame(props.game.name)}>Add Game</button> */}
      {/* <h1>Im AddGame</h1> */}
    </div>
  );
}

export default AddGame;
