import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './contact/contacts-reducer';

const rootReducer = combineReducers({
  contacts: counterReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;

// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filters: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case 'contacts/add':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [payload, ...state.contacts.items],
//         },
//       };

//     case 'contacts/delete':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter(({ id }) => id !== payload),
//         },
//       };

//     case 'contacts/filter':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.items.filter((payload) =>
//             payload.toLowerCase().includes(state.contacts.filters.toLowerCase())
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// };
