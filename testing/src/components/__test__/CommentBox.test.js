import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

// NOTE: would typically use shallow render instead of full DOM.

let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />);
});

/* ref : https://airbnb.io/enzyme/docs/api/mount.html
 * use unmount() for cleanup.
 */
afterEach(() => {
    wrapped.unmount();
});

it('has a text-area and button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('has a text-area that users can interact with', () => {
    wrapped.find('textarea')
        .simulate('change', { target: { value: 'new comment'} });
    
    //rerender the component
    wrapped.update();
    expect(wrapped.find('textarea').prop('value'))
        .toEqual('new comment');
});

it('clears the text-area on form submit', () => {
    wrapped.setState({ comment : 'old comment'});
    /* alternative to setState - reuse code from above. *//*
        wrapped.find('textarea')
            .simulate('change', { target: { value: 'new comment'} });
        wrapped.update();
    */
    wrapped.find('form')
        .simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value'))
        .toEqual('');
});

