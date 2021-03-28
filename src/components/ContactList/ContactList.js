import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';

const ContactList = ({ onDel, items }) => {
  return (
    <ul className={styles.TaskList}>
      {items.map((newContact) => (
        <li className={styles.TaskList_item} key={newContact.id}>
          {newContact.name + ': ' + newContact.number}

          {
            <button
              className={styles.TaskList_button}
              type="button"
              name="delte"
              onClick={() => onDel(newContact.id)}
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
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onDel: (id) => dispatch(actions.contactDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
