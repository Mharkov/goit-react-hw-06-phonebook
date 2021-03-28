import React from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

const App = ({ items }) => {
  // useEffect(() => {
  //   const todos = localStorage.getItem('newContacts');
  //   const parsedTodos = JSON.parse(todos);

  //   if (parsedTodos) {
  //     setNewContacts(parsedTodos);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('newContacts', JSON.stringify(newContacts));
  // }, [newContacts]);

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
