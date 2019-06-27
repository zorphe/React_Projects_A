import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments : ['Comment1', 'Comment2', 'Comment3']
    };

    wrapped = mount(
        <Root initialState={ initialState }>
            <CommentList />
        </Root>
    );
});

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(3);
})

it('displays text for each comment', () => {
    expect(wrapped.render().text())
        .toContain('Comment1')
    expect(wrapped.render().text())
        .toContain('Comment2')
    expect(wrapped.render().text())
        .toContain('Comment3')
})