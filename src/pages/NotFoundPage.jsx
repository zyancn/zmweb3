import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = '页面未找到 - ZMWeb3';
  }, []);
  
  return (
    <div className="not-found-page">
      <ScrollToTopOnMount />
      <div className="container">
        <div className="not-found-content">
          <h1>404</h1>
          <h2>页面未找到</h2>
          <p>抱歉，您访问的页面不存在或已被移除。</p>
          <Link to="/" className="btn btn-primary">返回首页</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;