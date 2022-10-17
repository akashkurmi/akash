"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _UserCard = require("./modules/UserCard");

var _UserCard2 = _interopRequireDefault(_UserCard);

var _client = require("@apollo/client");

var _query = require("./graphql/query");

var _system = require("@mui/system");

var _material = require("@mui/material");

var _reactInfiniteScrollComponent = require("react-infinite-scroll-component");

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
        }).catch(function () {
            console.log(res);
        });
        console.log(error);
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
            lineNumber: 34
        }
    }, !stateData ? _react2.default.createElement(_material.LinearProgress, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }) : _react2.default.createElement(_reactInfiniteScrollComponent2.default, {
        dataLength: stateData.length
        //   next={fetchMoreData}
        , hasMore: true,
        loader: loader ? _react2.default.createElement(_system.Box, { sx: { display: 'flex' }, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
            }
        }, _react2.default.createElement(_material.CircularProgress, { style: { marginLeft: "48%", marginTop: "10px" }, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
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
                lineNumber: 48
            }
        }, "Load More"), __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, stateData.map(function (e, i) {
        return _react2.default.createElement(_UserCard2.default, { data: e, index: i, key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 63
            }
        });
    })));
}

exports.default = UsersData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnNEYXRhLmpzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlckNhcmQiLCJ1c2VMYXp5UXVlcnkiLCJ1c2VRdWVyeSIsInVzZXJMaXN0IiwiQm94IiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkxpbmVhclByb2dyZXNzIiwiSW5maW5pdGVTY3JvbGwiLCJVc2Vyc0RhdGEiLCJnZXRkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwiZGF0YSIsInN0YXRlRGF0YSIsInNldFN0YXRlRGF0YSIsImRpc0RhdGEiLCJzZXREaXNEYXRhIiwibG9hZGVyIiwic2V0bG9hZGVyIiwidGhlbiIsInJlcyIsIlVzZXIiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaE1vcmVEYXRhIiwic2V0VGltZW91dCIsImNvbmNhdCIsImxlbmd0aCIsImRpc3BsYXkiLCJtYXJnaW5MZWZ0IiwibWFyZ2luVG9wIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcCIsImUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFXOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFRLEFBQWM7O0FBQ3RCLEFBQVEsQUFBZTs7QUFDdkIsQUFBUzs7QUFDVCxBQUFVLEFBQWtCOztBQUM1QixBQUFPOzs7Ozs7Ozs7QUFHUCxTQUFBLEFBQVMsWUFBVzt3QkFBQSxBQUNzQixBQUFhO3FFQURuQztRQUFBLEFBQ1QseUJBRFM7eUNBQUE7UUFBQSxBQUNBLHdCQURBLEFBQ0E7UUFEQSxBQUNNLDBCQUROLEFBQ007UUFETixBQUNjLHVCQURkLEFBQ2M7O29CQURkLEFBRWdCOzZEQUZoQjtRQUFBLEFBRVQsdUJBRlM7UUFBQSxBQUVFLDBCQUZGOztxQkFHWSxxQkFIWixBQUdZLEFBQVM7OERBSHJCO1FBQUEsQUFHVCxxQkFIUztRQUFBLEFBR0Esd0JBSEE7O3FCQUlVLHFCQUpWLEFBSVUsQUFBUzs4REFKbkI7UUFBQSxBQUlULG9CQUpTO1FBQUEsQUFJRCx1QkFFZjs7MEJBQVUsWUFBSSxBQUNkO2tCQUFBLEFBQVUsS0FBSyxVQUFBLEFBQUMsS0FBTSxBQUFDO3lCQUFhLElBQUEsQUFBSSxLQUFqQixBQUFzQixBQUFNO0FBQW5ELFdBQUEsQUFBcUQsTUFBTSxZQUFJLEFBQUM7b0JBQUEsQUFBUSxJQUFSLEFBQVksQUFBSztBQUFqRixBQUNBO2dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1g7QUFIRCxPQUFBLEFBR0UsQUFFRjs7UUFBTSxnQkFBYyxTQUFkLEFBQWMsZ0JBQUksQUFDeEI7WUFBRyxXQUFILEFBQVksZUFDUixBQUFVLEtBQUssVUFBQSxBQUFDLEtBQU0sQUFDdEI7dUJBQVcsWUFBTSxBQUNmOzZCQUFhLFVBQUEsQUFBVSxPQUFRLElBQUEsQUFBSSxLQUFuQyxBQUFhLEFBQTJCLEFBQ3hDOzBCQUFBLEFBQVUsQUFDVDtBQUhILGVBQUEsQUFHSyxBQUNSO0FBTEcsQUFPSixTQVBJOzttQkFPTyxVQUFYLEFBQW1CLEFBQ2xCO0FBVkQsQUFZQTs7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFFSztBQUZMO0FBQUEsS0FBQSxHQUVLLEFBQUMsNEJBQ0YsQUFBQzs7c0JBQUQ7d0JBREMsQUFDRDtBQUFBO0FBQUEsS0FBQSxvQkFFQSxBQUFDO29CQUNXLFVBQVUsQUFDdEI7QUFGQTtBQUNBLFVBRUEsU0FIQSxBQUdTLEFBQ1Q7eUNBRUksQUFBQyw2QkFBSSxJQUFJLEVBQUUsU0FBWCxBQUFTLEFBQVc7MEJBQXBCOzRCQUFBLEFBQ0E7QUFEQTtTQUFBLGtCQUNBLEFBQUMsNENBQWlCLE9BQU8sRUFBQyxZQUFELEFBQVksT0FBTyxXQUE1QyxBQUF5QixBQUE2QjswQkFBdEQ7NEJBRkEsQUFDQSxBQUNBO0FBQUE7V0FGQSxtQkFJRSxjQUFBO3FCQUNRLG1CQUFJLEFBQ1Y7MEJBQUEsQUFBVSxBQUNWO0FBQWdCO0FBSGxCLEFBSUY7O3VCQUFPLEFBQ0QsQUFDTjt3QkFGTyxBQUVBLEFBQ1A7aUNBSE8sQUFHUyxBQUNoQjt1QkFKTyxBQUlELEFBQ047NEJBTE8sQUFLSSxBQUNYOzJCQVZFLEFBSUssQUFNRztBQU5ILEFBQ1A7MEJBTEU7NEJBQUE7QUFBQTtBQUNELFNBREMsRUFUTixBQVNNO3NCQVROO3dCQUFBLEFBc0JDO0FBdEJEO0tBQUEsWUFzQkMsQUFBVSxJQUFJLFVBQUEsQUFBQyxHQUFELEFBQUcsR0FBSSxBQUNsQjsrQkFDSSxBQUFDLG9DQUFTLE1BQVYsQUFBZ0IsR0FBRyxPQUFuQixBQUEwQixHQUFHLEtBQTdCLEFBQWtDOzBCQUFsQzs0QkFESixBQUNJLEFBRUg7QUFGRztTQUFBO0FBOUJoQixBQUNJLEFBS0ksQUFzQkMsQUFVWjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IlVzZXJzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9