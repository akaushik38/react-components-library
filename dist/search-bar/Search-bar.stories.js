"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _SearchBar = _interopRequireDefault(require("./Search-bar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/SearchBar',
  component: _SearchBar.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_SearchBar.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  backgroundColor: '#e6e6e6'
};