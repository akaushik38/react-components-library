import React from 'react';
import PropTypes from 'prop-types';
// import { FaSearch } from "@react-icons/fa";

export default function SearchBar({ backgroundColor, onClick }) {
    return <input type="text" onClick={onClick} style={{ backgroundColor: backgroundColor }}></input>
}
SearchBar.propTypes = {
    backgroundColor: PropTypes.string,
    onlClick: PropTypes.func
}

SearchBar.defaultProps = {
    backgroundColor: 'red',
    onlClick: undefined
}
