import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';

const ContactList = ({ onDel, contacts }) => {
  return (
    <ul className={styles.TaskList}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.TaskList_item} key={id}>
          {name} : {number}
          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delte"
              onClick={() => onDel(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  // contacts: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string,
  //   })
  // ),
  onDel: PropTypes.func.isRequired,
};

const filteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filteredContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDel: (id) => dispatch(actions.contactDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// const mapStateToProps = (state) => {
//   const { filter, items } = state.contacts;
//   const visibleTodos = filteredContacts(items, filter);

//   return {
//     items: visibleTodos,
//   };
// };
