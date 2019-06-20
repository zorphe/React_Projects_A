import axios from 'axios';
import { AUTH_USER, AUTH_ERR } from './types';

export const signup = (formProps, callback) => async (dispatch) => {
    try{
        const response = await axios.post('http://localhost:3090/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        if (callback) callback();
    } catch(e){
        dispatch({ type: AUTH_ERR, payload: 'Email in use' });
    }
};

export const signin = (formProps, callback) => async (dispatch) => {
    try{
        const response = await axios.post('http://localhost:3090/signin', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        localStorage.setItem('token', response.data.token);
        if (callback) callback();
    } catch(e){
        dispatch({ type: AUTH_ERR, payload: 'Invalid login credentials.' });
    }
};

export const signout = (formProps) => {
    localStorage.removeItem('token');

    return {
        type: AUTH_USER,
        payload: ''
    };
};