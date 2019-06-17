import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles SAVE_COMMENT action type', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['new comment']);
});

it('handles action of unknown type', () => {
    const newState = commentsReducer([], { type: 'unhandled_type'});
    expect(newState).toEqual([]);
});