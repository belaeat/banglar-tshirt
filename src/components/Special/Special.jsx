import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ring}) => {

    // use useContext to receive a value
    const angti = useContext(RingContext);
    
    return (
        <div>
            <h2>Special</h2>
            <p><small>Ring: {angti}</small></p>
        </div>
    );
};

export default Special;