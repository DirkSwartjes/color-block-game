import React from 'react';

import './Board.scss';

const Board = (props) => (

    <div className='Board'>
        {props.blocks}
    </div>
);

export default Board;