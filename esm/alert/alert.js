import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "kind"];

/*
 * @Author: chen
 * @Date: 2021-11-22 16:45:31
 * @LastEditTime: 2021-11-22 16:45:32
 * @Description:
 */
import React from 'react';
import t from 'prop-types';
var prefixCls = 'zo-alert';
var kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502'
};

var Alert = function Alert(_ref) {
  var children = _ref.children,
      _ref$kind = _ref.kind,
      kind = _ref$kind === void 0 ? 'info' : _ref$kind,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: prefixCls,
    style: {
      background: kinds[kind]
    }
  }, rest), children);
};

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning'])
};
export default Alert;