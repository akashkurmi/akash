'use strict';

Object.defineProperty(exports, "__esModule", {
     value: true
});
exports.client = undefined;

var _crossFetch = require('cross-fetch');

var _crossFetch2 = _interopRequireDefault(_crossFetch);

var _client = require('@apollo/client');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = exports.client = new _client.ApolloClient({
     link: new _client.HttpLink({ uri: 'http://localhost:4047/graphql', fetch: _crossFetch2.default }),
     cache: new _client.InMemoryCache()
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9hcG9sbG8tY2xpZW50LmpzIl0sIm5hbWVzIjpbImZldGNoIiwiSW5NZW1vcnlDYWNoZSIsIkFwb2xsb1Byb3ZpZGVyIiwiQXBvbGxvQ2xpZW50IiwiZ3FsIiwiSHR0cExpbmsiLCJjbGllbnQiLCJsaW5rIiwidXJpIiwiY2FjaGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFDSyxBQUNELEFBQ0EsQUFDQyxBQUNBLEFBR0w7Ozs7QUFBTyxJQUFNO1dBQ0gsQUFBSSxxQkFBUyxFQUFFLEtBQUYsQUFBTyxpQ0FEUyxBQUM3QixBQUFhLEFBQXVDLEFBQzFEO1lBRkcsQUFBZSxBQUFpQixBQUU1QixBQUFJO0FBRndCLEFBQ25DLENBRGtCLEFBQUkiLCJmaWxlIjoiYXBvbGxvLWNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9