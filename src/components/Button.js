import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, color, size, disabled }) => {
    return (
        <button
            className={`button ${color} ${size} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'listfy']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'listfy']),
    disabled: PropTypes.bool,
    type:  PropTypes.oneOf(['submit']),
};

Button.defaultProps = {
    color: 'primary',
    size: 'smal',
    disabled: false,
    onClick: () => {},
};

export default Button;
