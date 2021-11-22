/*
 * @Author: chen
 * @Date: 2021-11-22 16:45:31
 * @LastEditTime: 2021-11-22 16:45:32
 * @Description:
 */
import React from 'react';
import t from 'prop-types';

import type { AlertProps, KindMap } from './interface';

const prefixCls = 'zo-alert';

const kinds: KindMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
);

Alert.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
};

export default Alert;
