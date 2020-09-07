import React from 'react'
import PropTypes from 'prop-types'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const ButtonHover = props => {
    const {
        className, onClick, label, isDisabled
    } = props;
    return (
        <button onClick={onClick}>
            <span className={className} disabled={isDisabled}>
                <span><AnchorLink href='#about'>{label}</AnchorLink></span>
            </span>
        </button>
    )
};

ButtonHover.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    label: PropTypes.string,
    isDisabled: PropTypes.bool
};

ButtonHover.defaultProps = {
    className: 'cta',
    onClick: null,
    label: 'Click Me',
    isDisabled: false
};

export default ButtonHover