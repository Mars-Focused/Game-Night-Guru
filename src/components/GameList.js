/*
Functional component (probably needs to use component keyword)
uses .Map to make multiple components
probably needs .sort() to sort games by score
game array will be passed down as props
*/

import React from 'react'
import GameHolder from './GameHolder'


function GameList(props){
    console.log(props.gamesArr)
    return <div className="gamelist">
            <GameHolder />
    </div>
}

export default GameList