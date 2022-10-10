'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _UsersData = require('../components/UsersData');

var _UsersData2 = _interopRequireDefault(_UsersData);

var _system = require('@mui/system');

var _navbar = require('../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

var _client = require('@apollo/client');

var _apolloClient = require('../lib/apollo-client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kash/Documents/assignment/next-apollo-demo/client/pages/userslist.js?entry';

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement(_system.Container, { maxWidth: 'lg', style: { marginTop: "70px", marginBottom: "40px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement(_client.ApolloProvider, { client: _apolloClient.client, __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_UsersData2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzbGlzdC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVXNlcnNEYXRhIiwiQ29udGFpbmVyIiwiTmF2YmFyIiwiQXBvbGxvUHJvdmlkZXIiLCJjbGllbnQiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBRW5CLEFBQVU7O0FBQ1YsQUFBUSxBQUFhLEFBRXJCOzs7Ozs7a0JBQWUsWUFBQTt5QkFFYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQyxtQ0FBVSxVQUFYLEFBQW9CLE1BQUssT0FBTyxFQUFDLFdBQUQsQUFBWSxRQUFPLGNBQW5ELEFBQWdDLEFBQWdDO2dCQUFoRTtrQkFBQSxBQUNEO0FBREM7cUJBQ0QsQUFBQyx3Q0FBRCxBQUFnQixBQUFRO2dCQUF4QjtrQkFBQSxBQUNDO0FBREQ7cUJBQ0MsQUFBQzs7Z0JBQUQ7a0JBTlcsQUFFYixBQUVFLEFBQ0QsQUFDQztBQUFBO0FBQUE7QUFOSiIsImZpbGUiOiJ1c2Vyc2xpc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2thc2gvRG9jdW1lbnRzL2Fzc2lnbm1lbnQvbmV4dC1hcG9sbG8tZGVtby9jbGllbnQifQ==