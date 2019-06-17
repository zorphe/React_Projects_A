import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// Enzyme - check for Component - https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html

// basic template: it ( testDescription, testFunction )
it ('shows a comment box', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentBox).length)
        .toEqual(1);
})

it ('shows a comment list', () => {
    const wrapped = shallow(<App />);

    expect(wrapped.find(CommentList).length)
        .toEqual(1);
})