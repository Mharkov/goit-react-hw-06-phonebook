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

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onFilter: (e) => dispatch(actions.conatactFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
