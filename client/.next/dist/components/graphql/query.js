'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userList = undefined;

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _client = require('@apollo/client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\nquery{\n    User{\n      name,\n      address,\n      phone,\n      email\n    }\n  }\n'], ['\nquery{\n    User{\n      name,\n      address,\n      phone,\n      email\n    }\n  }\n']);

var userList = exports.userList = (0, _client.gql)(_templateObject);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JhcGhxbC9xdWVyeS5qcyJdLCJuYW1lcyI6WyJncWwiLCJ1c2VyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxBQUFRLEFBQVIsQUFFQTs7Ozs7O0FBQU8sSUFBTSw4QkFBUyxBQUFULGlCQUFOIiwiZmlsZSI6InF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXNoL0RvY3VtZW50cy9hc3NpZ25tZW50L25leHQtYXBvbGxvLWRlbW8vY2xpZW50In0=