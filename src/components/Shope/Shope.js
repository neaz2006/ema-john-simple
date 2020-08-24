import React, { useState } from 'react';
import fakeData from '../../fakeData';

const Shope = () => {
    const frist10 = fakeData.slice(0,10);
    const [item,setItem]=useState(frist10);

    return (
        <div>
            <h1>this is shope</h1>
            <h3>{item.length}</h3>
            <ul>
                {
                    item.map(item=> <li>{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Shope;