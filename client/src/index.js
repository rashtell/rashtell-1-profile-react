import React from 'react';
import { render } from 'react-dom';

import { Body } from './components/Body';


console.log(`

    This is a React Website 
    =======================

    Enjoy surfing 

    `);

render(
    <Body />, document.getElementById('root')
)