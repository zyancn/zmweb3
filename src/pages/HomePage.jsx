import React from 'react';
import Banner from '../components/Banner';
import LinkCard from '../components/LinkCard';
import '../styles/HomePage.css';

// 示例数据
const featuredLinks = [
  {
    id: 1,
    title: 'Binance 币安交易所',
    description: '全球领先的加密货币交易所，提供多种数字资产交易服务',
    image: '/assets/biance.png',
    link: 'https://www.binance.com/zh-CN/register?ref=YOUR_REF_CODE',
    tags: ['交易所', '热门']
  },
  {
    id: 2,
    title: 'OKX 欧易交易所',
    description: '安全稳定的数字资产交易平台，支持多种加密货币交易',
    image: '/assets/okx.png',
    link: 'https://www.okx.com/join/YOUR_REF_CODE',
    tags: ['交易所', '推荐']
  },
  {
    id: 3,
    title: 'Depay 虚拟信用卡',
    description: '全球领先的加密支付解决方案，支持多种加密货币支付',
    image: '/src/assets/images/depay.svg',
    link: 'https://depay.one/zh-cn/register?inviteCode=YOUR_CODE',
    tags: ['U卡', '热门']
  },
  {
    id: 4,
    title: '区块链入门教程',
    description: '从零开始学习区块链技术，掌握基础概念和应用场景',
    image: '/blockchain-basics.svg',
    link: '/courses',
    tags: ['教程', '热门']
  }
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">热门推荐</h2>
          <div className="featured-links">
            {featuredLinks.map(link => (
              <LinkCard 
                key={link.id}
                title={link.title}
                description={link.description}
                image={link.image}
                link={link.link}
                tags={link.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="why-us-section">
        <div className="container">
          <h2 className="section-title">为什么选择我们</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🔍</div>
              <h3>精选项目</h3>
              <p>我们严格筛选每一个项目，确保只推荐最优质的平台</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💰</div>
              <h3>高额返佣</h3>
              <p>通过我们的立即注册按钮，获得更高的返佣比例</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>安全可靠</h3>
              <p>所有推荐项目均经过严格审核，确保安全可靠</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3>持续更新</h3>
              <p>我们不断更新推广项目，为您提供最新最优的选择</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;