import React from 'react';
import colors from '../../settings/block-colors';

import './Block.scss';

const Block = (props) => (

    <div className='Block' style={{backgroundColor: colors[props.type]}}>
        
    </div>
);

export default Block;