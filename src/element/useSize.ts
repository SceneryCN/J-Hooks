import React from 'react';

/**
 * 获取浏览器窗口的尺寸，并监听窗口大小变化实时更新尺寸
 * @returns {Object} 包含宽度和高度的对象
 */
function useSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.document.addEventListener('resize', handleResize);
    return () => {
      window.document.removeEventListener('resize', handleResize);
    };
  }, []);
  return size;
}

export default useSize;
