import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

// NOTE: would typically use shallow render instead of full DOM.

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});

/* ref : https://airbnb.io/enzyme/docs/api/mount.html
 * use unmount() for cleanup.
 */
afterEach(() => {
    wrapped.unmount();
});

it('has a text-area and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('text area', () => {
    beforeEach(() => {
        wrapped.find('textarea')
            .simulate('change', { target: { value: 'new comment'} });
        //rerender the component
        wrapped.update();
    });

    it('has a text-area that users can interact with', () => {
        expect(wrapped.find('textarea').prop('value'))
            .toEqual('new comment');
    });
    
    it('clears the text-area on form submit', () => {
        wrapped.find('form')
            .simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value'))
            .toEqual('');
    });
});