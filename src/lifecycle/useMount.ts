import React from 'react';
import type { UseMountType } from './types';
/**
 * 当组件挂载时执行回调函数
 * @param callback 回调函数，组件挂载时执行
 */
const useMount: UseMountType = (callback) => {
  // 创建一个ref对象来跟踪组件是否已挂载
  const isMounted = React.useRef(false);

  // 使用useEffect来在组件挂载时执行回调
  React.useEffect(() => {
    // 检查组件是否已挂载
    if (!isMounted.current) {
      // 如果未挂载，则执行传入的回调
      callback();
      // 更新ref的值以表示组件已挂载
      isMounted.current = true;
    }
  }, []); // 依赖项为空数组，确保只在组件挂载时执行
};

export default useMount;
