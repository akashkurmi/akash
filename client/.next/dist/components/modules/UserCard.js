'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserCard;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _Box = require('@mui/material/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Card = require('@mui/material/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@mui/material/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@mui/material/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _Button = require('@mui/material/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Typography = require('@mui/material/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _material = require('@mui/material');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _jsxFileName = '/Users/kash/Documents/assignment/next-apollo-demo/client/components/modules/UserCard.js';
// import "./UserCard.css"

var bull = React.createElement(_Box2.default, {
  component: 'span',
  sx: { display: 'inline-block', mx: '2px', transform: 'scale(0.8)' },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  }
});

function UserCard(prop) {
  return React.createElement(_material.Container, { maxWidth: 'sm', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, React.createElement(_Card2.default, { sx: { minWidth: 300 }, variant: 'outlined', __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }, React.createElement(_CardContent2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, React.createElement(_Typography2.default, { variant: 'h6', component: 'div', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, prop.index + 1, '. ', prop.data.name), React.createElement(_Typography2.default, { sx: { mb: 1.5 }, color: 'text.secondary', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, prop.data.email), React.createElement(_Typography2.default, { variant: 'body2', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, prop.data.address, React.createElement('br', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), 'Ph.  ', React.createElement(_link2.default, { href: '#', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, prop.data.phone)))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kdWxlcy9Vc2VyQ2FyZC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkNhcmQiLCJDYXJkQWN0aW9ucyIsIkNhcmRDb250ZW50IiwiQnV0dG9uIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsInVzZVRoZW1lUHJvcHMiLCJMaW5rIiwiYnVsbCIsImRpc3BsYXkiLCJteCIsInRyYW5zZm9ybSIsIlVzZXJDYXJkIiwicHJvcCIsIm1pbldpZHRoIiwiaW5kZXgiLCJkYXRhIiwibmFtZSIsIm1iIiwiZW1haWwiLCJhZGRyZXNzIiwicGhvbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxBQUFPOztJQUFQLEFBQVk7O0FBQ1osQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFXOztBQUNwQixBQUFPOzs7Ozs7Ozs7QUFWUDs7QUFZQSxJQUFNLGFBQ0osQUFBQzthQUFELEFBQ1ksQUFDVjtNQUFJLEVBQUUsU0FBRixBQUFXLGdCQUFnQixJQUEzQixBQUErQixPQUFPLFdBRjVDLEFBRU0sQUFBaUQ7O2NBRnZEO2dCQURGLEFBQ0UsQUFRRjtBQVJFO0FBQ0UsQ0FERjs7QUFRYSxTQUFBLEFBQVMsU0FBVCxBQUFrQixNQUFNLEFBQ3JDO2VBQ0UsQUFBQyxxQ0FBVSxVQUFYLEFBQW9CO2dCQUFwQjtrQkFBQSxBQUVBO0FBRkE7R0FBQSxRQUVBLEFBQUMsZ0NBQUssSUFBSSxFQUFFLFVBQVosQUFBVSxBQUFZLE9BQU8sU0FBN0IsQUFBcUM7Z0JBQXJDO2tCQUFBLEFBQ0U7QUFERjtXQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBRUU7QUFGRjtBQUFBLFdBRUUsQUFBQyxzQ0FBVyxTQUFaLEFBQW9CLE1BQUssV0FBekIsQUFBbUM7Z0JBQW5DO2tCQUFBLEFBQ0M7QUFERDtVQUNDLEFBQUssUUFETixBQUNZLEdBQUssV0FBQSxBQUFLLEtBSHhCLEFBRUUsQUFDMkIsQUFFM0IsYUFBQSxBQUFDLHNDQUFXLElBQUksRUFBRSxJQUFsQixBQUFnQixBQUFNLE9BQU8sT0FBN0IsQUFBbUM7Z0JBQW5DO2tCQUFBLEFBQ0M7QUFERDtVQUNDLEFBQUssS0FOUixBQUtFLEFBQ1csQUFFWCxjQUFBLEFBQUMsc0NBQVcsU0FBWixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDTTtBQUROO1VBQ00sQUFBSyxLQURYLEFBQ2dCLEFBQ2Q7O2dCQUFBO2tCQUZGLEFBRUU7QUFBQTtBQUFBLE1BQ00sZUFBQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUFnQjtBQUFoQjtVQUFnQixBQUFLLEtBZm5DLEFBQ0UsQUFFQSxBQUNFLEFBUUUsQUFHUSxBQUEwQixBQU96QyIsImZpbGUiOiJVc2VyQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9