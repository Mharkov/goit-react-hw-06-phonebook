import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = ({ items }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {items.length > 1 && <Filter />}
      <ContactList />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.contacts.items,
  };
};

export default connect(mapStateToProps)(App);
