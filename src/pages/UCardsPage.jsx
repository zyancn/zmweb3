import React from 'react';
import LinkCard from '../components/LinkCard';
import '../styles/UCardsPage.css';

// 示例数据
const ucards = [
  {
    id: 1,
    title: 'Depay 虚拟信用卡',
    description: '全球领先的加密支付解决方案，支持多种加密货币支付。Depay提供虚拟Visa卡，可用于全球在线消费，支持多种加密货币充值。',
    image: '/src/assets/images/visa.svg',
    link: 'https://depay.one/zh-cn/register?inviteCode=YOUR_CODE',
    tags: ['U卡', '热门', 'Visa']
  },
  {
    id: 2,
    title: 'OneKey Card',
    description: '由OneKey钱包推出的虚拟信用卡服务，安全可靠，支持多种加密货币充值。OneKey Card与多家知名交易所合作，提供便捷的加密货币支付体验。',
    image: '/src/assets/images/visa.svg',
    link: 'https://card.onekey.so/?ref=YOUR_REF_CODE',
    tags: ['U卡', '安全', 'Visa']
  },
  {
    id: 3,
    title: 'Alchemy Pay 虚拟卡',
    description: '连接加密货币和传统金融的桥梁，提供虚拟信用卡服务。Alchemy Pay支持多种加密货币和法币支付，为用户提供全球支付解决方案。',
    image: '/src/assets/images/mastercard.svg',
    link: 'https://www.alchemypay.org/?ref=YOUR_REF_CODE',
    tags: ['U卡', 'MasterCard']
  },
  {
    id: 4,
    title: 'Crypto.com Visa卡',
    description: '知名加密货币平台Crypto.com推出的实体Visa卡，提供多级别卡片选择和丰厚的返现福利。Crypto.com Visa卡支持全球ATM取款和消费。',
    image: '/src/assets/images/visa.svg',
    link: 'https://crypto.com/app/YOUR_REF_CODE',
    tags: ['U卡', '实体卡', 'Visa']
  },
  {
    id: 5,
    title: 'Binance Card',
    description: '币安交易所推出的虚拟和实体卡服务，支持多种加密货币支付和全球消费。Binance Card提供高达8%的消费返现，是加密货币持有者的理想选择。',
    image: '/src/assets/images/visa.svg',
    link: 'https://www.binance.com/zh-CN/cards/YOUR_REF_CODE',
    tags: ['U卡', 'Visa', '返现']
  },
  {
    id: 6,
    title: 'Wirex Card',
    description: '老牌加密支付解决方案，提供虚拟和实体卡服务，支持多种加密货币和法币。Wirex Card在全球范围内广受欢迎，提供多币种账户和即时兑换功能。',
    image: '/src/assets/images/mastercard.svg',
    link: 'https://wirexapp.com/r/YOUR_REF_CODE',
    tags: ['U卡', 'MasterCard', '多币种']
  }
];

const UCardsPage = () => {
  return (
    <div className="ucards-page">
      <div className="page-header">
        <div className="container">
          <h1>U卡推广</h1>
          <p>我们精选了市场上最优质的加密货币支付卡，为您提供高质量的推广链接</p>
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