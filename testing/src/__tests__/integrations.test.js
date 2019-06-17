import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';
import { doesNotReject } from 'assert';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [
            { name : 'moxios_1'},
            { name : 'moxios_2'}
        ]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it ('can fetch a list of comments and display them', (done) => {
    // render entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find 'fetchComments' button & click
    wrapped.find('.fetch-comments')
       .simulate('click');

    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();

        wrapped.unmount();
    });


});