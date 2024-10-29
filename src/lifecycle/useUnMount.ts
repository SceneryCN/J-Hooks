import { useEffect } from 'react';
import type { UseUnMountType } from './types';
/**
 * 当组件挂载时执行回调函数
 * @param callback 回调函数，组件卸载时执行
 */
const useUnMount: UseUnMountType = (callback) => {
  useEffect(() => {
    return () => {
      callback();
    };
  });
};

export default useUnMount;
