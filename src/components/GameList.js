/*
Functional component (probably needs to use component keyword)
uses .Map to make multiple components
probably needs .sort() to sort games by score
game array will be passed down as props
*/

import React from 'react'
import GameHolder from './GameHolder'

function GameList(){
    return <div className="standard">
        <h1>Im GameList</h1>
            <GameHolder />
    </div>
}

export default GameList