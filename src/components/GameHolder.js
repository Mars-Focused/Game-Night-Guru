/*
`${GameName}: ${GameScore}`
passes props in for game score
needs props for update score function
passes in DeleteGame()
*/

import React from 'react'
// import Axios from 'axios'




function GameHolder(props){

    return ( <div className="gameholder">
    {props.game.name}: {props.game.score}
    <button onClick={() => props.upvoteGame(props.game.id)}>upvote</button>
    <button onClick={() => props.removeGame(props.game.id)}>delete</button>
    </div>
    )
}

export default GameHolder