import React, { useEffect } from 'react';
import LinkCard from '../components/LinkCard';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';
import '../styles/UCardsPage.css';

// 导入U卡图片
import mastercardCard from '../assets/card/mastercard.svg';
import safepalCard from '../assets/card/safepal.png';
import yptCard from '../assets/card/ypt.png';

// U卡数据
const ucards = [
  {
    id: 1,
    title: 'Bybit Card',
    description: 'Bybit交易所推出的虚拟信用卡，支持多种加密货币充值，全球消费。提供便捷的加密货币支付体验和丰厚的返现福利。',
    image: mastercardCard,
    link: 'https://www.bybit.com/cards/?ref=ZV2202&source=applet_invite',
    tags: ['U卡', '热门', 'MasterCard']
  },
  {
    id: 2,
    title: 'SafePal Card',
    description: '由SafePal钱包推出的虚拟信用卡服务，安全可靠，支持多种加密货币充值。与多家知名交易所合作，提供便捷的加密货币支付体验。',
    image: safepalCard,
    link: 'https://www.safepal.com/bank/register?referral=809130',
    tags: ['U卡', '安全', 'MasterCard']
  },
  {
    id: 3,
    title: 'YPT Card',
    description: 'YPT提供的虚拟信用卡服务，支持多种加密货币和法币支付，为用户提供全球支付解决方案。安全便捷，全球适用。',
    image: yptCard,
    link: 'https://d.ypt.com?code=xA6lkM',
    tags: ['U卡', 'Visa', '全球适用']
  }
];

const UCardsPage = () => {
  useEffect(() => {
    // 确保页面滚动到顶部
    window.scrollTo(0, 0);
    
    // 设置页面标题
    document.title = 'U卡推荐 - ZMWeb3';
  }, []);
  
  return (
    <div className="ucards-page">
      <ScrollToTopOnMount />
      <div className="page-header">
        <div className="container">
          <h1>U卡推荐</h1>
          <p>我们精选了市场上最优质的加密货币支付卡，为您提供更好的数字资产消费渠道</p>
        </div>
      </div>
      
      <section className="ucards-section">
        <div className="container">
          <div className="ucards-grid">
            {ucards.map(card => (
              <LinkCard 
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
                link={card.link}
                tags={card.tags}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="info-section">
        <div className="container">
          <h2>加密货币支付卡的优势</h2>
          <div className="info-content">
            <p>加密货币支付卡（U卡）为加密货币持有者提供了便捷的消费方式，将数字资产与日常生活无缝连接。以下是使用加密货币支付卡的主要优势：</p>
            <ul>
              <li><strong>全球适用</strong>：大多数加密货币支付卡都基于Visa或MasterCard网络，可在全球数百万商户使用。</li>
              <li><strong>隐私保护</strong>：相比传统银行卡，加密货币支付卡通常提供更好的隐私保护。</li>
              <li><strong>丰厚返现</strong>：许多加密货币支付卡提供消费返现，比传统信用卡更为丰厚。</li>
              <li><strong>无需银行账户</strong>：无需传统银行账户即可使用，为无银行账户人群提供金融服务。</li>
              <li><strong>快速充值</strong>：支持多种加密货币快速充值，方便灵活。</li>
              <li><strong>汇率优惠</strong>：通常提供优惠的货币兑换汇率，减少跨境支付成本。</li>
            </ul>
            <p>通过我们提供的推广链接注册加密货币支付卡，您可以获得额外的注册奖励和优惠。</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UCardsPage;