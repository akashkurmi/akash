'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DenseAppBar;

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _AppBar = require('@mui/material/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Box = require('@mui/material/Box');

var _Box2 = _interopRequireDefault(_Box);

var _Toolbar = require('@mui/material/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@mui/material/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('@mui/material/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _material = require('@mui/material');

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var _jsxFileName = '/Users/kash/Documents/assignment/next-apollo-demo/client/components/navbar.js';

// import Link from '@mui/material/Link';

// import MenuIcon from '@mui/icons-material/Menu';

function DenseAppBar() {
  return React.createElement(_Box2.default, { sx: { flexGrow: 1 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, React.createElement(_AppBar2.default, { position: 'fixed', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, React.createElement(_Toolbar2.default, { variant: 'dense', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, React.createElement(_IconButton2.default, { edge: 'start', color: 'inherit', 'aria-label': 'menu', sx: { mr: 2 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }), React.createElement(_Typography2.default, { variant: 'h6', color: 'inherit', component: 'div', __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), React.createElement(_material.MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, React.createElement(_Typography2.default, { variant: 'h6', color: 'inherit', component: 'div', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, React.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, React.createElement('span', { style: { textDecoration: "none", color: "white" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Home')))))));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJJY29uQnV0dG9uIiwiTWVudUl0ZW0iLCJMaW5rIiwiRGVuc2VBcHBCYXIiLCJmbGV4R3JvdyIsIm1yIiwidGV4dERlY29yYXRpb24iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBTzs7Ozs7Ozs7OztBQUNQOztBQUVBLEFBRUE7O0FBQWUsU0FBQSxBQUFTLGNBQWMsQUFDcEM7ZUFDRSxBQUFDLCtCQUFJLElBQUksRUFBRSxVQUFYLEFBQVMsQUFBWTtnQkFBckI7a0JBQUEsQUFDRTtBQURGO0dBQUEsUUFDRSxBQUFDLGtDQUFPLFVBQVIsQUFBaUI7Z0JBQWpCO2tCQUFBLEFBQ0U7QUFERjtXQUNFLEFBQUMsbUNBQVEsU0FBVCxBQUFpQjtnQkFBakI7a0JBQUEsQUFDRTtBQURGO1dBQ0UsQUFBQyxzQ0FBVyxNQUFaLEFBQWlCLFNBQVEsT0FBekIsQUFBK0IsV0FBVSxjQUF6QyxBQUFvRCxRQUFPLElBQUksRUFBRSxJQUFqRSxBQUErRCxBQUFNO2dCQUFyRTtrQkFERixBQUNFLEFBRUE7QUFGQTtZQUVBLEFBQUMsc0NBQVcsU0FBWixBQUFvQixNQUFLLE9BQXpCLEFBQStCLFdBQVUsV0FBekMsQUFBbUQ7Z0JBQW5EO2tCQUhGLEFBR0UsQUFHQTtBQUhBO1lBR0EsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDQTtBQURBO0FBQUEsV0FDQSxBQUFDLHNDQUFXLFNBQVosQUFBb0IsTUFBSyxPQUF6QixBQUErQixXQUFVLFdBQXpDLEFBQW1EO2dCQUFuRDtrQkFBQSxBQUNBO0FBREE7V0FDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztnQkFBWDtrQkFBQSxBQUFlO0FBQWY7V0FBZSxjQUFBLFVBQU0sT0FBTyxFQUFDLGdCQUFELEFBQWdCLFFBQU8sT0FBcEMsQUFBYSxBQUE2QjtnQkFBMUM7a0JBQUE7QUFBQTtLQVh2QixBQUNFLEFBQ0UsQUFDRSxBQU1FLEFBQ0EsQUFDQSxBQUFlLEFBU3hCIiwiZmlsZSI6Im5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9