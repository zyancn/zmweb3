import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 组件，用于在组件挂载时将页面滚动到顶部
 * 可以直接添加到每个页面组件中
 */
const ScrollToTopOnMount = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // 使用更明确的滚动方法
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // 使用 'auto' 而不是 'smooth' 以确保立即滚动
    });
    console.log('ScrollToTopOnMount: Scrolled to top for path:', pathname);
  }, [pathname]);

  return null; // 这个组件不渲染任何内容
};

export default ScrollToTopOnMount;