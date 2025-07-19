import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/LifetimeServicePage.css';

// 导入图标和图片
import techServiceIcon from '../assets/courses/tech-service.svg';

const LifetimeServicePage = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  
  // 页面加载时滚动到顶部并设置页面标题
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = '终身技术服务 - ZMWeb3';
  }, []);

  // 处理购买点击
  const handleBuyClick = () => {
    // 重定向到课程页面的终身技术服务
    window.location.href = '/#/courses';
  };

  return (
    <div className="lifetime-service-page">
      <ScrollToTopOnMount />
      
      {/* 英雄区域 */}
      <section className="service-hero-section">
        <div className="service-hero-content">
          <h1>Web3 终身技术服务</h1>
          <p>您的Web3世界专属顾问，为您提供全方位的技术支持与安全保障</p>
          <button className="primary-button" onClick={handleBuyClick}>立即购买</button>
        </div>
        <div className="service-hero-image">
          <img src={techServiceIcon} alt="终身技术服务" />
        </div>
      </section>

      {/* 服务概述 */}
      <section className="service-overview-section">
        <div className="container">
          <h2 className="section-title">服务核心内容</h2>
          <div className="service-overview-grid">
            <div className="service-overview-card">
              <div className="service-icon">🧭</div>
              <h3>Web3 世界探索领航</h3>
              <p>根据您的兴趣，为您量身定制Web3探索路径，避免在信息海洋中迷失方向</p>
            </div>
            <div className="service-overview-card">
              <div className="service-icon">🔐</div>
              <h3>钱包安全使用精通</h3>
              <p>从零开始建立您的钱包安全体系，掌握银行级的安全使用习惯</p>
            </div>
            <div className="service-overview-card">
              <div className="service-icon">🛡️</div>
              <h3>资金安全与被骗寻回</h3>
              <p>提供全面的防骗指导，以及不幸遭遇资金被盗时的应急救援方案</p>
            </div>
          </div>
        </div>
      </section>

      {/* 详细服务内容 */}
      <section className="service-details-section">
        <div className="container">
          <div className="service-details-card">
            <div className="service-details-header">
              <div className="service-details-icon">🧭</div>
              <h2>Web3 世界探索领航</h2>
              <p className="service-subtitle">Web3 Exploration Guidance</p>
            </div>
            <div className="service-details-content">
              <div className="service-feature">
                <h3>个性化路径规划</h3>
                <p>根据您的兴趣（如 DeFi, NFT, GameFi, SocialFi），为您规划最合适的探索路径和学习资源，避免您在海量信息中迷失方向。</p>
              </div>
              <div className="service-feature">
                <h3>项目"安全初筛"</h3>
                <p>在您尝试新项目前，我们可以基于经验和公开信息，为您分析其潜在风险（例如合约是否开源、社区反馈、团队背景等），提供操作前的安全建议。</p>
              </div>
              <div className="service-feature">
                <h3>互动操作指导</h3>
                <p>对于热门、主流的 DApp 交互（如 Uniswap, OpenSea, Aave 等），提供关键步骤的操作演示与安全提示，帮您迈出安全交互的第一步。</p>
              </div>
            </div>
          </div>

          <div className="service-details-card">
            <div className="service-details-header">
              <div className="service-details-icon">🔐</div>
              <h2>钱包安全使用精通</h2>
              <p className="service-subtitle">Wallet Security & Usage Mastery</p>
            </div>
            <div className="service-details-content">
              <div className="service-feature">
                <h3>从零到一，建立安全体系</h3>
                <p>指导您正确创建、备份钱包（助记词、私钥的物理备份与隔离），并建立起属于您自己的、银行级的钱包安全使用习惯。</p>
              </div>
              <div className="service-feature">
                <h3>操作陪同与答疑</h3>
                <p>无论是钱包的安装、不同网络的配置（小狐狸钱包添加 BSC、Polygon 链等）、代币的转账与接收，我们都会全程提供清晰的指导，有问必答。</p>
              </div>
              <div className="service-feature">
                <h3>授权管理与风险排查</h3>
                <p>定期指导您检查钱包的授权记录，及时取消不必要或可疑的合约授权，从源头上切断被盗风险。</p>
              </div>
            </div>
          </div>

          <div className="service-details-card">
            <div className="service-details-header">
              <div className="service-details-icon">🛡️</div>
              <h2>资金安全与被骗寻回方向指导</h2>
              <p className="service-subtitle">Asset Security & Scam Recovery Guidance</p>
            </div>
            <div className="service-details-content">
              <div className="service-feature">
                <h3>事前预防，防范于未然</h3>
                <p>为您深度解析常见的 Web3 骗局手法（如钓鱼网站、假冒空投、恶意签名），提升您的"反诈"意识。</p>
              </div>
              <div className="service-feature">
                <h3>事后黄金救援指导</h3>
                <p>如果不幸遭遇资金被盗，我们将第一时间为您提供应急指导：</p>
                <ul className="service-list">
                  <li>分析链上记录：指导您如何在区块链浏览器（如 Etherscan）上追踪资金流向。</li>
                  <li>切断持续损失：立即引导您采取措施，防止同一钱包的其余资产面临风险。</li>
                  <li>明确寻回方向：为您清晰指出可能的资金追回路径，例如：联系中心化交易所（CEX）冻结涉案账户、联络专业的链上安全公司（如 SlowMist, PeckShield）进行分析、以及如何在司法层面准备材料等。</li>
                </ul>
                <p className="service-note">请注意：我们提供的是专业的方向指导和资源对接，不承诺100%寻回资金，但会竭尽全力为您提供最大可能的支持。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="service-benefits-section">
        <div className="container">
          <h2 className="section-title">我们的服务优势</h2>
          <div className="service-benefits-grid">
            <div className="service-benefit-card">
              <div className="benefit-icon">👨‍💻</div>
              <h3>专业团队</h3>
              <p>由资深Web3从业者组成的专业团队，拥有丰富的实战经验和技术积累</p>
            </div>
            <div className="service-benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>快速响应</h3>
              <p>紧急问题24小时内响应，一般咨询48小时内详细解答</p>
            </div>
            <div className="service-benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>持续更新</h3>
              <p>随着Web3技术的发展，我们的服务内容也会不断更新，确保您始终获得最新的指导</p>
            </div>
            <div className="service-benefit-card">
              <div className="benefit-icon">🌐</div>
              <h3>全球视野</h3>
              <p>关注全球Web3发展动态，为您提供国际化的视角和建议</p>
            </div>
          </div>
        </div>
      </section>

      {/* 用户见证 */}
      <section className="service-testimonials-section">
        <div className="container">
          <h2 className="section-title">用户见证</h2>
          <div className="service-testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"通过终身技术服务，我成功避开了多个潜在的骗局项目，并学会了如何安全管理我的加密资产。这项服务为我节省了大量时间和潜在损失。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>陈先生</h4>
                  <p>资深投资者</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"作为Web3新手，我曾经对这个领域感到非常迷茫。有了专业指导后，我能够自信地探索各种DeFi项目，并建立了自己的安全使用习惯。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>林女士</h4>
                  <p>Web3新手</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"当我的钱包遭遇安全问题时，技术团队迅速响应并提供了专业指导，帮助我挽回了大部分资产。这种及时的支持是无价的。"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">👤</div>
                <div className="author-info">
                  <h4>王先生</h4>
                  <p>DeFi爱好者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="service-faq-section">
        <div className="container">
          <h2 className="section-title">常见问题</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>服务是一次性付费还是需要续费？</h3>
              <p>我们的终身技术服务采用一次性付费模式，无需续费，您可以终身享受我们的技术支持服务。</p>
            </div>
            <div className="faq-item">
              <h3>如何联系技术支持团队？</h3>
              <p>购买服务后，您将获得专属的联系方式，包括微信和Telegram，可以随时联系我们的技术支持团队。</p>
            </div>
            <div className="faq-item">
              <h3>服务支持哪些语言？</h3>
              <p>目前我们主要提供中文和英文的技术支持服务。</p>
            </div>
            <div className="faq-item">
              <h3>是否有咨询次数限制？</h3>
              <p>没有次数限制，但我们建议合理使用服务资源，以确保所有用户都能得到及时的响应。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="service-cta-section">
        <div className="container">
          <div className="service-cta-content">
            <h2>准备好开启您的Web3安全之旅了吗？</h2>
            <p>立即购买终身技术服务，获得专业团队的全方位支持</p>
            <button className="cta-button" onClick={handleBuyClick}>立即购买</button>
            <p className="cta-note">一次付费，终身受益</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifetimeServicePage;