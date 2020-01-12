import React from 'react';
import PropTypes from 'prop-types';

const style = { color: '#ff0000', display: 'inline' };

const ErrorNotification = ({ label }) => <span style={style}>{label}</span>;

ErrorNotification.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ErrorNotification;
