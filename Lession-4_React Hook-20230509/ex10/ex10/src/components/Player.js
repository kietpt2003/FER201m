import React, { useState } from 'react'
import { Players } from '../Shared/ListOfPlayers'

export default function Player() {
    const [player, setPlayer] = useState([]);
    return (
        <div className='container'>
            <div className='row'>
                {Players.map((player) => (
                    <div className='col-md-4 column' key={player.id}>
                        <div className='card'>
                            <img src={player.img} alt='' />
                            <h3>{player.name}</h3>
                            <p className='title'>{player.club}</p>
                            <p>
                                <button onClick={() => { setPlayer(player) }}>
                                    <a href='#popup1' id='openPopUp'>Detail</a>
                                </button>
                            </p>
                        </div>
                    </div>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img src={player.id} alt=''></img>
                        <h2>{player.name}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {player.info}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
