import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';

const ContactForm = ({ onAdd, items }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const contactValidation = () => {
    if (items.find((contact) => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return true;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contactValidation()) {
      return;
    }

    onAdd(name, number);
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.TaskEditor} onSubmit={handleSubmit}>
        <label className={styles.TaskEditor_label}>
          Name
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="name"
            value={name}
            onChange={handleChangeName}
            required
          />
        </label>
        <label className={styles.TaskEditor_label}>
          Number
          <input
            className={styles.TaskEditor_input}
            type="text"
            name="number"
            value={number}
            onChange={handleChangeNumber}
            required
          />
        </label>
        <button className={styles.TaskEditor_button}> Add contact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (name, number) => dispatch(actions.contactAdd(name, number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
