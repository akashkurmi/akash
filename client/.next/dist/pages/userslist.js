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

var _client = require('@apollo/client');

var _system = require('@mui/system');

var _navbar = require('../components/navbar');

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kash/Documents/assignment/next-apollo-demo/client/pages/userslist.js?entry';

// import { ApolloClient } from 'apollo-client';

// import Alert from 'react-bootstrap/Alert';
var client = new _client.ApolloClient({
  uri: 'http://localhost:4047/graphql',
  cache: new _client.InMemoryCache()
});

exports.default = function () {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_navbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }), _react2.default.createElement(_system.Container, { maxWidth: 'lg', style: { marginTop: "70px", marginBottom: "40px" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement(_client.ApolloProvider, { client: client, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_UsersData2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3VzZXJzbGlzdC5qcyJdLCJuYW1lcyI6WyJMaW5rIiwiVXNlcnNEYXRhIiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiZ3FsIiwiQ29udGFpbmVyIiwiTmF2YmFyIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBZSxBQUFlLEFBQWM7O0FBQ3JELEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7Ozs7OztBQUNuQjs7QUFFQTtBQUNBLElBQU07T0FBMEIsQUFDekIsQUFDTDtTQUZGLEFBQWUsQUFBaUIsQUFFdkIsQUFBSSxBQUViO0FBSmdDLEFBQzlCLENBRGEsQUFBSTs7a0JBSUosWUFBQTt5QkFFYixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsQUFBQyxtQ0FBVSxVQUFYLEFBQW9CLE1BQUssT0FBTyxFQUFDLFdBQUQsQUFBWSxRQUFPLGNBQW5ELEFBQWdDLEFBQWdDO2dCQUFoRTtrQkFBQSxBQUNEO0FBREM7cUJBQ0QsQUFBQyx3Q0FBZSxRQUFoQixBQUF3QjtnQkFBeEI7a0JBQUEsQUFDQztBQUREO3FCQUNDLEFBQUM7O2dCQUFEO2tCQU5XLEFBRWIsQUFFRSxBQUNELEFBQ0M7QUFBQTtBQUFBO0FBTkoiLCJmaWxlIjoidXNlcnNsaXN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rYXNoL0RvY3VtZW50cy9hc3NpZ25tZW50L25leHQtYXBvbGxvLWRlbW8vY2xpZW50In0=