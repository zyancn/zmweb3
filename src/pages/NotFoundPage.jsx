import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
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