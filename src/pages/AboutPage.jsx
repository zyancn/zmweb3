import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>关于我们</h1>
          <p>了解ZMWeb3的使命和价值观</p>
        </div>
      </div>
      
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>我们的使命</h2>
            <p>ZMWeb3致力于为用户提供最优质的加密货币项目推广链接，帮助用户发现安全可靠的加密货币交易所和支付解决方案。我们严格筛选每一个合作项目，确保只推荐最优质的平台，为用户创造价值。</p>
            
            <h2>我们的价值观</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>诚信透明</h3>
                <p>我们坚持诚信透明的原则，对所有推广项目进行客观评价，不夸大宣传，让用户做出明智的选择。</p>
              </div>
              <div className="value-item">
                <h3>用户至上</h3>
                <p>用户的需求和体验是我们最关注的，我们不断优化网站内容和功能，为用户提供最好的服务。</p>
              </div>
              <div className="value-item">
                <h3>专业严谨</h3>
                <p>我们的团队拥有丰富的加密货币行业经验，对市场有深入的了解，能够为用户提供专业的推荐。</p>
              </div>
              <div className="value-item">
                <h3>持续创新</h3>
                <p>我们不断关注行业动态，持续更新推广项目，为用户提供最新最优的选择。</p>
              </div>
            </div>
            
            <h2>我们的团队</h2>
            <p>ZMWeb3由一群热爱加密货币和区块链技术的专业人士组成，团队成员拥有丰富的行业经验和技术背景。我们致力于推动加密货币的普及和应用，为用户提供优质的服务。</p>
            
            <h2>合作伙伴</h2>
            <p>我们与多家知名加密货币交易所和支付平台建立了合作关系，包括Binance、OKX、Depay等。通过这些合作，我们能够为用户提供更多优惠和福利。</p>
            
            <h2>联系我们</h2>
            <p>如果您有任何问题、建议或合作意向，欢迎通过以下方式联系我们：</p>
            <ul className="contact-info">
              <li>邮箱：contact@zmweb3.com</li>
              <li>微信：ZMWeb3</li>
              <li>Telegram：@ZMWeb3</li>
            </ul>
            <p>我们会在24小时内回复您的咨询。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;