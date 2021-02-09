import React, {Component} from 'react';
import Board from '../Board/Board';
import Block from '../Block/Block';
import ColorPicker from '../ColorPicker/ColorPicker';
import colors from '../../settings/block-colors';
import randomInteger from '../../util/randomInteger';

import './Game.scss';

export default class Game extends Component {

	constructor(props) {

		super(props);

		this.amountOfBlocks = 400;

		let blocks = [];
		for(let i = 0; i < this.amountOfBlocks; i++) {
			const random = randomInteger(0, colors.length - 1);
			blocks.push(<Block key={i} color={colors[random]} />);
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
				<ColorPicker colors={colors} />
			</div>

		)
	}
}