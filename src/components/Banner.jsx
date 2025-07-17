import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <h1>发现优质项目推广链接与教程</h1>
          <p>我们精选了市场上最优质的交易所、U卡项目和Web3教程，为您提供高质量的推广链接和学习资料</p>
          <div className="banner-buttons">
            <Link to="/exchanges" className="btn btn-primary">交易所推广</Link>
            <Link to="/ucards" className="btn btn-secondary">U卡推广</Link>
            <Link to="/courses" className="btn btn-primary">教程资料</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;