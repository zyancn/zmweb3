import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
import AirdropPanel from '../components/AirdropPanel';
import AlphaPanel from '../components/AlphaPanel';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

// 导入U卡图片
import mastercardCard from '../assets/card/mastercard.svg';

// 交易所数据
const exchangeData = [
  {
    id: 1,
    title: 'Binance 币安交易所',
    description: '全球领先的加密货币交易所，提供多种数字资产交易服务',
    image: '/assets/biance.png',
    link: 'https://www.binance.com/zh-CN/register?ref=YOUR_REF_CODE',
    features: ['全球最大交易量', '丰富的币种选择', '安全可靠', '多样化的产品']
  },
  {
    id: 2,
    title: 'OKX 欧易交易所',
    description: '安全稳定的数字资产交易平台，支持多种加密货币交易',
    image: '/assets/okx.png',
    link: 'https://www.okx.com/join/YOUR_REF_CODE',
    features: ['用户体验优秀', '多元化产品', '安全防护', '全球化服务']
  }
];

// U卡数据
const ucardData = [
  {
    id: 1,
    title: 'Bybit 虚拟信用卡',
    description: '全球知名交易所推出的虚拟信用卡，支持多种加密货币支付',
    image: mastercardCard,
    link: 'https://www.bybit.com/zh-CN/register?affiliate_id=YOUR_CODE',
    features: ['无KYC', '全球支付', '多币种支持', '安全便捷']
  }
];

// 课程数据
const courseData = [
  {
    id: 1,
    title: '区块链入门教程',
    description: '从零开始学习区块链技术，掌握基础概念和应用场景',
    image: '/assets/blockchain-basics.svg',
    link: '/courses',
  }
];

// 特性卡片组件
const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// 项目展示卡片组件
const ProjectCard = ({ title, description, image, link, features }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className="feature-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <a href={link} className="register-button" target="_blank" rel="noopener noreferrer">
        立即注册
      </a>
    </div>
  </div>
);

const HomePage = () => {
  // 选择要在首页展示的重点空投币种
  const [featuredAirdrops] = useState(['OP', 'APT', 'GAL', 'HFT', 'COW']);
  
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = 'ZMWeb3 - 您的加密世界导航';
  }, []);
  
  return (
    <div className="home-page">
      <ScrollToTopOnMount />
      {/* 英雄区域 */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>ZMWeb3 - 您的加密世界导航</h1>
          <p>发现优质的加密货币交易所、虚拟信用卡和区块链教程，开启您的Web3之旅</p>
          <div className="hero-buttons">
            <Link to="/exchanges" className="primary-button">浏览交易所</Link>
            <Link to="/ucards" className="secondary-button">查看U卡</Link>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/hero-image.svg" alt="Web3 世界" />
        </div>
      </section>
      
      {/* 空投展示区域 - 突出显示 */}
      <section className="airdrop-showcase-section">
        <div className="container">
          <h2 className="section-title">我的空投战绩</h2>
          <div className="airdrop-featured-wrapper">
            <AirdropPanel featuredOnly={true} featuredTokens={featuredAirdrops} />
            <div className="airdrop-cta">
              <h3>想了解更多空投战绩？</h3>
              <p>查看我的完整空投收获记录和获取技巧</p>
              <Link to="/airdrops" className="airdrop-more-button">查看全部空投</Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* 我们的优势 */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">我们的优势</h2>
          <div className="features-grid">
            <FeatureCard 
              icon="🔍" 
              title="精选项目" 
              description="我们严格筛选每一个项目，确保只推荐最优质的平台" 
            />
            <FeatureCard 
              icon="💰" 
              title="高额返佣" 
              description="通过我们的立即注册按钮，获得更高的返佣比例" 
            />
            <FeatureCard 
              icon="🛡️" 
              title="安全可靠" 
              description="所有推荐项目均经过严格审核，确保安全可靠" 
            />
            <FeatureCard 
              icon="🚀" 
              title="持续更新" 
              description="我们不断更新推广项目，为您提供最新最优的选择" 
            />
          </div>
        </div>
      </section>
      
      {/* 推荐服务 - 紧凑布局 */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">推荐服务</h2>
          
          {/* 推荐服务合并展示 */}
          <div className="service-category">
            <div className="compact-grid">
              {/* 交易所 */}
              {exchangeData.map(exchange => (
                <div key={`exchange-${exchange.id}`} className="compact-card">
                  <div className="compact-image-container">
                    <img 
                      src={exchange.image} 
                      alt={exchange.title} 
                      className="compact-image" 
                    />
                  </div>
                  <div className="compact-content">
                    <h4>{exchange.title}</h4>
                    <a href={exchange.link} className="compact-button" target="_blank" rel="noopener noreferrer">
                      立即注册
                    </a>
                  </div>
                </div>
              ))}
              
              {/* U卡 */}
              {ucardData.map(ucard => (
                <div key={`ucard-${ucard.id}`} className="compact-card">
                  <div className="compact-image-container">
                    <img src={ucard.image} alt={ucard.title} className="compact-image" />
                  </div>
                  <div className="compact-content">
                    <h4>{ucard.title}</h4>
                    <a href={ucard.link} className="compact-button" target="_blank" rel="noopener noreferrer">
                      立即注册
                    </a>
                  </div>
                </div>
              ))}
              
              {/* 区块链教程 */}
              {courseData.map(course => (
                <div key={`course-${course.id}`} className="compact-card">
                  <div className="compact-image-container">
                    <img src={course.image} alt={course.title} className="compact-image" />
                  </div>
                  <div className="compact-content">
                    <h4>{course.title}</h4>
                    <Link to={course.link} className="compact-button">查看详情</Link>
                  </div>
                </div>
              ))}
              
              {/* 查看全部链接 */}
              <div className="view-all-links">
                <Link to="/exchanges" className="view-all-link">交易所 →</Link>
                <Link to="/ucards" className="view-all-link">虚拟信用卡 →</Link>
                <Link to="/courses" className="view-all-link">区块链教程 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 用户见证 */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">用户见证</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"通过ZMWeb3注册币安后，我获得了比普通注册更高的返佣比例，平台推荐的项目也都非常靠谱。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>李先生</h4>
                  <p>加密货币投资者</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"ZMWeb3提供的区块链教程对我入门帮助很大，内容通俗易懂，推荐给所有想了解区块链的朋友。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>张女士</h4>
                  <p>区块链爱好者</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"通过这个平台申请的Depay虚拟信用卡非常好用，全球支付无障碍，客服响应也很及时。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>王先生</h4>
                  <p>数字游民</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 行动召唤 */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>准备好开始您的Web3之旅了吗？</h2>
            <p>立即注册我们推荐的优质平台，享受高额返佣和优质服务</p>
            <Link to="/exchanges" className="cta-button">立即开始</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;