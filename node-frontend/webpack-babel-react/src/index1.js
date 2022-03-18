import React from 'react';
import reactDOM from 'react-dom';

const template = React.createElement('h1', {className: 'my-title'}, 'hello world 11 22');

reactDOM.render(template, document.getElementById('root'));
