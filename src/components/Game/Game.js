import React, {Component} from 'react';
import Board from '../Board/Board';
import Block from '../Block/Block';
import randomInteger from '../../util/randomInteger';

import './Game.scss';

export default class Game extends Component {

	constructor(props) {

		super(props);

		this.amountOfBlocks = 400;

		let blocks = [];
		for(let i = 0; i < this.amountOfBlocks; i++) {
			blocks.push(<Block key={i} type={randomInteger(0, 5)} />);
		}
		
		this.state = {
			blocks: blocks
		}
	}

	render = () => {

		return (

			<div className='Game'>
				<p>Game</p>
				<Board blocks={this.state.blocks} />
			</div>

		)
	}
}