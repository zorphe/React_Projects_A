import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

// basic template: it ( testDescription, testFunction )
// document created by jsDOM
it ('shows a comment box', () => {
    // set-up
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);

    // inspect div element to confirm if the CommentBox exists
    expect(div.innerHTML).toContain('Box');

    // clean-up
    ReactDOM.unmountComponentAtNode(div);
})