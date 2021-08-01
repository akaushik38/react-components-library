"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SearchBar;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { FaSearch } from "@react-icons/fa";
function SearchBar(_ref) {
  var backgroundColor = _ref.backgroundColor,
      onClick = _ref.onClick;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    onClick: onClick,
    style: {
      backgroundColor: backgroundColor
    }
  });
}

SearchBar.propTypes = {
  backgroundColor: _propTypes.default.string,
  onlClick: _propTypes.default.func
};
SearchBar.defaultProps = {
  backgroundColor: 'red',
  onlClick: undefined
};