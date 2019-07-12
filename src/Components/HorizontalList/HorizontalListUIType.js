import React from 'react';
import  * as Cards  from './HorizontalListUI';

function HorizonntalListUIType (props) {
    if (!props.type)
      return "No";

    const Card = Cards[props.type];

    return <Card />
}

export default HorizonntalListUIType