import { createAction } from '@reduxjs/toolkit';
import actionType from './contact-types';

export const contactFilter = createAction('contacts/filter');
export const contactDelete = createAction('contacts/delete');

export const contactAdd = createAction('contacts/add', (name, number) => ({
  payload: {
    id: Date.now(),
    name,
    number,
  },
}));

// export const contactAdd = (name, number) => {
//   return {
//     type: actionType.ADD,
//     payload: {
//       id: Date.now(),
//       name,
//       number,
//     },
//   };
// };

// export const contactDelete = (id) => {
//   return {
//     type: actionType.DELETE,
//     payload: id,
//   };
// };

// export const conatactFilter = (value) => ({
//   type: actionType.CHANGE_FILTER,
//   payload: value,
// });
