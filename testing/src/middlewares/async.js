export default ({ dispatch }) => (next) => async (action) => {
    // Check action.payload for a Promise.
    // If found, wait til resolved.
    // Else send it to the next middleware
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // wait til Promise resolves:
    // then create a new action w/ the data + dispatch.


    const response = await action.payload;
    const newAction = {...action, payload: response };
    dispatch(newAction);

    /* Older syntax: .then() method */
    /*
       action.payload.then((response) => {
           const newAction = {...action, payload: response };
           dispatch(newAction);
       });*/
};