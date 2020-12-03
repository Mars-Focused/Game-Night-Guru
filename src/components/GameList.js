/*
Functional component (probably needs to use component keyword)
uses .Map to make multiple components
probably needs .sort() to sort games by score
game array will be passed down as props
*/

import Axios from 'axios';
import React, {Component} from 'react'
import GameHolder from './GameHolder'

export default class GameList extends Component {
    constructor() {
        super();
        this.state = { 
            games: []
        }
    }
    
    componentDidMount() {
        Axios.get('/api/games')
        .then(results => {
            // console.log(results.data)
            this.setState({ games: results.data})
        })
    }



    render() {
        const {games} = this.state
        // console.log(this.props)
        return (
            // <div className="gamelist">
            //     <GameHolder />
            // </div>
            <div>
                {
                    this.state.games.map( game => (
                        <GameHolder game = {game}/>
                    ))
                }
            </div>
        )
    }
}
