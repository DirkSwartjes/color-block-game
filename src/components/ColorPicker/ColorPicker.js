import React from 'react';
import Block from '../Block/Block';

import './ColorPicker.scss';

const ColorPicker = (props) => {

    const blocks = props.colors.map((color, index) => {
        return <Block key={index} color={color} />
    })

    return (
        <div className='ColorPicker'>
            {blocks}
        </div>
    );
}

export default ColorPicker;