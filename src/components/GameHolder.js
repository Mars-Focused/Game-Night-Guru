/*
`${GameName}: ${GameScore}`
passes props in for game score
needs props for update score function
passes in DeleteGame()
*/

import React from 'react'

function GameHolder(props){
    return <div className="gameholder">
        {/* {JSON.stringify(props, null, 2)} */}
{props.game.name}: {props.game.score}
    </div>
}

export default GameHolder