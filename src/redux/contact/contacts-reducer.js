import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { contactAdd, contactDelete, contactFilter } from './contact-actions';
// import actionType from './contact-types';

const contactinitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const items = createReducer(contactinitialState, {
  [contactAdd]: (state, { payload }) => [payload, ...state],
  [contactDelete]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [contactFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

// const items = (state = contactinitialState, { type, payload }) => {
//   switch (type) {
//     case actionType.ADD:
//       return [payload, ...state];

//     case actionType.DELETE:
//       return state.filter(({ id }) => id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionType.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
