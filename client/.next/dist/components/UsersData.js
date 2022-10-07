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
    var _useQuery = (0, _client.useQuery)(_query.userList),
        error = _useQuery.error,
        loading = _useQuery.loading,
        data = _useQuery.data;

    var _useState = (0, _react.useState)(),
        _useState2 = (0, _slicedToArray3.default)(_useState, 2),
        stateData = _useState2[0],
        setStateData = _useState2[1];

    var _useState3 = (0, _react.useState)(1),
        _useState4 = (0, _slicedToArray3.default)(_useState3, 2),
        disData = _useState4[0],
        setDisData = _useState4[1];

    (0, _react.useEffect)(function () {
        console.log(data, error);
        if (data) setStateData(data.User.slice(0, 20));
    }, [data, error]);

    var fetchMoreData = function fetchMoreData() {
        var start = 20 * disData;
        var end = 20 * disData + 20;
        setStateData(stateData.concat(data.User.slice(start, end)));
        setDisData(disData + 1);
    };

    return _react2.default.createElement("div", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, !stateData ? _react2.default.createElement(_material.LinearProgress, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }) : _react2.default.createElement(_reactInfiniteScrollComponent2.default, {
        dataLength: stateData.length
        //   next={fetchMoreData}
        , hasMore: true,
        loader: _react2.default.createElement("button", { onClick: fetchMoreData,
            style: {
                width: "100px",
                height: "28px",
                backgroundColor: "black",
                color: "white",
                marginLeft: "45%",
                marginTop: "10px"
            }, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
            }
        }, "Load More"), __source: {
            fileName: _jsxFileName,
            lineNumber: 34
        }
    }, stateData.map(function (e, i) {
        return _react2.default.createElement(_UserCard2.default, { data: e, index: i, key: i, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
            }
        });
    })));
}

exports.default = UsersData;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVXNlcnNEYXRhLmpzIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiVXNlckNhcmQiLCJ1c2VRdWVyeSIsInVzZXJMaXN0IiwiQm94IiwiTGluZWFyUHJvZ3Jlc3MiLCJJbmZpbml0ZVNjcm9sbCIsIlVzZXJzRGF0YSIsImVycm9yIiwibG9hZGluZyIsImRhdGEiLCJzdGF0ZURhdGEiLCJzZXRTdGF0ZURhdGEiLCJkaXNEYXRhIiwic2V0RGlzRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJVc2VyIiwic2xpY2UiLCJmZXRjaE1vcmVEYXRhIiwic3RhcnQiLCJlbmQiLCJjb25jYXQiLCJsZW5ndGgiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIm1hcCIsImUiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBUyxBQUFXOzs7O0FBQ3BCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFROztBQUNSLEFBQVEsQUFBZTs7QUFDdkIsQUFBUzs7QUFDVCxBQUFVOztBQUNWLEFBQU87Ozs7Ozs7OztBQUdQLFNBQUEsQUFBUyxZQUFXO29CQUFBLEFBQ1UsQUFBUztRQURuQixBQUNYLGtCQURXLEFBQ1g7UUFEVyxBQUNMLG9CQURLLEFBQ0w7UUFESyxBQUNHLGlCQURILEFBQ0c7O29CQURILEFBRWdCOzZEQUZoQjtRQUFBLEFBRVQsdUJBRlM7UUFBQSxBQUVFLDBCQUZGOztxQkFHWSxxQkFIWixBQUdZLEFBQVM7OERBSHJCO1FBQUEsQUFHVCxxQkFIUztRQUFBLEFBR0Esd0JBRWhCOzswQkFBVSxZQUFJLEFBQ1Y7Z0JBQUEsQUFBUSxJQUFSLEFBQVksTUFBWixBQUFpQixBQUNqQjtZQUFBLEFBQUcsTUFDSCxhQUFhLEtBQUEsQUFBSyxLQUFMLEFBQVUsTUFBVixBQUFnQixHQUE3QixBQUFhLEFBQWtCLEFBQ2xDO0FBSkQsT0FJRSxDQUFBLEFBQUMsTUFKSCxBQUlFLEFBQU0sQUFFUjs7UUFBTSxnQkFBYyxTQUFkLEFBQWMsZ0JBQUksQUFDcEI7WUFBSSxRQUFNLEtBQVYsQUFBYSxBQUNiO1lBQUksTUFBSSxLQUFBLEFBQUcsVUFBWCxBQUFtQixBQUNuQjtxQkFBYSxVQUFBLEFBQVUsT0FBTyxLQUFBLEFBQUssS0FBTCxBQUFVLE1BQVYsQUFBZ0IsT0FBOUMsQUFBYSxBQUFpQixBQUFzQixBQUNwRDttQkFBVyxVQUFYLEFBQW1CLEFBQ3RCO0FBTEQsQUFPQTs7MkJBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFFSztBQUZMO0FBQUEsS0FBQSxHQUVLLEFBQUMsNEJBQ0YsQUFBQzs7c0JBQUQ7d0JBREMsQUFDRDtBQUFBO0FBQUEsS0FBQSxvQkFFQSxBQUFDO29CQUNTLFVBQVUsQUFDeEI7QUFGSTtBQUNGLFVBRUEsU0FIRSxBQUdPLEFBQ1Q7Z0NBQVEsY0FBQSxZQUFRLFNBQVIsQUFBaUIsQUFDekI7O3VCQUFPLEFBQ0MsQUFDTjt3QkFGSyxBQUVFLEFBQ1A7aUNBSEssQUFHVyxBQUNoQjt1QkFKSyxBQUlDLEFBQ047NEJBTEssQUFLTSxBQUNYOzJCQVBNLEFBQ0QsQUFNSztBQU5MLEFBQ0w7MEJBRk07NEJBQUE7QUFBQTtTQUFBLEVBSk4sQUFJTTtzQkFKTjt3QkFBQSxBQWNDO0FBZEQ7S0FBQSxZQWNDLEFBQVUsSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFHLEdBQUksQUFDbEI7K0JBQ0ksQUFBQyxvQ0FBUyxNQUFWLEFBQWdCLEdBQUcsT0FBbkIsQUFBMEIsR0FBRyxLQUE3QixBQUFrQzswQkFBbEM7NEJBREosQUFDSSxBQUVIO0FBRkc7U0FBQTtBQXRCaEIsQUFDSSxBQUtJLEFBY0MsQUFVWjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IlVzZXJzRGF0YS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2FzaC9Eb2N1bWVudHMvYXNzaWdubWVudC9uZXh0LWFwb2xsby1kZW1vL2NsaWVudCJ9