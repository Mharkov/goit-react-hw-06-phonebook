import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contact/contact-actions';

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      Find contacts by name
      <input type="text" value={value} onChange={onFilter} />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  const { filter, items } = state.contacts;
  const normalizedFilter = filter.toLowerCase();

  const visibleTodos = items.filter(({ text }) =>
    text.toLowerCase().includes(normalizedFilter)
  );

  return {
    // items: state.contacts.items,
    value: visibleTodos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.conatactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
