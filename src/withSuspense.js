import React, {Suspense} from 'react';
import {Icon} from 'antd';

function withSuspense(WrappedComponent) {
  return function (props) {
    return (
      <Suspense fallback={<Icon type='loading'/>}>
        <WrappedComponent {...props} />
      </Suspense>
    )
  };
}

export default withSuspense;
