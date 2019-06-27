import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// Enzyme - check for Component - https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html

//
let wrapped;
beforeEach(() => {
    wrapped = shallow(<App />);
})

// basic template: it ( testDescription, testFunction )
it ('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length)
        .toEqual(1);
})

it ('shows a comment list', () => {
    expect(wrapped.find(CommentList).length)
        .toEqual(1);
})