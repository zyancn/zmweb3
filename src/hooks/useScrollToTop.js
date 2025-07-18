import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 自定义钩子，用于在路由变化时将页面滚动到顶部
 */
const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // 使用setTimeout确保DOM已经完全渲染
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      console.log('Scrolled to top after navigation to:', pathname);
    }, 0);
  }, [pathname]);
};

export default useScrollToTop;