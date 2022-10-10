webpackHotUpdate(6,{

/***/ 1513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = __webpack_require__(100);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _UserCard = __webpack_require__(1514);

var _UserCard2 = _interopRequireDefault(_UserCard);

var _client = __webpack_require__(1475);

var _query = __webpack_require__(1579);

var _system = __webpack_require__(400);

var _material = __webpack_require__(1089);

var _reactInfiniteScrollComponent = __webpack_require__(1580);

var _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/kash/Documents/assignment/next-apollo-demo/client/components/UsersData.js";


function UsersData() {
    var _useLazyQuery = (0, _client.useLazyQuery)(_query.userList),
        _useLazyQuery2 = (0, _slicedToArray3.default)(_useLazyQuery, 2),
        getdata = _useLazyQuery2[0],
        _useLazyQuery2$ = _useLazyQuery2[1],
        error = _useLazyQuery2$.error,
        loading = _useLazyQuery2$.loading,
        data = _useLazyQuery2$.data;

    var _useState = (0, _react.useState)(),
        _useState2 = (0, _slicedToArray3.default)(_useState, 2),
        stateData = _useState2[0],
        setStateData = _useState2[1];

    var _useState3 = (0, _react.useState)(1),
        _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
        disData = _useState4[0],
        setDisData = _useState4[1];

    var _useState5 = (0, _react.useState)(false),
        _useState6 = (0, _slicedToArray3.default)(_useState5, 2),
        loader = _useState6[0],
        setloader = _useState6[1];

    (0, _react.useEffect)(function () {
        getdata().then(function (res) {
            setStateData(res.data.User);
        });
    }, []);

    var fetchMoreData = function fetchMoreData() {
        if (disData <= 200) getdata().then(function (res) {
            setTimeout(function () {
                setStateData(stateData.concat(res.data.User));
                setloader(false);
            }, 1000);
        });

        setDisData(disData + 1);
    };

    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 33
        }
    }, !stateData ? _react2.default.createElement(_material.LinearProgress, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }) : _react2.default.createElement(_reactInfiniteScrollComponent2.default, {
        dataLength: stateData.length
        //   next={fetchMoreData}
        , hasMore: true,
        loader: loader ? _react2.default.createElement(_system.Box, { sx: { display: 'flex' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 44
            }
        }, _react2.default.createElement(_material.CircularProgress, { style: { marginLeft: "48%", marginTop: "10px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        })) : _react2.default.createElement("button", {
            onClick: function onClick() {
                setloader(true);
                fetchMoreData();
            },
            style: {
                width: "100px",
                height: "28px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "45%",
                marginTop: "10px"
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 47
            }
        }, "Load More"), __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, stateData.map(function (e, i) {
        return _react2.default.createElement(_UserCard2.default, { data: e, index: i, key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 62
            }
        });
    })));
}

exports.default = UsersData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnNEYXRhLmpzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlckNhcmQiLCJ1c2VMYXp5UXVlcnkiLCJ1c2VRdWVyeSIsInVzZXJMaXN0IiwiQm94IiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkxpbmVhclByb2dyZXNzIiwiSW5maW5pdGVTY3JvbGwiLCJVc2Vyc0RhdGEiLCJnZXRkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsInN0YXRlRGF0YSIsInNldFN0YXRlRGF0YSIsImRpc0RhdGEiLCJzZXREaXNEYXRhIiwibG9hZGVyIiwic2V0bG9hZGVyIiwidGhlbiIsInJlcyIsIlVzZXIiLCJmZXRjaE1vcmVEYXRhIiwic2V0VGltZW91dCIsImNvbmNhdCIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcCIsImUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFXOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFRLEFBQWM7O0FBQ3RCLEFBQVEsQUFBZTs7QUFDdkIsQUFBUzs7QUFDVCxBQUFVLEFBQWtCOztBQUM1QixBQUFPOzs7Ozs7Ozs7QUFHUCxTQUFBLEFBQVMsWUFBVzt3QkFBQSxBQUNzQixBQUFhO3FFQURuQztRQUFBLEFBQ1QseUJBRFM7eUNBQUE7UUFBQSxBQUNBLHdCQURBLEFBQ0E7UUFEQSxBQUNNLDBCQUROLEFBQ007UUFETixBQUNjLHVCQURkLEFBQ2M7O29CQURkLEFBRWdCOzZEQUZoQjtRQUFBLEFBRVQsdUJBRlM7UUFBQSxBQUVFLDBCQUZGOztxQkFHWSxxQkFIWixBQUdZLEFBQVM7OERBSHJCO1FBQUEsQUFHVCxxQkFIUztRQUFBLEFBR0Esd0JBSEE7O3FCQUlVLHFCQUpWLEFBSVUsQUFBUzs4REFKbkI7UUFBQSxBQUlULG9CQUpTO1FBQUEsQUFJRCx1QkFFZjs7MEJBQVUsWUFBSSxBQUNkO2tCQUFBLEFBQVUsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUFDO3lCQUFhLElBQUEsQUFBSSxLQUFqQixBQUFzQixBQUFNO0FBQW5ELEFBQ0M7QUFGRCxPQUFBLEFBRUUsQUFFRjs7UUFBTSxnQkFBYyxTQUFkLEFBQWMsZ0JBQUksQUFDeEI7WUFBRyxXQUFILEFBQVksZUFDUixBQUFVLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDdEI7dUJBQVcsWUFBTSxBQUNmOzZCQUFhLFVBQUEsQUFBVSxPQUFRLElBQUEsQUFBSSxLQUFuQyxBQUFhLEFBQTJCLEFBQ3hDOzBCQUFBLEFBQVUsQUFDVDtBQUhILGVBQUEsQUFHSyxBQUNSO0FBTEcsQUFPSixTQVBJOzttQkFPTyxVQUFYLEFBQW1CLEFBQ2xCO0FBVkQsQUFZQTs7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFFSztBQUZMO0FBQUEsS0FBQSxHQUVLLEFBQUMsNEJBQ0YsQUFBQzs7c0JBQUQ7d0JBREMsQUFDRDtBQUFBO0FBQUEsS0FBQSxvQkFFQSxBQUFDO29CQUNXLFVBQVUsQUFDdEI7QUFGQTtBQUNBLFVBRUEsU0FIQSxBQUdTLEFBQ1Q7eUNBRUksQUFBQyw2QkFBSSxJQUFJLEVBQUUsU0FBWCxBQUFTLEFBQVc7MEJBQXBCOzRCQUFBLEFBQ0E7QUFEQTtTQUFBLGtCQUNBLEFBQUMsNENBQWlCLE9BQU8sRUFBQyxZQUFELEFBQVksT0FBTyxXQUE1QyxBQUF5QixBQUE2QjswQkFBdEQ7NEJBRkEsQUFDQSxBQUNBO0FBQUE7V0FGQSxtQkFJRSxjQUFBO3FCQUNRLG1CQUFJLEFBQ1Y7MEJBQUEsQUFBVSxBQUNWO0FBQWdCO0FBSGxCLEFBSUY7O3VCQUFPLEFBQ0QsQUFDTjt3QkFGTyxBQUVBLEFBQ1A7aUNBSE8sQUFHUyxBQUNoQjt1QkFKTyxBQUlELEFBQ047NEJBTE8sQUFLSSxBQUNYOzJCQVZFLEFBSUssQUFNRztBQU5ILEFBQ1A7MEJBTEU7NEJBQUE7QUFBQTtBQUNELFNBREMsRUFUTixBQVNNO3NCQVROO3dCQUFBLEFBc0JDO0FBdEJEO0tBQUEsWUFzQkMsQUFBVSxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUcsR0FBSSxBQUNsQjsrQkFDSSxBQUFDLG9DQUFTLE1BQVYsQUFBZ0IsR0FBRyxPQUFuQixBQUEwQixHQUFHLEtBQTdCLEFBQWtDOzBCQUFsQzs0QkFESixBQUNJLEFBRUg7QUFGRztTQUFBO0FBOUJoQixBQUNJLEFBS0ksQUFzQkMsQUFVWjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IlVzZXJzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/kash/Documents/assignment/next-apollo-demo/client/components/UsersData.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/kash/Documents/assignment/next-apollo-demo/client/components/UsersData.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iOGQ3ZTAwZGMyNGZjOGYxM2Q0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2Vyc0RhdGEuanM/NDY4YzE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi9tb2R1bGVzL1VzZXJDYXJkXCJcbmltcG9ydCB7dXNlTGF6eVF1ZXJ5LCB1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQge3VzZXJMaXN0fSBmcm9tICcuL2dyYXBocWwvcXVlcnknXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcbmltcG9ydCB7ICBDaXJjdWxhclByb2dyZXNzLCBMaW5lYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSBcInJlYWN0LWluZmluaXRlLXNjcm9sbC1jb21wb25lbnRcIjtcblxuXG5mdW5jdGlvbiBVc2Vyc0RhdGEoKXtcbiAgICBjb25zdCBbZ2V0ZGF0YSx7ZXJyb3IsbG9hZGluZyxkYXRhfV09IHVzZUxhenlRdWVyeSh1c2VyTGlzdCk7XG4gICAgY29uc3QgW3N0YXRlRGF0YSwgc2V0U3RhdGVEYXRhXT11c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtkaXNEYXRhLCBzZXREaXNEYXRhXT11c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbbG9hZGVyLCBzZXRsb2FkZXJdPXVzZVN0YXRlKGZhbHNlKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICBnZXRkYXRhKCkudGhlbigocmVzKT0+e3NldFN0YXRlRGF0YShyZXMuZGF0YS5Vc2VyKX0pO1xuICAgIH0sW10pXG4gICBcbiAgICBjb25zdCBmZXRjaE1vcmVEYXRhPSgpPT57XG4gICAgaWYoZGlzRGF0YTw9MjAwKSBcbiAgICAgICAgZ2V0ZGF0YSgpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3RhdGVEYXRhKHN0YXRlRGF0YS5jb25jYXQoIHJlcy5kYXRhLlVzZXIpKTtcbiAgICAgICAgICBzZXRsb2FkZXIoZmFsc2UpXG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG4gICBcbiAgICBzZXREaXNEYXRhKGRpc0RhdGErMSlcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHshc3RhdGVEYXRhP1xuICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8SW5maW5pdGVTY3JvbGxcbiAgICAgICAgICAgIGRhdGFMZW5ndGg9e3N0YXRlRGF0YS5sZW5ndGh9XG4gICAgICAgICAgICAvLyAgIG5leHQ9e2ZldGNoTW9yZURhdGF9XG4gICAgICAgICAgICBoYXNNb3JlPXt0cnVlfVxuICAgICAgICAgICAgbG9hZGVyPXtcbiAgICAgICAgICAgICAgICBsb2FkZXI/XG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiNDglXCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PjwvQ2lyY3VsYXJQcm9ncmVzcz4gXG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICA6PGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntcbiAgICAgICAgICAgICAgICAgICAgc2V0bG9hZGVyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICBmZXRjaE1vcmVEYXRhKCl9fSBcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOlwiMTAwcHhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6XCIyOHB4XCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBjb2xvcjpcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDpcIjQ1JVwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDpcIjEwcHhcIlxuICAgICAgICAgICAgICAgIH19PkxvYWQgTW9yZTwvYnV0dG9uPn0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHtzdGF0ZURhdGEubWFwKChlLGkpPT57XG4gICAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgICAgICA8VXNlckNhcmQgZGF0YT17ZX0gaW5kZXg9e2l9IGtleT17aX0+PC9Vc2VyQ2FyZD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNEYXRhXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Vc2Vyc0RhdGEuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFIQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBSkE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQUE7O0FBQUE7QUFFQTtBQUZBO0FBQUE7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQURBO0FBQ0E7QUFLQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUxBO0FBQUE7QUFBQTtBQUNBO0FBVkE7QUFzQkE7QUF0QkE7QUFBQTtBQXdCQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBUUE7QUFFQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==